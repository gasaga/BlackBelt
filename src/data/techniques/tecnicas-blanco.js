// --------defensas---------
// - >  blanco
import { areMaki } from "../../assets/images";
import { montongMaki } from "../../assets/images";
import { olgulMaki } from "../../assets/images";

// -------- ataques ---------
import { montongJirugui } from "../../assets/images";

// -------- posiciones ---------
import { apSogui } from "../../assets/images";

// --------- patadas ---------
import { apChagui } from "../../assets/images";



const blancoTechniques = {
    areMaki: {
        id: 'cint-blanc-1',
        name: 'Are Maki',
        image: areMaki,
        description: ' Parada baja con el antebrazo, describiendo un movimiento semi-circular hacia el exterior desde el hombro contrario hasta debajo de la cintura, encima de la rodilla a un puño de distancia de esta.',
        //video: '/videos/defensas/are-maki.mp4',
    },
    montongMaki: {
        id: 'cint-blanc-2',
        name: 'Montong Maki',
        image: montongMaki,
        description: 'Parada media, con un movimiento del antebrazo del exterior al interior, desde el hombro contrario hasta la altura del plexo solar, a un puño de distancia de este.',
        //video: '/videos/defensas/montong-maki.mp4',
    },
    olgulMaki: {
        id: 'cint-blanc-3',
        name: 'Olgul Maki',
        image: olgulMaki,
        description: 'Defensa frontal dirigida a la altura de la cara.',
        //video: '/videos/defensas/olgul-maki.mp4',
    },
    montongJirugui: {
        id: 'cint-blanc-4',
        name: 'Montong Jirugui',
        image: montongJirugui,
        description: 'Golpe de puño recto al plexo solar, con el puño en posición vertical, desde la altura del hombro.',
        //video: '/videos/ataques/montong-jirugui.mp4',
    },
    apSogui: {
        id: 'cint-blanc-5',
        name: 'Ap Sogui',
        image: apSogui,
        description: 'Posición de pie, paso normal',
        //video: '/videos/posiciones/ap-sogui.mp4',
    },
    apChagui: {
        id: 'cint-blanc-6',
        name: 'Ap Chagi',
        image: apChagui,
        description: 'Patada frontal, golpe con el metatarso del pie.',
        //video: '/videos/patadas/ap-chagi.mp4',
    },


};

export default blancoTechniques;