//Creación de PJ

let nombrePersonaje = "Jugador1";

function crearPersonaje(){nombrePersonaje = prompt ("Ingresa el nombre de tu personaje");
console.log("Bienvenido, " + nombrePersonaje);
return nombrePersonaje;}

let personaje={
nombreClase: " ",
vidaPersonaje: 1,
ataquePersonaje: 1,
defensaPersonaje: 0,
agilidadPersonaje: 1,
percepcionPersonaje: 1,
}

class claseElegible {
    constructor(nombreClase, vida, ataque, defensa, agilidad, percepcion){
    this.nombreClase=nombreClase
    this.vida=vida;
    this.ataque=ataque;
    this.defensa=defensa;
    this.agilidad=agilidad;   
    this.percepcion=percepcion;
    
    }
}
                    //  claseElegida(nomClase,  hp,at,def,agil,perc) 
let guerrero =    new claseElegible("guerrero", 25, 7,  3,  2,  4)
let mago =        new claseElegible("mago",     10, 15, 0,  3,  2)
let ladron =      new claseElegible("ladrón",   15, 5,  2,  6,  8)


function elegirClase(){
idClase= parseInt(prompt("Elige tu clase\n1-Guerrero\n2-mago\n3-ladron\n4-Cambiar nombre"));

let opcion = "0"
function confirmar(){
    opcion = prompt (nombrePersonaje+", " +personaje.nombreClase+ "\n salud : "+ personaje.vida+"\n Daño : "+ personaje.ataque+"\n Armadura: "+personaje.defensa+"\n Agilidad:"+ personaje.agilidad+"\n Percepcion:"+personaje.percepcion +"\n¿Comenzar juego? \n 1-Sí \n 2-No");
    switch (opcion){
        case "1":
        alert ("Comenzando juego");
        break;
        case "2":
        elegirClase();
        break;
        default:
        alert("Valor incorrecto");
        confirmar();
        break;
    }
} 
switch (idClase){
    case 1:
        personaje = guerrero;
        console.log ("Tu vida es " + personaje.vida + ", tu ataque es " + personaje.ataque + ", tu defensa es " + personaje.defensa);
        confirmar();
        break
    case 2:
        personaje = mago;
        console.log ("Tu vida es " + personaje.vida + ", tu ataque es " + personaje.ataque + ", tu defensa es " + personaje.defensa);
        confirmar();
        break
    case 3:
        personaje = ladron;
        console.log ("Tu vida es " + personaje.vida + ", tu ataque es " + personaje.ataque + ", tu defensa es " + personaje.defensa);
        confirmar();
        break
    case 4:
    crearPersonaje();
    elegirClase();
    break;
    default:
        alert ("Valor incorrecto");
        elegirClase();
        break;

    
    }
}



crearPersonaje();

elegirClase();


function muerte(){
    alert ("Has muerto " + vidaActual+"/"+personaje.vida)
}

var vidaActual = 5
let danioRecibido = 5
function revisarVida(){
if (vidaActual > personaje.vida){
    vidaActual = personaje.vida
}
if (vidaActual <= 0){
muerte()
}}
vidaActual = (personaje.vida-danioRecibido);
console.log ("Tu salud actual es: " + vidaActual)


function mostrarStats(){ 
    alert (nombrePersonaje+", " +personaje.clasePersonaje+ "\n salud: "+ vidaActual + "/"+personaje.vida+"\n Daño: "+ personaje.ataque+"\n Armadura: "+personaje.defensa+"\n Agilidad:"+ personaje.agilidad+"\n Percepcion:"+personaje.percepcion);
}


function Evento1(){

let accion = prompt ("Te despiertas en un bosque, con algunas heridas de batalla y sin recordar nada, sientes un extraño calor en tu abdomen... Es una herida y está sangrando. en tu mochila hay una poción que puede ayudarte \n1-beber poción de salud \n2-No es nada, seguro sana solo \n3-Ver estadisticas")


if (accion == "1") {
    for (let i=vidaActual; i<=personaje.vida; i++){
    alert ("La poción regenera lentamente tu salud y cierra tus heridas. Salud: "+ i+"/"+personaje.vida)}
    return accion
} else if (accion == "2"){
vidaActual = 0;
return vidaActual
} else if (accion ==3) {
mostrarStats()
Evento1()
}
else
    alert ("Error, intenta de nuevo");
    Evento1();
}

Evento1();
revisarVida();
alert ("Fin del juego");



//enemigos:

function Enemigo(nombreEnemigo, saludEnemigo, ataqueEnemigo, defensaEnemigo, agilidadEnemigo){
    this.nombreEnemigo = nombreEnemigo;
    this.saludEnemigo = saludEnemigo;
    this.ataqueEnemigo = ataqueEnemigo;
    this.defensaEnemigo = defensaEnemigo;
    this.agilidadEnemigo = agilidadEnemigo
}


const lobo = new Enemigo ("Lobo", 3, 4, 0, 5);
const zombie = new Enemigo ("Zombie", 5, 1, 1, 1);
const bandido = new Enemigo (" bandido", 5, 3, 3, 3);




/* function evento2(){
    let accion = prompt ("Se acerca un lobo ¿Qué harás? \n1-Atacar \n2-huir");
    switch (accion) {
        case 1:
            //function combate(); 
        case 2:
            if (agilidadPersonaje>agilidadEnemigo){
                prompt ("Consigues esconderte del lobo")
            }
    }
    }

 */
