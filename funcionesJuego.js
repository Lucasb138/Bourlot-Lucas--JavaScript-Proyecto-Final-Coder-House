//Menu
let aplicarFondo = document.getElementById("pantallaJuego");
console.dir(aplicarFondo)
let nombrePersonaje = "";
let botonComenzar = document.getElementById("botonComenzar");
let inicioJuego = document.getElementById("pantallaPrincipal");
function game() {
    botonComenzar.onclick = () => {
        iniciarJuego();
    }
}

function iniciarJuego() {
    inicioJuego.innerHTML =
        `<div id="pantallaSuperior">
            <h3 class= "text-center">Elige el nombre de tu personaje</h3>
        </div>
        <div id="#pantallaCentralMenu">
            <div class= "text-center row" id="menuPrincipal">
                <div class="col-3"></div>
                <div class="col-6">
                    <div>
                        <input id="ingresarNombre" type="text" placeholder: " ">
                    </div>
                    <button id="aceptarNombre">Aceptar</button>
                </div>
                <div class="col-3"></div> 
            </div>
        </div>`;

    let botonAceptarNombre = document.getElementById("aceptarNombre");

    botonAceptarNombre.onclick = () => {
        nombrePersonaje = document.getElementById("ingresarNombre").value;
        if (nombrePersonaje == "" || nombrePersonaje == null || nombrePersonaje == " ") {
            alert("Nombre invalido")
        } else {
            console.log(nombrePersonaje)
            mostrarMenuClase(); // mostrar siguiente menú
        }
    };
}

//Clases

class claseElegible {
    constructor(nombreClase, vida, fuerza, defensa, agilidad, mana) {
        this.nombreClase = nombreClase
        this.vida = vida;
        this.fuerza = fuerza;
        this.defensa = defensa;
        this.agilidad = agilidad;
        this.mana = mana;

    }
}
//  claseElegida(nomClase,  hp,fue,def,agi, mana) 
let personaje = new claseElegible(" ", 1, 1, 1, 1, 1);
let guerrero = new claseElegible("guerrero", 25, 7, 3, 4, 0);
let mago = new claseElegible("mago", 10, 2, 0, 2, 7);
let ladron = new claseElegible("ladrón", 15, 4, 2, 9, 1);

function mostrarMenuClase() {


    inicioJuego.innerHTML =
        `<div id="pantallaCentral">

        <div> <button class = "col-3 justify-content-start" id= "seleccionCambioNombre"><= Cambiar nombre</button></div>
        <div class="row justify-content-center" id="selectorPersonaje">

        <div class="card col-2 personajeSeleccionable" style="width: 18rem;">
                <img class="card-img-top" src="./img/guerrero.png" alt="Card image cap">
            <div class="card-body estiloTarjeta">
                <h5 class="card-title text-center">guerrero</h5>
                <p class="card-text">
                <div>
                salud: 25 <br>
                fuerza: 7 <br>
                Armadura: 3 <br>
                Agilidad: 4 <br>
                mana: 0 <br>
                </div>
                </p>
                <button class="btn btn-primary" id= "seleccionGuerrero">Seleccionar</button>
            </div>
        </div>
        
        <div class="card col-2 personajeSeleccionable" style="width: 18rem;">
            <img class="card-img-top" src="./img/guerrero.png" alt="Card image cap">
        <div class="card-body estiloTarjeta">
            <h5 class="card-title text-center">mago</h5>
            <p class="card-text">
                salud: 10 <br>
                Fuerza: 2<br>
                Armadura: 0<br>
                Agilidad: 2<br>
                Mana: 7</p>
            <button class="btn btn-primary" id=seleccionMago>Seleccionar</button>
        </div>
    </div>

    <div class="card col-2 personajeSeleccionable" style="width: 18rem;">
        <img class="card-img-top" src="./img/guerrero.png" alt="Card image cap">
    <div class="card-body estiloTarjeta">
        <h5 class="card-title text-center">ladron</h5>
        <p class="card-text">
            salud: 15 <br>
            Fuerza: 4 <br>
            Armadura: 2 <br>
            Agilidad: 9 <br>
            Mana: 1</p>
        <button class="btn btn-primary" id= "seleccionLadron">Seleccionar</button>
    </div>
    </div>`


    let selectorClase = 0
    let idClase = 0
    elegirClase()
    //Elección de clase

    function elegirClase() {
        let claseGuerrero = document.getElementById("seleccionGuerrero");
        let claseMago = document.getElementById("seleccionMago");
        let claseLadron = document.getElementById("seleccionLadron");


        claseGuerrero.onclick = () => {
            idClase = 1;
            cambioIdClase()
            return idClase
        }
        claseMago.onclick = () => {
            idClase = 2;
            cambioIdClase()
            return idClase
        }
        claseLadron.onclick = () => {
            idClase = 3;
            cambioIdClase()
            return idClase
        }
        document.getElementById("seleccionCambioNombre").onclick = () => {
            idClase = 4;
            cambioIdClase()
            return idClase
        }
    }


    function cambioIdClase() {
        switch (idClase) {
            case 1:
                personaje = structuredClone(guerrero);
                confirmar();
                return personaje;
            case 2:
                personaje = structuredClone(mago);
                confirmar();
                return personaje;
            case 3:
                personaje = structuredClone(ladron);
                confirmar();
                return personaje;
            case 4:
                iniciarJuego()
                break;
        }
    }
}




