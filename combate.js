// ¡¡¡ Código en construcción para trabajar en DOM !!!
//enemigos:

class Enemigo {
    constructor(nombreEnemigo, saludEnemigo, ataqueEnemigo, defensaEnemigo) {
        this.nombreEnemigo = nombreEnemigo;
        this.saludEnemigo = saludEnemigo;
        this.ataqueEnemigo = ataqueEnemigo;
        this.defensaEnemigo = defensaEnemigo;
    }
}


const lobo = new Enemigo ("Lobo", 3, 4, 0);
const zombie = new Enemigo ("Zombie", 5, 1, 1);
const bandido = new Enemigo (" bandido", 5, 3, 3);
//const enemigoVacio = new Enemigo ("", 0, 0 , 0)


let enemigo1 = null;
let enemigo2 = null;
let enemigo3 = null;
let enemigo4 = null;


function Combate() {
    let ordenCombate = [jugador]
    for(let enemigos of listaEnemigos){
    ordenCombate.push (enemigos)
    }
    console.log (ordenCombate);
    let rondaCombateMax = ordenCombate.lenght;
    
    let inicioRonda = 1
    if (inicioRonda == 1) {
        PantallaCentral.innerHTML = `
        <button>atacar</button>
        `
    }
    
}



function encuentro1 () {
    jugador= personaje;
    listaEnemigos= [lobo, lobo]

    Combate() 
}

