// src/data/techniques/tecnicas-azul.js
// Técnicas para el cinturón azul
// - >  azul

// --------defensas---------
import { okgorroAreMaki } from "../../assets/images";
import { gechoAreMaki } from "../../assets/images";
import { batangsonMontongMaki } from "../../assets/images";
import { batangsonMontongAnMaki } from "../../assets/images";
import { batangsonGoduroMontongAnMaki } from "../../assets/images";

// -------ataques---------
import { yopJirugui } from "../../assets/images";
import { dungChumokBakatChigui } from "../../assets/images";
import { duChechoJirugi } from "../../assets/images";

// -------posiciones---------
import { bomSogui } from "../../assets/images";
import { moaSogui } from "../../assets/images";
import { naranjiSogui } from "../../assets/images";
import { gawiMaki } from "../../assets/images";

//--------- pum --------------
import { bituroJansonnalOlgulMaki } from "../../assets/images";
import { dangkioOllioMurupChigui } from "../../assets/images";
import { bochumokChumbi } from "../../assets/images";
import { piochokChagui } from "../../assets/images";

//---------- patadas -----------
import { tuitChagui } from "../../assets/images";
import { furioChagui } from "../../assets/images";
import { monDollioYopChagui } from "../../assets/images";
import { momDollioNakoChagui } from "../../assets/images";