//Elección de clase 
//Confirmar clase:

function confirmar() {
    inicioJuego.innerHTML =
        `<div class="card col-2 personajeSeleccionable" style="width: 18rem;">
        <img class="card-img-top" src="./img/guerrero.png" alt="Card image cap">
        <div class="card-body estiloTarjeta">
        <h5 class="card-title text-center">${personaje.nombreClase}</h5>
        <p class="card-text">
            Salud: ${personaje.vida} <br>
            Fuerza: ${personaje.fuerza} <br>
            Armadura:${personaje.defensa} <br>
            Agilidad: ${personaje.agilidad} <br>
            Mana: ${personaje.agilidad}</p>
        <button class="btn btn-primary" id= "cancelar">Cancelar</button>
        <button class="btn btn-primary" id= "aceptar">Jugar</button>
    </div>
    </div>`

    let aceptar = document.getElementById("aceptar");
    aceptar.onclick = () => {
        comenzarAventura();
        DarArmaInicial();

        localStorage.setItem("datosPJCreado", JSON.stringify(personaje));
        const datoPJ = JSON.parse(localStorage.getItem("datosPJCreado"));
        console.log(datoPJ)

    }
    let cancelar = document.getElementById("cancelar");
    cancelar.onclick = () => {
        mostrarMenuClase();
    }
}



function comenzarAventura() {

    aplicarFondo.classList.add("fondoJuego")

    inicioJuego.innerHTML = `
    <div class=" d-flex justify-content-between" id="pantallaSuperior">

    <div class="d-flex align-items-center">
    <div id="estadisticas"></div>
    </div>

    <div class="d-flex align-items-center">
    <div id="mochila"></div>
    </div>
    
    </div>

    <div id="pantallaCentral">

        <div class="row">
            <div class="col-4"></div>

            <div class="col-4 textoPrueba">
                <p>Prueba de que el inventario funciona correctamente (click a la mochila. Siempre vuelve a la pantalla anterior)</p>
            </div>
        </div>
        <div class="col-4"></div>

    </div>

    <div id="pantallaInferior">
        <div class="row">
            <div class="col-4"></div>

            <div class="hud col-4 justify-content-center ">
                <div class="row lineaDatoHud"><p class="col-2">Salud:</p> <div class="col-9"><div class="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="height: 20px">
                    <div class="progress-bar" style="width: 80%">80%</div> </div> </div> </div>

                <div class="row lineaDatoHud"><p class="col-2">Mana:</p> <div class="col-9"><div class="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="height: 20px">
                    <div class="progress-bar" style="width: 80%">80%</div></div>
                </div></div>
                
            </div>

            <div class="col-4"></div>
        </div>

    </div>

    `

    let mostrandoInventario = false;
    let pantallaAnterior = null;
    const mochilaJugador = document.getElementById("mochila");
    const pantallaCentral = document.getElementById("pantallaCentral");


    mochilaJugador.onclick = () => {
        if (!mostrandoInventario) {
            pantallaAnterior = pantallaCentral.innerHTML
            mostrarInventario()
            mostrandoInventario = true
        } else {
            ocultarInventario();
            mostrandoInventario = false
            pantallaCentral.innerHTML= pantallaAnterior
        }
    }
}

game()





//Inventario
class consumibleInventario {
    constructor(id, nombre, efectoSalud, valorTienda, descripcion, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.efectoSalud = efectoSalud;
        this.valorTienda = valorTienda;
        this.descripcion = descripcion;
        this.imagen = imagen
    }
}

class armaInventario {
    constructor(id, nombre, daño, habilidadUsada, valorTienda, descripcion, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.daño = daño;
        this.habilidadUsada = habilidadUsada;
        this.valorTienda = valorTienda
        this.descripcion = descripcion;
        this.imagen = imagen
    }
}




//Items:
let pocionSalud = new consumibleInventario(101, "pocion", 8, 30, "Poción básica de salud, Restaura 8 puntos de vida", `<img src="./img/objeto.png">`)
let pocionSaludSuprema = new consumibleInventario(102, "Poción de salud suprema", personaje.vida, 200, "Una poción de vida suprema, regenera la vida por completo, muy valiosas y raras", `<img src="./img/objeto.png">`)
let manzana = new consumibleInventario(103, "manzana", 1, 3, "Una manzana, restaura 1 punto de vida,", `<img src="./img/objeto.png">`)

//INVENTARIO JUEGO - IMPORTANTE : 
const inventario = [pocionSaludSuprema];

