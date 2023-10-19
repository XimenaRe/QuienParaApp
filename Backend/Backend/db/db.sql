/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 5.5.5-10.4.24-MariaDB : Database - quienparaapp
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`quienparaapp` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `quienparaapp`;

/*Table structure for table `offer` */

DROP TABLE IF EXISTS `offer`;

CREATE TABLE `offer` (
  `id_offer` int(11) NOT NULL AUTO_INCREMENT,
  `typeOffer` varchar(50) NOT NULL,
  `descriptionOffer` varchar(200) NOT NULL,
  `addressOffer` varchar(120) NOT NULL,
  `timeOffer` varchar(50) NOT NULL,
  `photoOffer` longtext NOT NULL,
  `idUser_idOffer` int(11) NOT NULL,
  PRIMARY KEY (`id_offer`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

/*Data for the table `offer` */

/*Table structure for table `rol` */

DROP TABLE IF EXISTS `rol`;

CREATE TABLE `rol` (
  `rol_id` int(11) NOT NULL AUTO_INCREMENT,
  `name_rol` varchar(50) NOT NULL,
  `description_rol` tinytext NOT NULL,
  PRIMARY KEY (`rol_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

/*Data for the table `rol` */

insert  into `rol`(`rol_id`,`name_rol`,`description_rol`) values (1,'admin',''),(2,'contracting',''),(3,'contractor','');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_firstName` varchar(250) NOT NULL,
  `user_lastName` varchar(250) NOT NULL,
  `user_contactNumber` varchar(20) DEFAULT NULL,
  `user_email` varchar(50) NOT NULL,
  `user_password` varchar(250) NOT NULL,
  `user_status` varchar(20) NOT NULL,
  `userRole_idRol` int(11) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`user_email`),
  KEY `userRole_idRol` (`userRole_idRol`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`userRole_idRol`) REFERENCES `rol` (`rol_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`user_id`,`user_firstName`,`user_lastName`,`user_contactNumber`,`user_email`,`user_password`,`user_status`,`userRole_idRol`) values (9,'admin','',NULL,'admin@gmail.com','admin','true',1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
