/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ["Bash", "Counter", "Healing"];

interface Personaje {
    nombre: string;
    hp: number; 
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: "Javier",
    hp: 100,
    habilidades: ['Bash', 'Couter', 'Healing']
}
personaje.puebloNatal = 'Chosica';

console.table(personaje);