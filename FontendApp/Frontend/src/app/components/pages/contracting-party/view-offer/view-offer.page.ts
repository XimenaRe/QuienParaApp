import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-view-offer',
  templateUrl: './view-offer.page.html',
  styleUrls: ['./view-offer.page.scss'],
})
export class ViewOfferPage implements OnInit {
  type!: any;
  name_type!: string;
  signupForm: any = FormGroup;
  responseMessage: any;
  password_wrong: boolean = false;
  imageBase64: string | null = null; // Variable para almacenar la imagen Base64
  idUser: any;
  offerData: any;

  decodedImage: string | null = null; // Variable para almacenar la imagen decodificada

  constructor(
    private alert2: AlertsService,
    private _route: ActivatedRoute,
    private router: Router,
    private offerService: OfferService,
    private alert: AlertController,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.handleSubmit();
    this.type = this._route.snapshot.paramMap.get('id');

    if (this.type === '1') {
      this.name_type = 'Plomería';
    } else if (this.type === '2') {
      this.name_type = 'Pintura';
    } else if (this.type === '3') {
      this.name_type = 'Contrucción';
    } else if (this.type === '4') {
      this.name_type = 'Eletricidad';
    } else if (this.type === '5') {
      this.name_type = 'Jardinería';
    } else {
      this.name_type = 'Carpintería';
    }

    this.signupForm = this.formBuilder.group({
      description: [null, [Validators.required]],
      address: [null, [Validators.required]],
      time: [null, [Validators.required]],
      photo: [null],
    });
  }

  onFileSelected(event: any) {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;

    // Verificar que fileInput y fileInput.files no sean nulos
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        this.imageBase64 = event.target?.result as string;
      };
      reader.readAsDataURL(selectedFile);
    } else {
      console.error('No se seleccionó ningún archivo.');
    }
  }


  handleSubmit() {

    this.idUser = localStorage.getItem('data');
    const userId = JSON.parse(this.idUser);

    this.offerService.getOfferById(userId[0].user_id).subscribe((response: any) => {
      if (response) {
        this.offerData = response;
      } else {
        console.log(response);
      }
    });
  }

  global_alert() {
    this.alert2.global_alert('Lo sentimos!, pero está función no está disponible...');
  }

  async alert_ok() {
    const alert = await this.alert.create({
      header: 'Registro Completo',
      message: 'La oferta se ha creado de manera exitosa!',
      mode: 'ios',
    });

    await alert.present();
    setTimeout(() => {
      alert.dismiss();
      this.router.navigate(['/contracting/tabs/tab1'])
    }, 3100);
  }

  async rolSelectError() {
    const alert = await this.alert.create({
      header: 'Ups, ha ocurrido un eror!',
      message: 'Antes de comenzar a navegar por el sistema, es importante seleccionar un tipo de rol. Te recomendamos elegir uno para poder continuar.',
      buttons: ['OK'],
      mode: 'ios',
    });

    await alert.present();
    setTimeout(() => {
      alert.dismiss();
      localStorage.clear();
      this.router.navigate(['/home'])
    }, 3100);
  }
}
