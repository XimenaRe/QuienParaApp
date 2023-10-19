import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
// import * as jwt from 'jsonwebtoken';

@Injectable({
  providedIn: 'root'
})
export class jwtSecurityService {

  decodeToken(token: string): any {
    try {
      const decodedToken = jwt_decode(token);
      return decodedToken;
    } catch (error) {
      console.error('Error decoding JWT token:', error);
      return null;
    }
  }
  // encodeToken(payload: any, secret: string): string {
  //   const token = jwt.sign(payload, secret);
  //   return token;
  // }
}