const azulTechniques = {
     okgorroAreMaki: {
        id: 'cint-azul-1',
        name: 'Ogkoro Are Maki',
        image: okgorroAreMaki,
        description: 'Defensa con ambos brazos cruzados con apoyo del antebrazo justo sobre las muñecas.',
        //video: '/videos/defensas/montong-an-maki.mp4',
    },
    gechoAreMaki: {
        id: 'cint-azul-2',
        name: 'Gechio Are Maki',
        image: gechoAreMaki,
        description: 'Movimiento de defensa/concentración, los puños cerrados y cruzados al pecho, se abren los brazos defendiendo a ambos lados del cuerpo.',
        //video: '/videos/defensas/montong-an-maki.mp4',
    },
    batangsonMontongMaki: {
        id: 'cint-azul-3',
        name: 'Batangson Montong Maki',
        image: batangsonMontongMaki,
        description: 'Parada media con el canto de la mano abierta, desde el hombro contrario hasta la altura del plexo solar, a un puño de distancia de este.',
        //video: '/videos/defensas/batangson-montong-maki.mp4',
    },
    batangsonMontongAnMaki: {
        id: 'cint-azul-4',
        name: 'Batangson Montong An Maki',
        image: batangsonMontongAnMaki,
        description: 'Parada media con el canto de la mano abierta, desde el hombro contrario hasta la altura del plexo solar, a un puño de distancia de este, con el pie contrario.',
        //video: '/videos/defensas/batangson-montong-an-maki.mp4',
    },
    batangsonGoduroMontongAnMaki: {
        id: 'cint-azul-5',
        name: 'Goduro Batangson Montong An Maki',
        image: batangsonGoduroMontongAnMaki,
        description: ' Parada con la palma de la mano al medio de dentro afuera pero con ayuda del otro brazo.',
        //video: '/videos/defensas/batangson-goduro-montong-an-maki.mp4',
    },
    yopJirugui: {
        id: 'cint-azul-6',
        name: 'Yop Jirugui',
        image: yopJirugui,
        description: 'Golpe de puño recto al plexo solar, completamente de lado.',
        //video: '/videos/ataques/yop-jirugui.mp4',
    },
    dungChumokBakatChigui: {
        id: 'cint-azul-7',
        name: 'Dung Chumok Bakat Chigui',
        image: dungChumokBakatChigui,
        description: 'Golpe con los nudillos hacia afuera con el brazo extendido.',
        //video: '/videos/ataques/dung-chumok-bakat-chigui.mp4',
    },
    duChechoJirugi: {
        id: 'cint-azul-8',
        name: 'Du Checho Jirugi',
        image: duChechoJirugi,
        description: 'Doble ataque simultaneo de puño a la base de las costillas/abdomen.',
        //video: '/videos/ataques/du-checho-jirugi.mp4',
    },
    bomSogui: {
        id: 'cint-azul-9',
        name: 'Bom Sogui',
        image: bomSogui,
        description: ' se avanza un pie de forma que el talón quede al nivel de los dedos del pie atrasado. El talón del pie adelantado se eleva del suelo y queda como punto de apoyo el metatarso. Ambas rodillas se mantienen flexionadas. El peso del cuerpo descansa en el pie atrasado.',
        //video: '/videos/posiciones/bom-sogui.mp4',
    },
    moaSogui: {
        id: 'cint-azul-10',
        name: 'Moa Sogui',
        image: moaSogui,
        description: 'Posición de pie, los pies deben mantenerse juntos.',
        //video: '/videos/posiciones/moa-sogui.mp4',
    },
    naranjiSogui: {
        id: 'cint-azul-11',
        name: 'Naranji Sogui',
        image: naranjiSogui,
        description: 'los pies se mantienen paralelos con la separación de la distancia de un pie entre los talones.',
        //video: '/videos/posiciones/naranji-sogui.mp4',
    },
    gawiMaki: {
        id: 'cint-azul-12',
        name: 'Gawi Maki',
        image: gawiMaki,
        description: 'Moviento especial, de defensa con ambos puños cerrados, cruzados al pecho, se abren los brazos defendiendo medio y abajo, defendiendo como un are y montong.',
        //video: '/videos/defensas/gawi-maki.mp4',
    },
    bituroJansonnalOlgulMaki: {
        id: 'cint-azul-13',
        name: 'Bituro Jansonnal Olgul Maki',
        image: bituroJansonnalOlgulMaki,
        description: 'Defensa alta con el canto de la mano en un movimiento amplio desde el interior al exterior, . Bituro: retorciendo ligeramente el cuerpo.',
        //video: '/videos/defensas/bituro-jansonnal-olgul-maki.mp4',
    },
    dangkioOllioMurupChigui: {
        id: 'cint-azul-14',
        name: 'Dangkio Ollio Murup Chigui',
        image: dangkioOllioMurupChigui,
        description: 'Ataque con la rodilla a la cara o al pecho con agarre.',
        //video: '/videos/ataques/dangkio-ollio-murup-chigui.mp4',
    },
    bochumokChumbi: {
        id: 'cint-azul-15',
        name: 'Bochumok Chumbi',
        image: bochumokChumbi,
        description: ' Movimiento de concentración, con un puño cerrado a la alturo de la boca y el otro tapandolo.',
        //video: '/videos/pum/bochumok-chumbi.mp4',
    },
    piochokChagui: {
        id: 'cint-azul-16',
        name: 'Piochok Chagui',
        image: piochokChagui,
        description: 'Ataque con el pie reteniendo al oponente con la mano, haciendo un movimiento circular.',
        //video: '/videos/patadas/piochok-chagui.mp4',
    },
    tuitChagui: {
        id: 'cint-azul-17',
        name: 'Tuit Chagui',
        image: tuitChagui,
        description: 'Patada como una coz, con el talón hacia atrás, golpeando con el talón.',
        //video: '/videos/patadas/tuit-chagui.mp4',
    },
    furioChagui: {
        id: 'cint-azul-18',
        name: 'Furyo Chagui',
        image: furioChagui,
        description: 'Técnica efectuada manteniendo la pierna siempre recta, se eleva al máximo y se baja rápido en forma de media luna, con un movimiento de cadera y golpeando con el talón sin doblar la rodilla.',
        //video: '/videos/patadas/furio-chagui.mp4',
    },
    monDollioYopChagui: {
        id: 'cint-azul-19',
        name: 'Mon Dollio Yop Chagui',
        image: monDollioYopChagui,
        description: 'De giro, con cadera y hombros aprovechando el movimiento para golpear con la pierna atrasada. El giro es completo y termina en una técnica de "Yop Chagui".',
        //video: '/videos/patadas/mon-dollio-yop-chagui.mp4',
    },
    momDollioNakoChagui: {
        id: 'cint-azul-20',
        name: 'Mom Dollio Nako Chagui',
        image: momDollioNakoChagui,
        description: ' Alta de giro, donde golpeamos normalmente con la base del pie, se aprovecha la fuerza de inercia del giro a la vez del movimiento “de gancho” de rodilla y pie.',
        //video: '/videos/patadas/mom-dollio-nako-chagui.mp4',
    },

};

export default azulTechniques;