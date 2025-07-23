// src/data/techniques/tecnicas-verde.js
// Técnicas para el cinturón verde
// - >  verde
// --------defensas---------

import { montongBakatMaki } from "../../assets/images";
import { olgulBakatMaki } from "../../assets/images";

// -------ataques---------

import { pionsonKutSeuoChirugui } from "../../assets/images";
import { palkupDolioChigui } from "../../assets/images";
import { mechumokNeryoYopChigui } from "../../assets/images";
import { dungChumokApChigui } from "../../assets/images";

// -------posiciones---------

import { uenSogui } from "../../assets/images";
import { orunSogui } from "../../assets/images";
import { pionjiSogui } from "../../assets/images";
import { tuitKoaSogui } from "../../assets/images";

//--------- pum --------------

import { chebipumMokChigui } from "../../assets/images";
import { palkupPiochokChigui } from "../../assets/images";

//---------- patadas -----------

import { bituroChagui } from "../../assets/images";
import { neryoChagui } from "../../assets/images";
import { momDolioTuitChagui } from "../../assets/images";
import { nakoChagui } from "../../assets/images";

const verdeTechniques = {
    montongBakatMaki: {
        id: 'cint-ver-1',
        name: 'Montong Bakat Maki',
        image: montongBakatMaki,
        description: 'Parada media, con un movimiento del antebrazo del interior al exterior, desde el hombro contrario hasta la altura del plexo solar, a un puño de distancia de este.',
        //video: '/videos/defensas/montong-bakat-maki.mp4',
    },
    olgulBakatMaki: {
        id: 'cint-ver-2',
        name: 'Olgul Bakat Maki',
        image: olgulBakatMaki,
        description: 'Parada alta, con un movimiento del antebrazo del interior al exterior, desde el hombro contrario hasta la altura de la frente, a un puño de distancia de esta.',
        //video: '/videos/defensas/olgul-bakat-maki.mp4',
    },
    pionsonKutSeuoChirugui: {
        id: 'cint-ver-3',
        name: 'Pionson Kut Seuo Chirugui',
        image: pionsonKutSeuoChirugui,
        description: 'Golpe con los dedos de la mano abierta al plexo solar, con el brazo extendido, con la mano en posición vertical.',
        //video: '/videos/ataques/pionson-kut-seuo-chirugui.mp4',
    },
    palkupDolioChigui: {
        id: 'cint-ver-4',
        name: 'Palkup Dolio Chigui',
        image: palkupDolioChigui,
        description: 'Golpe de codo con un movimiento circular.',
        //video: '/videos/ataques/palkup-dolio-chigui.mp4',
    },
    mechumokNeryoYopChigui: {
        id: 'cint-ver-5',
        name: 'Mechumok Neryo Yop Chigui',
        image: mechumokNeryoYopChigui,
        description: 'Golpe de puño descendente lateral, con el brazo extendido, golpeando como un martillo.',
        //video: '/videos/ataques/mechumok-neryo-yop-chigui.mp4',
    },
    dungChumokApChigui: {
        id: 'cint-ver-6',
        name: 'Dung Chumok Ap Chigui',
        image: dungChumokApChigui,
        description: 'Golpe con los nudillos del puño hacia adelante, con el brazo doblado.',
        //video: '/videos/ataques/dung-chumok-ap-chigui.mp4',
    },
    uenSogui: {
        id: 'cint-ver-7',
        name: 'Uen Sogui',
        image: uenSogui,
        description: 'Posición de pie, con el pie izquierdo mirando hacia la izquierda y derecho hacia adelante, con una distancia entre ellos de un pie.',
        //video: '/videos/posiciones/uen-sogui.mp4',
    },
    orunSogui: {
        id: 'cint-ver-8',
        name: 'Orun Sogui',
        image: orunSogui,
        description: 'Posición de pie, con el pie derecho mirando hacia la derecha y el izquierdo hacia adelante, con una distancia entre ellos de un pie.',
        //video: '/videos/posiciones/orun-sogui.mp4',
    },
    pionjiSogui: {
        id: 'cint-ver-9',
        name: 'Pionji Sogui',
        image: pionjiSogui,
        description: 'Posición de pie, pies separados a altura de la cadera con los pies mirando un poco oblicuos.',
        //video: '/videos/posiciones/pionji-sogui.mp4',
    },
    tuitKoaSogui: {
        id: 'cint-ver-10',
        name: 'Tuit Koa Sogui',
        image: tuitKoaSogui,
        description: 'Posición cruzando los pies por detrás. con ambas piernas flexionadas pero la de detrás mas que la de delante, con el peso corporal en la pierna de delante.',
        //video: '/videos/posiciones/tuit-koa-sogui.mp4',
    },
    chebipumMokChigui: {
        id: 'cint-ver-11',
        name: 'Chebipum Mok Chigui',
        image: chebipumMokChigui,
        description: 'Movimiento especial , con un brazo extendido hacia adelante, haciendo un ataque con el canto de la mano y con la otra, haciendo una defensa alta. Ambas manos deben estar abiertas.',
        //video: '/videos/pum/chebipum-mok-chigui.mp4',
    },
    palkupPiochokChigui: {
        id: 'cint-ver-12',
        name: 'Palkup Piochok Chigui',
        image: palkupPiochokChigui,
        description: 'Movimiento especial, extendiendo la mano hacia adelante y utilizandola de diana para golpear con el codo del brazo contrario.',
        //video: '/videos/pum/palkup-piochok-chigui.mp4',
    },
    bituroChagui: {
        id: 'cint-ver-13',
        name: 'Bituro Chagui',
        image: bituroChagui,
        description: 'Patada donde se golpea con el borde externo del pie en un movimiento de media luna.',
        //video: '/videos/patadas/bituro-chagui.mp4',
    },
    neryoChagui: {
        id: 'cint-ver-14',
        name: 'Neryo Chagui',
        image: neryoChagui,
        description: 'Patada descendente, golpeando con el talón.',
        //video: '/videos/patadas/neryo-chagui.mp4',
    },
    momDolioTuitChagui: {
        id: 'cint-ver-15',
        name: 'Mom Dolio Tuit Chagui',
        image: momDolioTuitChagui,
        description: 'Patada circular hacia adelante, golpeando con el talón, dando la espalda.',
        //video: '/videos/patadas/mom-dolio-tuit-chagui.mp4',
    },
    nakoChagui: {
        id: 'cint-ver-16',
        name: 'Nako Chagui',
        image: nakoChagui,
        description: 'Patada gancho, golpeando con la planta del pie, extendiendo la pierna y haciendo un movimiento de gancho.',
        //video: '/videos/patadas/nako-chagui.mp4',
    },

};

export default verdeTechniques;