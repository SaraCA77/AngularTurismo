import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public sitiosturisticos = [{
    url: '../../../assets/images/torrecolpatria.jpg',
    nombre: 'Torre Colpatria Bogotá',
    // tslint:disable-next-line:max-line-length
    descripcion: '\nSituada en el barrio financiero de la ciudad, corresponde a uno de los más representativos sitios turísticos de Bogotá y al rascacielos más alto de la Colombia, alcanzando la impresionante altura de 196 metros. \n\nSu mayor atractivo, corresponde a su mirador en el piso número 50, desde donde se pueden obtener espectaculares vistas panorámicas del centro ciudad. Durante la noche, la torre normalmente es iluminada, con luces LED.'
  },
  {
    url: '../../../assets/images/catedralsal.jpg',
    nombre: 'Catedral de sal en Zipaquira',
    // tslint:disable-next-line:max-line-length
    descripcion: "\nA 48 kilómetros de Bogotá se sitúa uno de los más singulares atractivos de la región, correspondiente a un templo religioso construido en el interior de las minas de sal de Zipaquirá, obra única en su género inaugurada en 1995, proyectada por el arquitecto bogotano Roswell Garavito Pearl."
  },
  {
    url: '../../../assets/images/museodeoro.jpg',
    nombre: 'Museo del Oro',
    // tslint:disable-next-line:max-line-length
    descripcion: '\nOtra de las joyas de sitios turísticos de Bogotá, escondidas en corazón de La Candelaria, un museo donde se exhibe la colección de orfebrería prehispánica más grande del mundo, con cerca de treinta y cuatro mil piezas provenientes de diferentes culturas indígenas, tales como la Calima, Muisca, Nariño, Quimbaya, Sinú, Tayrona, San Agustín, Tierradentro, Tolima, entre otras. \n\nEntre sus piezas destacadas, se encuentra la famosa “Balsa Muisca”, pequeña escultura en oro y cobre, asociada a la Leyenda del Dorado, fabricada por la cultura muisca entre los años 600 y 1600 d.C. Otro punto de interés del museo, lo constituye el edificio mismo que lo alberga, una obra de arquitectura moderna, reconocida con el Premio Nacional de Arquitectura en 1970.'
  },
  {
    url: '../../../assets/images/cerromonserrate.jpg',
    nombre: 'Cerro de Monserrate Bogotá',
    // tslint:disable-next-line:max-line-length
    descripcion: '\nMontaña de 3.000 metros de altura apreciable desde diversos puntos de la ciudad, conocida tanto por la amplia oferta de actividades al aire libre que permiten sus múltiples senderos arborizados, como por las hermosas vistas panorámicas que se pueden obtener desde su cima. \n\nTambién en Monserrate, se puede visitar el Santuario del Señor Caído, punto de procesión de feligreses que acuden a presenciar la escultura “Santo Cristo Caído a los azotes y clavado en la cruz”, erigida en 1656. Al lugar se puede ascender caminando, en teleférico o funicular. '
  },
  {
    url: '../../../assets/images/lago.jpg',
    nombre: 'Laguna de Guatavita',
  // tslint:disable-next-line:max-line-length
    descripcion: '\nLocalizada a 75 kilómetros de la ciudad, corresponde a una laguna a 2.990 metros de altitud, famosa por ser el lugar al que hacen alusión las antiguas Leyendas del Dorado, según la cual el cacique muisca, llenaba la laguna con oro y tesoros, como ofrenda y símbolo de adoración a la diosa del agua. \n\nEl pueblo localizado en su entorno fue construido en la década de los sesenta, con el fin de reubicar a los habitantes del antiguo pueblo que quedaría sumergido por la construcción del Embalse de Tominé. Su diseño urbano hace referencia a la época colonial, con casas blancas con tejas de barro y pequeñas plazoletas.'
  }
];




  constructor() {}
}
