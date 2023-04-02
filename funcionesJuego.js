//Creación de PJ


let nombrePersonaje = "Jugador1";
function crearPersonaje(){nombrePersonaje = prompt ("Ingresa el nombre de tu personaje");
console.log("Bienvenido, " + nombrePersonaje);
if (nombrePersonaje == ""){
    alert("Coloca un nombre válido");
    crearPersonaje()
}}

crearPersonaje()

class claseElegible {
    constructor(nombreClase, vida, fuerza, defensa, agilidad, mana){
    this.nombreClase=nombreClase
    this.vida=vida;
    this.fuerza=fuerza;
    this.defensa=defensa;
    this.agilidad=agilidad;   
    this.mana = mana
    
    }
}
                    //  claseElegida(nomClase,  hp,fue,def,agi, mana) 
let personaje =    new claseElegible(" ", 1, 1,  1,  1,  1);
let guerrero =    new claseElegible("guerrero", 25, 7,  3,  4,  0);
let mago =        new claseElegible("mago",     10, 2,  0,  2,  7);
let ladron =      new claseElegible("ladrón",   15, 4,  2,  9,  1);




//Elección de clase
//Confirmar clase:
let opcion = "0"
function confirmar(){
    opcion = prompt (nombrePersonaje+", " +confirmacion.nombreClase+ "\n salud : "+ confirmacion.vida+"\n Fuerza : "+ confirmacion.fuerza+"\n Armadura: "+confirmacion.defensa+"\n Agilidad:"+ confirmacion.agilidad+"\n mana:"+confirmacion.mana +"\n¿Comenzar juego? \n 1-Sí \n 2-No");
    switch (opcion){
        case "1":
            alert ("Comenzando juego");
            return selectorClase = idClase;
        case "2":
            selectorClase = 0
            elegirClase();
            break;
        default:
            alert("Valor incorrecto");
            confirmar();
            break;
        }
    } 

    let selectorClase = 0
    //Elección de clase
function elegirClase(){
    idClase= parseInt(prompt("Elige tu clase\n1-Guerrero\n2-mago\n3-ladrón\n4-Cambiar nombre"));
    switch (idClase){
        case 1:
            confirmacion = guerrero;
            selectorClase = idClase;
            confirmar();
            return selectorClase;
        case 2:
            confirmacion = mago;
            selectorClase = idClase;
            confirmar();
            return selectorClase;
        case 3:
            confirmacion = ladron;
            selectorClase = idClase;
            confirmar();
            return selectorClase;
        case 4:
        crearPersonaje();
        elegirClase();
        break;
        default:
            alert ("Valor incorrecto");
            elegirClase();
            break;
    
        
        }}

elegirClase()
    
function ClonarClaseAPersonaje(){ 
if (selectorClase == 1){
    console.log ("ID clonación = "+ selectorClase);
    personaje = structuredClone(guerrero);
    return personaje;
} if (selectorClase == 2){
    console.log ("ID clonación = "+ selectorClase);
    personaje = structuredClone(mago);
    return personaje;
} if (selectorClase == 3){
    console.log ("ID clonación = "+ selectorClase);
    personaje = structuredClone(ladron);
    return personaje;
}
}
ClonarClaseAPersonaje()
console.log (personaje)


//Inventario
class consumibleInventario {
    constructor(id, nombre, efectoSalud, valorTienda, descripcion){
        this.id = id;
        this.nombre = nombre;
        this.efectoSalud = efectoSalud;
        this.valorTienda = valorTienda;
        this.descripcion = descripcion;
    }
}

class armaInventario {
    constructor (id, nombre, daño, habilidadUsada, valorTienda, descripcion){
    this.id = id;
    this.nombre = nombre;
    this.daño = daño;
    this.habilidadUsada = habilidadUsada;
    this.valorTienda = valorTienda
    this.descripcion = descripcion;
    }
}




    //Items:
