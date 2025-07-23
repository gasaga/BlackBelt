// src/data/techniques/tecnicas-naranja.js
// Técnicas para el cinturón naranja
// - >  naranja
// --------defensas---------
import { janSonnalMontongMaki } from "../../assets/images";
import { sonnalMontongMaki } from "../../assets/images";

// -------ataques---------
import { montongDubonJirugui } from "../../assets/images";
import { olgulBandeJirugui } from "../../assets/images";
import { sonnalAnChigui } from "../../assets/images";

// -------posiciones---------
import { tuitKubiSogui } from "../../assets/images";
import { chumchumSogui } from "../../assets/images";

//---------- patadas -----------
import { bakatDariFurigi } from "../../assets/images";
import { andariFurigi } from "../../assets/images";
import { miroChagui } from "../../assets/images";
import { bandalChagui } from "../../assets/images";

const naranjaTechniques = {
    janSonnalMontongMaki: {
        id: 'cint-nara-1',
        name: 'Jan Sonnal Montong Maki',
        image: janSonnalMontongMaki,
        description: ' Defensa lateral media con una mano abierta.',
        //video: '/videos/defensas/montong-an-maki.mp4',
    },
    sonnalMontongMaki: {
        id: 'cint-nara-2',
        name: 'Sonnal Montong Maki',
        image: sonnalMontongMaki,
        description: ' Defensa lateral media con ambas manos abiertas.',
        //video: '/videos/defensas/montong-an-maki.mp4',
    },
    montongDubonJirugui: {
        id: 'cint-nara-3',
        name: 'Montong Dubon Jirugui',
        image: montongDubonJirugui,
        description: ' Doble golpe de puño recto al plexo solar, con el puño en posición vertical, desde la altura del hombro.',
        //video: '/videos/ataques/montong-dubon-jirugui.mp4',
    },
    olgulBandeJirugui: {
        id: 'cint-nara-4',
        name: 'Olgul Bande Jirugui',
        image: olgulBandeJirugui,
        description: ' Golpe de puño recto a la cara, con el puño en posición vertical, desde la altura del hombro.',
        //video: '/videos/ataques/olgul-bande-jirugui.mp4',
    },
    sonnalAnChigui: {
        id: 'cint-nara-5',
        name: 'Sonnal An Chigui',
        image: sonnalAnChigui,
        description: ' Golpe de canto de mano abierta al cuello, con el brazo extendido.',
        //video: '/videos/ataques/sonnal-an-chigui.mp4',
    },
    tuitKubiSogui: {
        id: 'cint-nara-6',
        name: 'Tuit Kubi Sogui',
        image: tuitKubiSogui,
        description: 'Posición de pie, se hace flexionando la pierna atrasada dejando el 75% del peso corporal en ella.',
        //video: '/videos/posiciones/tuit-kubi-sogui.mp4',
    },
    chumchumSogui: {
        id: 'cint-nara-7',
        name: 'Chumchum Sogui',
        image: chumchumSogui,
        description: 'Posición de pie, con las piernas ligeramente separadas y el peso distribuido uniformemente.En posicion de montar a caballo.',
        //video: '/videos/posiciones/chumchum-sogui.mp4',
    },
    bakatDariFurigi: {
        id: 'cint-nara-8',
        name: 'Bakat Dari Furigi',
        image: bakatDariFurigi,
        description: 'Patada de abanico hacia afuera de la cadera.',
        //video: '/videos/patadas/bakat-dari-furigi.mp4',
    },
    andariFurigi: {
        id: 'cint-nara-9',
        name: 'Andari Furigi',
        image: andariFurigi,
        description: 'Patada de abanico hacia adentro de la cadera.',
        //video: '/videos/patadas/andari-furigi.mp4',
    },
    miroChagui: {
        id: 'cint-nara-10',
        name: 'Miro Chagui',
        image: miroChagui,
        description: 'Patada descendente, golpe con la planta del pie, desde la altura de la cadera.',
        //video: '/videos/patadas/miro-chagui.mp4',
    },
    bandalChagui: {
        id: 'cint-nara-11',
        name: 'Bandal Chagui',
        image: bandalChagui,
        description: 'Patada circular, golpe con el empeine del pie, a la altura del plexo solar.',
        //video: '/videos/patadas/bandal-chagui.mp4',
    },
};

export default naranjaTechniques;