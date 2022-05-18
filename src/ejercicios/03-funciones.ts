/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
  return a + b;
}

const sumarFecha = (a: number, b: number): number => {
  return a + b;
};

function multiplicar(
  numero: number,
  otroNumero?: number,
  base: number = 2
): number {
  return numero * base;
}

//const resultado = sumar(10, 20);
//const resultado = multiplicar(5, 10);
//console.log(resultado);

interface PersonajeLOR {
  nombre: string;
  puntosVida: number;
  mostrarPuntosVida: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void {
  personaje.puntosVida += curarX;
}

const nuevoPersonaje: PersonajeLOR = {
  nombre: "Reivaj",
  puntosVida: 50,
  mostrarPuntosVida() {
    console.log("Puntos de vida:", this.puntosVida);
  },
};

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarPuntosVida();
