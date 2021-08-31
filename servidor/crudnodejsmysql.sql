/*
SQLyog Community v13.1.5  (64 bit)
MySQL - 10.4.8-MariaDB : Database - crudnodejsmysql
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`crudnodejsmysql` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `crudnodejsmysql`;

/*Table structure for table `contactanos` */

DROP TABLE IF EXISTS `contactanos`;

CREATE TABLE `contactanos` (
  `id_contactanos` int(11) NOT NULL AUTO_INCREMENT,
  `mail` varchar(1000) DEFAULT NULL,
  `consulta` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id_contactanos`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;

/*Data for the table `contactanos` */

insert  into `contactanos`(`id_contactanos`,`mail`,`consulta`) values 
(5,'admin@admin.com','ayuda me quiero suicidaaaaaaaaaaar'),
(20,'felipe@si.com','por que me pica el pp?');

/*Table structure for table `m_v` */

DROP TABLE IF EXISTS `m_v`;

CREATE TABLE `m_v` (
  `id_mv` int(11) NOT NULL AUTO_INCREMENT,
  `mision` varchar(900) DEFAULT NULL,
  `vision` varchar(900) DEFAULT NULL,
  PRIMARY KEY (`id_mv`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*Data for the table `m_v` */

insert  into `m_v`(`id_mv`,`mision`,`vision`) values 
(1,'Ser la empresa lider en la comercializacion de equipos de computo, ya que el cliente es lo mas importante de la empresa, por lo tanto debe tratarse de la mejor manera posible, ser en el 2025 la empresa mas reconocida con las mejores marcas de componentes.','ofrecer un servicio de calidad a nuestros clientes de acuerdo a los requerimientos planeados. ser la empresa lider en la venta de computadoras portatiles y de escritorio con las mejores marcas del mercado , para lo cual trabajaremos con estandares de calidad bien ejecutados para que los clientes nos prefieran.');

/*Table structure for table `noticias` */

DROP TABLE IF EXISTS `noticias`;

CREATE TABLE `noticias` (
  `id_noticias` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(1000) DEFAULT NULL,
  `descripcion` varchar(9000) DEFAULT NULL,
  PRIMARY KEY (`id_noticias`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*Data for the table `noticias` */

insert  into `noticias`(`id_noticias`,`titulo`,`descripcion`) values 
(1,'nuevas graficas rtx serie 30','nvidia saca sus nuevas graficas serie 30 y se acaban en menos de un dia no hay stock xdddd');

/*Table structure for table `precios` */

DROP TABLE IF EXISTS `precios`;

CREATE TABLE `precios` (
  `id_precio` int(11) NOT NULL AUTO_INCREMENT,
  `dolar` varchar(900) DEFAULT NULL,
  `cop` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id_precio`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

/*Data for the table `precios` */

insert  into `precios`(`id_precio`,`dolar`,`cop`) values 
(1,'1 USD','3.610 COP'),
(2,'5 USD','18.052 COP'),
(3,'10 USD','36.104 COP'),
(4,'50 USD','180.522 COP'),
(5,'100 USD','361.004 COP');

/*Table structure for table `productos` */

DROP TABLE IF EXISTS `productos`;

CREATE TABLE `productos` (
  `id_productos` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(1000) DEFAULT NULL,
  `descripcion` varchar(1000) DEFAULT NULL,
  `id_tipos` int(11) DEFAULT NULL,
  `precio` varchar(1000) DEFAULT NULL,
  `img` varchar(9000) DEFAULT NULL,
  PRIMARY KEY (`id_productos`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;

/*Data for the table `productos` */

insert  into `productos`(`id_productos`,`nombre`,`descripcion`,`id_tipos`,`precio`,`img`) values 
(1,'fuente thermaltake','500w 80+ white',1,'255.000$','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmontesanoweb.com.ar%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F3%2Fimage%2F9df78eab33525d08d6e5fb8d27136e95%2Ff%2Fu%2Ffuente_thermaltake_smart_500w_white_80_plus_fuente_thermaltake_smart_500w_white_80_plus.jpg&f=1&nofb=1'),
(2,'fuente Coolermaster','600w 80+ bronze',1,'190.000$','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ebayimg.com%2Fimages%2Fg%2FJk0AAOSwl-BZuxNR%2Fs-l640.jpg&f=1&nofb=1'),
(3,'ram hyperx','8Gb   ddr4',2,'125.000$','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bhphotovideo.com%2Fimages%2Fimages2000x2000%2Fkingston_hx421c14fbk2_8_hyperx_series_8gb_2_1249738.jpg&f=1&nofb=1'),
(4,'gtx 1660 super','Asus',4,'900.000$','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fbabeltechreviews.com%2Fwp-content%2Fuploads%2F2019%2F10%2FDSCN6567.jpg%3Fresize%3D1068%252C898%26ssl%3D1&f=1&nofb=1'),
(5,'Amd Radeon Rx570','Asus',4,'750.000$','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.evetech.co.za%2Frepository%2FProductImages%2Fasus-rx-570-4gb-expidition-oc-edition-1000px-v1-0001.jpg&f=1&nofb=1'),
(6,'intel core i5','7400 3.0Ghrz',5,'300.000$','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnucbd.com%2Fwp-content%2Fuploads%2F2019%2F04%2FIntel-Core-i5-7500-7th-Generation-Processor.jpg&f=1&nofb=1'),
(8,'ASRock H410M-HDV','Intel Lga 1200 motherboard microATX',3,'280.000$','https://i.ebayimg.com/images/g/FpIAAOSw5-lgH3LO/s-l500.jpg'),
(9,'SSD 240GB','Adata Ultimate SU630 2.5\" 240GB SATA III Unidad De Estado Sólido Interno 3D NAND SSD',6,'107.000$','https://i.ebayimg.com/images/g/EGAAAOSwkFpfB5El/s-l500.jpg'),
(10,'HDD 1TB ','WD Blue ',6,'80.000$','https://i.ebayimg.com/images/g/3oMAAOSwikxgNmwn/s-l1600.jpg'),
(11,'ventilador thermaltake','Ventilador Thermaltake 120mm Led Azul/Rojo',7,'55.000$','https://symcomputadores.com/portal/wp-content/uploads/2019/12/8.jpg'),
(12,'mouse Logitech G203','G203 informa 1000 veces por segundo, 8 veces más rápido que los ratones estándar. Esto significa que cuando se mueve el mouse o se hace clic en él, la respuesta en pantalla es prácticamente instantánea.',7,'140.000$','https://http2.mlstatic.com/logitech-g203-prodigy-gaming-6-botones-2008000dpi-D_NQ_NP_660524-MCO31539282496_072019-F.jpg'),
(13,'Redragon Mitra','placa base de metal pulo con detalles en abs switches  outemu blue',7,'200.000$','https://cdn.shopify.com/s/files/1/2695/9506/products/K551RGB-1_1024x1024@2x.png?v=1525704008');

/*Table structure for table `proveedores` */

DROP TABLE IF EXISTS `proveedores`;

CREATE TABLE `proveedores` (
  `id_proveedores` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(1000) DEFAULT NULL,
  `info` varchar(1000) DEFAULT NULL,
  `link` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id_proveedores`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

/*Data for the table `proveedores` */

insert  into `proveedores`(`id_proveedores`,`nombre`,`info`,`link`) values 
(1,'intel','Intel Corporation es el mayor fabricante de circuitos integrados del mundo según su cifra de negocio anual.​ La compañía estadounidense es la creadora de la serie de procesadores x86, los procesadores más comúnmente encontrados en la mayoría de las computadoras personales','https://www.intel.es/content/www/es/es/homepage.html'),
(2,'amd','Advanced Micro Devices, Inc. es una compañía estadounidense de semiconductores con sede en Santa Clara, California, que desarrolla procesadores de computación y productos tecnológicos similares de consumo','https://www.amd.com/en'),
(3,'redragon','Redragon es un fabricante de productos únicos de alta calidad para jugadores. La empresa se especializa en investigación, desarrollo y fabricación de dispositivos y accesorios para juegos: teclados, ratones y alfombrillas de ratón. ','https://www.redragonzone.com'),
(4,'logitech','Logitech, una empresa suiza centrada en la innovación y la calidad, diseña productos y experiencias que tienen un lugar cotidiano en la vida de las personas','https://www.logitech.com/en-us');

/*Table structure for table `redes` */

DROP TABLE IF EXISTS `redes`;

CREATE TABLE `redes` (
  `id_redes` int(11) NOT NULL AUTO_INCREMENT,
  `imagen` varchar(1000) DEFAULT NULL,
  `nombre` varchar(1000) DEFAULT NULL,
  `link` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id_redes`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;

/*Data for the table `redes` */

insert  into `redes`(`id_redes`,`imagen`,`nombre`,`link`) values 
(10,'nigger','popo','pipi');

/*Table structure for table `rol` */

DROP TABLE IF EXISTS `rol`;

CREATE TABLE `rol` (
  `id_rol` int(11) NOT NULL AUTO_INCREMENT,
  `rol` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id_rol`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

/*Data for the table `rol` */

insert  into `rol`(`id_rol`,`rol`) values 
(1,'admin'),
(2,'usuario');

/*Table structure for table `term` */

DROP TABLE IF EXISTS `term`;

CREATE TABLE `term` (
  `id_term` int(11) NOT NULL AUTO_INCREMENT,
  `term` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id_term`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*Data for the table `term` */

insert  into `term`(`id_term`,`term`) values 
(1,'acepta querernos y vendernos su alma para siempre owo');

/*Table structure for table `tipos_product` */

DROP TABLE IF EXISTS `tipos_product`;

CREATE TABLE `tipos_product` (
  `id_tipos` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id_tipos`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

/*Data for the table `tipos_product` */

insert  into `tipos_product`(`id_tipos`,`tipo`) values 
(1,'fuentes'),
(2,'rams'),
(3,'motherboard'),
(4,'gpu'),
(5,'cpu'),
(6,'discos'),
(7,'varios');

/*Table structure for table `usuarios` */

DROP TABLE IF EXISTS `usuarios`;

CREATE TABLE `usuarios` (
  `id_usuarios` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `contrasena` varchar(100) DEFAULT NULL,
  `id_rol` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_usuarios`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4;

/*Data for the table `usuarios` */

insert  into `usuarios`(`id_usuarios`,`nombre`,`email`,`telefono`,`contrasena`,`id_rol`) values 
(19,'juaan','felipecarvajalp@hotmail.com','3202669126','adminsdsd',1),
(28,'felipe','felipe@si.com','3202669126','12345',1);

/*Table structure for table `ventas` */

DROP TABLE IF EXISTS `ventas`;

CREATE TABLE `ventas` (
  `id_ventas` int(11) NOT NULL AUTO_INCREMENT,
  `mes` varchar(100) DEFAULT NULL,
  `numero` varchar(900) DEFAULT NULL,
  PRIMARY KEY (`id_ventas`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4;

/*Data for the table `ventas` */

insert  into `ventas`(`id_ventas`,`mes`,`numero`) values 
(1,'enero',NULL),
(2,'febrero',NULL),
(3,'marzo',NULL),
(4,'abril',NULL),
(5,'mayo',NULL),
(6,'junio',NULL),
(7,'julio',NULL),
(8,'agosto',NULL),
(9,'septiembre',NULL),
(10,'octubre',NULL),
(11,'noviembre',NULL),
(12,'diciembre',NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
