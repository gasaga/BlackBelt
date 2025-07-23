// src/data/techniques/tecnicas-amarillo.js
// Técnicas para el cinturón amarillo
// - >  amarillo
// --------defensas---------
import { montongAnMaki } from "../../assets/images";

//v--------ataques---------
import { montongBandeJirugui } from "../../assets/images";
import { montongBaroJirugui } from "../../assets/images";
// -------posiciones---------
import { chariotSogui } from "../../assets/images";
import { apKubiSogui } from "../../assets/images";
import { kibonChumbi } from "../../assets/images";
//-------- pum --------------
//---------- patadas -----------
import { dolioChagui } from "../../assets/images";
import { yopChagui } from "../../assets/images";

const amarilloTechniques = {
    montongAnMaki: {
        id: 'cint-amar-1',
        name: 'Montong An Maki',
        image: montongAnMaki,
        description: 'Parada media,con el pie contrario, con un movimiento del antebrazo del exterior al interior, desde el hombro contrario hasta la altura del plexo solar, a un puño de distancia de este.',
        //video: '/videos/defensas/montong-an-maki.mp4',
    },
    montongBandeJirugui: {
        id: 'cint-amar-2',
        name: 'Montong Bande Jirugui',
        image: montongBandeJirugui,
        description: 'Golpe de puño recto al plexo solar, con el puño en posición vertical, desde la altura del hombro, con el mismo pie.',
        //video: '/videos/ataques/montong-bande-jirugui.mp4',
    },
    montongBaroJirugui: {
        id: 'cint-amar-3',
        name: 'Montong Baro Jirugui',
        image: montongBaroJirugui,
        description: 'Golpe de puño recto al plexo solar, con el puño en posición vertical, desde la altura del hombro, con el pie contrario.',
        //video: '/videos/ataques/montong-baro-jirugui.mp4',
    },
    chariotSogui: {
        id: 'cint-amar-4',
        name: 'Chariot Sogui',
        image: chariotSogui,
        description: 'Posición de pie, paso corto, con los pies juntos.',
        //video: '/videos/posiciones/chariot-sogui.mp4',
    },
    apKubiSogui: {
        id: 'cint-amar-5',
        name: 'Ap Kubi Sogui',
        image: apKubiSogui,
        description: 'Posición de pie, paso largo, con los pies separados a la altura de los hombros.',
        //video: '/videos/posiciones/ap-kubi-sogui.mp4',
    },
    kibonChumbi: {
        id: 'cint-amar-6',
        name: 'Kibon Chumbi',
        image: kibonChumbi,
        description: 'Posición de inicio, con los pies juntos y las manos en posición de guardia.',
        //video: '/videos/pum/kibon-chumbi.mp4',
    },
    dolioChagui: {
        id: 'cint-amar-7',
        name: 'Dolio Chagui',
        image: dolioChagui,
        description: 'Patada circular, golpe con el empeine del pie, a la altura de la cabeza.',
        //video: '/videos/patadas/dolio-chagui.mp4',
    },
    yopChagui: {
        id: 'cint-amar-8',
        name: 'Yop Chagui',
        image: yopChagui,
        description: 'Patada lateral, golpe con el canto del pie, desde la altura de la cadera.',
        //video: '/videos/patadas/yop-chagui.mp4',
    },
}

export default amarilloTechniques;