let pocionSalud = new consumibleInventario (101, "pocion", 8, 30, "Poción básica de salud, Restaura 8 puntos de vida")
let pocionSaludSuprema = new consumibleInventario (102,"Poción de salud suprema", personaje.vida, 200, "Una poción de vida suprema, regenera la vida por completo, muy valiosas y raras")
let manzana = new consumibleInventario(103, "manzana", 1, 3, "Una manzana, restaura 1 punto de vida")

//INVENTARIO JUEGO - IMPORTANTE : 
const inventario = [pocionSaludSuprema];

function remover(objeto){
    let objetoRemovido = inventario.indexOf(objeto);
    if (objetoRemovido != -1) {
        inventario.splice(objetoRemovido, 1)
        return inventario;
    }
}
//Funciones inventario objetos
function beberPocionSaludSuprema() {
    let pocionSupremaEnInventario = inventario.find((objeto) => objeto.id == 102)
    if (pocionSupremaEnInventario = true){
        console.log ("Tienes la poción");
        objeto = pocionSaludSuprema;
        remover(objeto)
        for (let i=vidaActual; i<(personaje.vida+1); i++){
        console.log ("La poción regenera lentamente tu salud y cierra tus heridas. Salud: "+ i+"/"+personaje.vida)
        vidaActual = i}
        return vidaActual;
}else {
    alert("No tienes pociones de vida")
}
}



//Armas
let espadaBasica = new armaInventario (001,"Espada", 5, personaje.fuerza, 15, `Espada básica, que todo aventurero novato carga. Daño= 5 + ${personaje.fuerza}`)
let daga = new armaInventario (002, "daga", 2 , personaje.agilidad, 10, `Una daga, especial para encuentros cercanos. Daño = 2 + ${personaje.agilidad}`)
let varitaMagica = new armaInventario (003, `varita mágica", 15, personaje.mana, 60, "Una varita mágica de mago aprendiz, dispara chispas ardientes. Daño= 15+` )

//armas iniciales:
if (personaje.nombreClase == "guerrero"){
    inventario.push(espadaBasica);
}else if (personaje.nombreClase == "mago"){
    inventario.push(varitaMagica);
}else if (personaje.nombreClase == "ladrón"){
    inventario.push(daga);
}


//VIDA:

var vidaActual = (Math.ceil(personaje.vida / 2))
function mostrarStats(){ 
    alert (nombrePersonaje+", " + personaje.nombreClase+ "\n salud: "+ vidaActual + "/"+personaje.vida+"\n Fuerza: "+ personaje.fuerza+"\n Armadura: "+personaje.defensa+"\n Agilidad:"+ personaje.agilidad+"\n mana:"+personaje.mana);
}

    // Muerte
    function muerte(){
        alert("Has muerto " + vidaActual+"/"+personaje.vida);
        }

    function mostrarInventario(){
        inventario.forEach((objeto) => alert("En tu mochila encuentras:" + objeto.nombre));
        //Codigo para DOM
        const inventarioMostrado = inventario.map((objeto) => {
            return{
                nombreObjeto: objeto.nombre,
                descripcionObjeto: objeto.descripcion,
            }
            })
        console.table(inventarioMostrado)
        }
        

        //Comienzo de juego : 
//declaración evento 1:
function Evento1(){

    let accion = prompt ("Te despiertas en un bosque, con algunas heridas de batalla y sin recordar nada, sientes un extraño calor en tu abdomen... Es una herida y está sangrando. en tu mochila hay una poción de regeneración que puede ayudarte \n1-beber poción de salud \n2-No es nada, seguro sana solo \n3-Ver estadisticas \n4-Abrir inventario")
    
    
    if (accion == "1") {
    beberPocionSaludSuprema();
    return vidaActual
    } else if (accion == "2"){
    vidaActual = 0;
    return vidaActual;
    } else if (accion == "3") {
    mostrarStats()
    } else if (accion == "4") {
    mostrarInventario();
    }else
        alert ("Error, intenta de nuevo");
        Evento1();
    }
    