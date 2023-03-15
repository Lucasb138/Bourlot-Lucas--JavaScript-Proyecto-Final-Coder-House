let nombrePersonaje = "Jugador1";

function crearPersonaje(){nombrePersonaje = prompt ("Ingresa el nombre de tu personaje");
console.log("Bienvenido, " + nombrePersonaje);
return nombrePersonaje;}

let clasePersonaje = "humano";
var vida = 1;
let ataque = 1;
let defensa = 1;

function elegirClase(){
clasePersonaje = parseInt(prompt("Elige tu clase\n1-Guerrero\n2-mago\n3-Cambiar nombre\n\nLos guerreros están equipados con armadura (defensa+3), los magos hacen el doble de daño (Pero tienen la mitad de salud y no tienen armadura alguna"));


if (clasePersonaje ==1) {
    vida = 10;
    ataque = 5;
    defensa = 3;
    clasePersonaje = "Guerrero"
    console.log ("Tu vida es " + vida + ", tu ataque es " + ataque + ", tu defensa es " + defensa );
} else if (clasePersonaje == 2){
    vida = 5;
    ataque = 10;
    defensa = 0;
    clasePersonaje = "mago"
    console.log ("Tu vida es " + vida + ", tu ataque es " + ataque + ", tu defensa es " + defensa );
} else if (clasePersonaje == 3){
    crearPersonaje()
    elegirClase()
}else {
    alert ("Valor incorrecto");
    elegirClase()
}
return clasePersonaje;
};


crearPersonaje()
elegirClase();


alert (nombrePersonaje+", " +clasePersonaje+ ", salud: "+ vida+" Daño: "+ ataque)

alert ("Comenzando juego")

let vidaActual = vida-3
console.log ("Tu salud actual es: " + vidaActual)

function Evento1(){

let accion = prompt ("Te despiertas en un bosque, con algunas heridas de batalla y sin recordar nada, sientes un extraño calor en tu abdomen... Es una herida y está sangrando. en tu mochila hay una poción que puede ayudarte \n1-beber poción de salud \n2-No es nada, seguro sana solo")


if (accion == "1") {
    for (let i=vidaActual; i<=vida; i++){
    alert ("La poción regenera lentamente tu salud y cierra tus heridas. Salud: "+ i+"/"+vida)}
} else if (accion == "2"){
vidaActual = 0
alert ("Te has desangrado y has muerto. Salud: "+ vidaActual+"/"+vida);
}
else{
    alert ("Error, intenta de nuevo");
    Evento1();
}
}

Evento1();

alert ("Fin del juego");