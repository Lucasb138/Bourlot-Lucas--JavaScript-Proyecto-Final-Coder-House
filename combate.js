// ¡¡¡ Código en construcción para trabajar en DOM !!!
//enemigos:

class Enemigo {
    constructor(nombreEnemigo, saludEnemigo, ataqueEnemigo, defensaEnemigo, agilidadEnemigo) {
        this.nombreEnemigo = nombreEnemigo;
        this.saludEnemigo = saludEnemigo;
        this.ataqueEnemigo = ataqueEnemigo;
        this.defensaEnemigo = defensaEnemigo;
        this.agilidadEnemigo = agilidadEnemigo;
    }
}


const lobo = new Enemigo ("Lobo", 3, 4, 0, 5);
const zombie = new Enemigo ("Zombie", 5, 1, 1, 1);
const bandido = new Enemigo (" bandido", 5, 3, 3, 3);

let enemigo1 = null;
let enemigo2 = null;
let enemigo3 = null;
let enemigo4 = null;


function Combate() {
    let combatienes = [jugador, enemigo1, enemigo2, enemigo3, enemigo4]
    let ordenCombate = [];
    jugador=personaje.agilidad;
    enemigo1=enemigo1.agilidad;
    enemigo2=enemigo2.agilidad;
    enemigo3=enemigo3.agilidad;
    enemigo4=enemigo4.agilidad;

    console.log (combatienes)
    }

function encuentro1 () {
    enemigo1= lobo;
    enemigo2= lobo;
    Combate()
}