function remover(objeto) {
    let objetoRemovido = inventario.indexOf(objeto);
    if (objetoRemovido != -1) {
        inventario.splice(objetoRemovido, 1)
        return inventario;
    }
}
//Funciones inventario objetos
function beberPocionSaludSuprema() {
    let pocionSupremaEnInventario = inventario.find((objeto) => objeto.id == 102)
    if (pocionSupremaEnInventario = true) {
        console.log("Tienes la poción");
        objeto = pocionSaludSuprema;
        remover(objeto)
        for (let i = vidaActual; i < (personaje.vida + 1); i++) {
            console.log("La poción regenera lentamente tu salud y cierra tus heridas. Salud: " + i + "/" + personaje.vida)
            vidaActual = i
        }
        return vidaActual;
    } else {
        alert("No tienes pociones de vida")
    }
}



//Armas
let espadaBasica = new armaInventario(001, "Espada", 5, personaje.fuerza, 15, `Espada básica, que todo aventurero novato carga. Daño= 5 + ${personaje.fuerza}`, `<img src="./img/objeto.png">`)
let daga = new armaInventario(002, "daga", 2, personaje.agilidad, 10, `Una daga, especial para encuentros cercanos. Daño = 2 + ${personaje.agilidad}`, `<img src="./img/objeto.png">`)
let varitaMagica = new armaInventario(003, "varita mágica", 10, personaje.mana, 60, "Una varita mágica de mago aprendiz, dispara chispas ardientes. Daño= 10. Consume 1 de maná por uso", `<img src="./img/objeto.png">`)

//armas iniciales:
function DarArmaInicial() {
    if (personaje.nombreClase == "guerrero") {
        inventario.push(espadaBasica);
    } else if (personaje.nombreClase == "mago") {
        inventario.push(varitaMagica);
    } else if (personaje.nombreClase == "ladrón") {
        inventario.push(daga);
    }
}

//VIDA:

var vidaActual = (Math.ceil(personaje.vida / 2))
function mostrarStats() {
    alert(nombrePersonaje + ", " + personaje.nombreClase + "\n salud: " + vidaActual + "/" + personaje.vida + "\n Fuerza: " + personaje.fuerza + "\n Armadura: " + personaje.defensa + "\n Agilidad:" + personaje.agilidad + "\n mana:" + personaje.mana);
}

// Muerte
function muerte() {
    alert("Has muerto " + vidaActual + "/" + personaje.vida);
}

// Mostrar inventario
function mostrarInventario() {

    let imagenDefecto = `<img src="./img/objeto.png"></img>`
    let inventarioMostrado = inventario.map((objeto) => {
        return {
            imagenObjeto: objeto.imagen,
            nombreObjeto: objeto.nombre,
            descripcionObjeto: objeto.descripcion,
        };
    });

    while (inventarioMostrado.length < 8) {
        inventarioMostrado.push({
            imagenObjeto: imagenDefecto,
            nombreObjeto: "",
            descripcionObjeto: "",
        });
    }

    console.table(inventarioMostrado)


    mostrandoInventario = true

    
    pantallaCentral.innerHTML = `
    <div class= row col-12 id= menuInventario>
    <div class= col-3 cuadricula>${inventarioMostrado[0].imagenObjeto}</div>
    <div class= col-3 cuadricula>${inventarioMostrado[1].imagenObjeto}</div>
    <div class= col-3 cuadricula>${inventarioMostrado[2].imagenObjeto}</div>
    <div class= col-3 cuadricula>${inventarioMostrado[3].imagenObjeto}</div>
    <div class= col-3 cuadricula>${inventarioMostrado[4].imagenObjeto}</div>
    <div class= col-3 cuadricula>${inventarioMostrado[5].imagenObjeto}</div>
    <div class= col-3 cuadricula>${inventarioMostrado[6].imagenObjeto}</div>
    <div class= col-3 cuadricula>${inventarioMostrado[7].imagenObjeto}</div>
    </div>
    `
}

function ocultarInventario () {
    pantallaCentral.innerHTML = null
}


//Codigo para DOM
let inventarioMostrado = inventario.map((objeto) => {
    return {
        nombreObjeto: objeto.nombre,
        descripcionObjeto: objeto.descripcion,
    }
})
console.table(inventarioMostrado)


//Comienzo de juego : 
//declaración evento 1 -- En deshuso:
function Evento1() {

    let accion = prompt("Te despiertas en un bosque, con algunas heridas de batalla y sin recordar nada, sientes un extraño calor en tu abdomen... Es una herida y está sangrando. en tu mochila hay una poción de regeneración que puede ayudarte \n1-beber poción de salud \n2-No es nada, seguro sana solo \n3-Ver estadisticas \n4-Abrir inventario")


    if (accion == "1") {
        beberPocionSaludSuprema();
        return vidaActual
    } else if (accion == "2") {
        vidaActual = 0;
        return vidaActual;
    } else if (accion == "3") {
        mostrarStats()
    } else if (accion == "4") {
        mostrarInventario();
    } else
        alert("Error, intenta de nuevo")
}
        //Evento1();
