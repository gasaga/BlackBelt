// src/data/techniques/tecnicas-rojo.js
// Técnicas para el cinturón rojo
// - >  rojo

// --------defensas---------
import { sonnalAreMaki } from "../../assets/images";
import { gechioMontongMaki } from "../../assets/images";
import { goduroMontongMaki } from "../../assets/images";
import { goduroAreMaki } from "../../assets/images";

// ------- pum --------------
import { oeSantulMaki } from "../../assets/images";
import { dangkioTokJirugui } from "../../assets/images";

// ------- patadas -----------
import { momDolioFurioChagui } from "../../assets/images";


const rojoTechniques = {
    sonnalAreMaki: {
        id: 'cint-rojo-1',
        name: 'Sonnal Are Maki',
        image: sonnalAreMaki,
        description: 'la mano que defiende lo hace de arriba a abajo partiendo del hombro contrario y defendiendo a la altura del are maki, con ambas palmas de la mano abiertas.',
        //video: '/videos/defensas/sonnal-are-maki.mp4',
    },
    gechioMontongMaki: {
        id: 'cint-rojo-2',
        name: 'Gechio Montong Maki',
        image: gechioMontongMaki,
        description: 'Defensa donde partiendo de una posición cruzada de brazos se elimina un agarre o inmovilización.',
        //video: '/videos/defensas/gechio-montong-maki.mp4',
    },
    goduroMontongMaki: {
        id: 'cint-rojo-3',
        name: 'Goduro Montong Maki',
        image: goduroMontongMaki,
        description: 'Defensa al medio, el brazo de la pierna adelantada efectua Bakat Palmok Maki mientras que el contrario refuerza la posición a la altura del codo. La defensa es igual a Sonnal Montong Maki pero con los puños cerrados.',
        //video: '/videos/defensas/goduro-montong-maki.mp4',
    },
    goduroAreMaki: {
        id: 'cint-rojo-4',
        name: 'Goduro Are Maki',
        image: goduroAreMaki,
        description: 'Defensa baja, como un sonnal Are Maki pero con los puños cerrados.',
        //video: '/videos/defensas/goduro-are-maki.mp4',
    },
    oeSantulMaki: {
        id: 'cint-rojo-5',
        name: 'Oe Santul Maki',
        image: oeSantulMaki,
        description: 'Defensa doble, una a la altura alta y otra baja, con el canto interior la de arriba y canto exterior la de abajo con los puños cerrados.',
        //video: '/videos/pum/oe-santul-maki.mp4',
    },
    dangkioTokJirugui: {
        id: 'cint-rojo-6',
        name: 'Dangkio Tok Jirugui',
        image: dangkioTokJirugui,
        description: 'Ataque con el puño a la mandibula sujetando la cabeza con la otra mano.',
        //video: '/videos/pum/dangkio-tok-jirugui.mp4',
    },
    momDolioFurioChagui: {
        id: 'cint-rojo-7',
        name: 'Mom Dolio Furio Chagui',
        image: momDolioFurioChagui,
        description: 'De giro, similar al Mondollio Nako Chagui pero manteniendo siempre la pierna recta como en la técnica anterior. Normalmente se golpea con el talón.',
        //video: '/videos/patadas/mom-dolio-furio-chagui.mp4',
    },

};

export default rojoTechniques;