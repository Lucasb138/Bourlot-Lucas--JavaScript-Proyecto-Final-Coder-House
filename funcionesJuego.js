//Menu
let aplicarFondo = document.getElementById("pantallaJuego");
let nombrePersonaje = "";
let botonComenzar = document.getElementById("botonComenzar");
let inicioJuego = document.getElementById("pantallaPrincipal");
let juegoTerminado = false

obtenerJSON()

function game() {
    botonComenzar.onclick = () => {
        iniciarJuego();
    }
}

async function obtenerJSON(){
    let URLJSON = '/consejos.json';
    const respuesta = await fetch(URLJSON);
    const data = await respuesta.json();
    consejos = data;
    mostrarConsejo();
    
}
function mostrarConsejo () {
    elegirConsejo = Math.floor(Math.random()*(consejos.length))
let consejoMostrado = consejos[elegirConsejo].texto
    let displayConsejo = document.getElementById("displayConsejo")
    displayConsejo.innerHTML = `Consejo: ${consejoMostrado} `
}


function iniciarJuego() {
    inicioJuego.innerHTML =
        `<div id="pantallaSuperior">
            <button id="volverAlMenu">Volver al menú principal</button>
            <h4 class="text-center">Elige el nombre de tu personaje</h4>
        </div>
        <div id="pantallaCentralMenu">
            <div class="text-center row" id="menuPrincipal">
                <div class="col-3"></div>
                <div class="col-6">
                    <div>
                        <form id="formulario">
                            <input id="ingresarNombre" type="text">
                            <input type="submit" value="Aceptar">
                        </form>
                    </div>
                </div>
                <div class="col-3"></div> 
            </div>
        </div>`;

    let botonVolverMenu = document.getElementById("volverAlMenu");
    botonVolverMenu.onclick = () => window.location.reload();

    //Validación del formulario:
    let nombreingresado = document.getElementById("ingresarNombre");
    let formulario = document.getElementById("formulario");

    const caracteresValidosNombre = pattern= /[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+/
    
    function mensajeError (mensaje){
        Toastify({
            text: mensaje,
            className: "info",
            style: {
                background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
            }
        }).showToast();
    }

    formulario.addEventListener("submit", (e) =>  {
        e.preventDefault();
        let correcto = true;

        let validarCaracteres = caracteresValidosNombre.test(nombreingresado.value)
        if (!validarCaracteres){
            mensaje = "Nombre inválido"
            mensajeError (mensaje)
            correcto = false

        }else if (nombreingresado.value === "" || nombreingresado.value === null ) {
            mensaje = "Nombre inválido"
            mensajeError (mensaje)
            correcto = false;

        }else if (nombreingresado.value.length < 2) {
            mensaje = "Nombre demasiado corto",
            mensajeError (mensaje)    
            correcto = false;

        }else if (nombreingresado.value.length > 15) {
            mensaje= "Nombre demasiado largo",
            mensajeError (mensaje)
            correcto = false;
        }

        if (correcto) {
            nombrePersonaje = nombreingresado.value;
            mostrarMenuClase();
            return nombrePersonaje
        }
    });
}
//Clases

class claseElegible {
    constructor(nombreClase, vida, fuerza, defensa, agilidad) {
        this.nombreClase = nombreClase
        this.vida = vida;
        this.fuerza = fuerza;
        this.defensa = defensa;
        this.agilidad = agilidad;

    }
}
//  claseElegida(nomClase,  hp,fue,def,agi) 
let personaje = new claseElegible(" ", 1, 1, 1, 1);
let guerrero = new claseElegible("guerrero", 25, 7, 3, 4);
let ladron = new claseElegible("ladrón", 15, 4, 2, 9);

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
                </div>
                </p>
                <button class="btn btn-primary" id= "seleccionGuerrero">Seleccionar</button>
            </div>
        </div>

    <div class="card col-2 personajeSeleccionable" style="width: 18rem;">
        <img class="card-img-top" src="./img/ladrón.png" alt="Card image cap">
    <div class="card-body estiloTarjeta">
        <h5 class="card-title text-center">ladrón</h5>
        <p class="card-text">
        <div>
        salud: 15 <br>
        fuerza: 4 <br>
        Armadura: 2 <br>
        Agilidad: 9 <br>
        </div>
        </p>
        <button class="btn btn-primary" id= "seleccionLadron">Seleccionar</button>
    </div>
    </div>`


    let idClase = 0
    elegirClase()
    //Elección de clase

    function elegirClase() {
        let claseGuerrero = document.getElementById("seleccionGuerrero");
        let claseLadron = document.getElementById("seleccionLadron");


        claseGuerrero.onclick = () => {
            idClase = 1;
            cambioIdClase()
            return idClase
        }

        claseLadron.onclick = () => {
            idClase = 2;
            cambioIdClase()
            return idClase
        }
        document.getElementById("seleccionCambioNombre").onclick = () => {
            idClase = 3;
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
                personaje = structuredClone(ladron);
                confirmar();
                return personaje;
            case 3:
                iniciarJuego()
                break;
        }
    }
}




//Elección de clase 
//Confirmar clase:

function confirmar() {
    inicioJuego.innerHTML =
        `<div class="card col-2 personajeSeleccionable" style="width: 18rem;  margin-top: 1rem;">
        <img class="card-img-top" src="./img/${personaje.nombreClase}.png" alt="Card image cap">
        <div class="card-body estiloTarjeta">
        <h5 class="card-title text-center">${personaje.nombreClase}</h5>
        <p class="card-text">
            Salud: ${personaje.vida} <br>
            Fuerza: ${personaje.fuerza} <br>
            Armadura:${personaje.defensa} <br>
            Agilidad: ${personaje.agilidad} <br>
        <button class="btn btn-primary" id= "cancelar">Cancelar</button>
        <button class="btn btn-primary" id= "aceptar">Jugar</button>
    </div>
    </div>`

    let aceptar = document.getElementById("aceptar");
    aceptar.onclick = () => {
        preludio();
        localStorage.setItem("datosPJCreado", JSON.stringify(personaje));
        const datoPJ = JSON.parse(localStorage.getItem("datosPJCreado"));
    }
    let cancelar = document.getElementById("cancelar");
    cancelar.onclick = () => {
        mostrarMenuClase();
    }
}

function preludio() {
    inicioJuego.innerHTML =
        `<h3 class= "preludio">Las sombras hacen eco en tu ser</h3>
        <p class= "preludio">Deberías estar muerto, pero no lo estás, una extraña fuerza te lleva a completar tu tarea, tus heridas han sanado y te encuentras nuevamente capaz para enfrentar a tus enemigos, el problema... Es que no recuerdas a qué te enfrentaste y apenas recuerdas quién solías ser. Lo mejor será aceptar esta bendición y seguir adelante</p>
        <div class="d-flex justify-content-center">
        <button id="comenzarAventura">Cumpliré mi destino</button>
        </div>`

    document.getElementById("comenzarAventura").onclick = () => {
        comenzarAventura();
        DarArmaInicial();
    }
}



function comenzarAventura() {
    vidaActual = personaje.vida
    aplicarFondo.classList.add("fondoJuego")
    iniciarRevisarVida();

    //Intervalo que detecta los cambios en la vida del personaje:
    function iniciarRevisarVida() {
        const intervaloVida = setInterval(() => {
            if (juegoTerminado == true) {
                clearInterval(intervaloVida)
            }

            if (juegoTerminado == false) {
                if (vidaActual >= 1) {
                    revisarVida()
                } else {
                    clearInterval(intervaloVida)
                    muerte()
                }
            }
        }, 200)
        inicioJuego.innerHTML = `
    <div class=" d-flex justify-content-between" id="pantallaSuperior">

    <div class="d-flex align-items-center">
    <div id="estadisticas"><img src="./img/${personaje.nombreClase}Logo.png"></div>
    </div>

    <div class="d-flex align-items-center">
    <div id="mochila"></div>
    </div>
    
    </div>

    <div id="pantallaCentral">
    </div>

    <div id="pantallaInferior">
        <div class="row">
            <div class="col-4"></div>   

                    
                    <div class="hud col-4 justify-content-center ">
                    <h5>Salud</h5>
                    <div class="row lineaDatoHud"><div class="col-12"><div class="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="height: 20px">
                        <div class="progress-bar" id="barraVida">${vidaActual}/${personaje.vida}</div> </div> </div> </div>
    
                
            </div>
            
            <div class= "d-flex cuadriculaArmaEquipada" id = "armaEquipada"></div>
            <div class="col-2" id="ubicacionBotonExplorar">
            <div class="col-2" id= "DañoJugador"></div>
            

            
        </div>

    </div>

    `


        let explorarBosque = document.createElement("button")
        explorarBosque.innerText = "Explorar el bosque"
        explorarBosque.append()

        let mostrarBoton = document.getElementById("ubicacionBotonExplorar")
        mostrarBoton.appendChild(explorarBosque)

        explorarBosque.onclick = () => {
            encuentro1()
            mostrarBoton.removeChild(explorarBosque)
        }


        let pantallaSuperior = document.getElementById("pantallaSuperior")
        let estadisticas = document.getElementById("estadisticas")
        let mostrandoStats = false
        let mostrandoInventario = false;
        estadisticas.onclick = () => {
            if (mostrandoInventario == true) {
                ocultarInventario();
                mostrandoInventario = false
            };
            if (!mostrandoStats) {
                mostrarStats();
                mostrandoStats = true;
            } else {
                mostrandoStats = false
                ocultarStats();
            }
        }

        const mochilaJugador = document.getElementById("mochila");
        let pantallaCentral = document.getElementById("pantallaCentral");

        mochilaJugador.onclick = () => {
            if (mostrandoStats == true) {
                estadisticas.style = ""
                ocultarStats();
                mostrandoStats = false
            };

            if (!mostrandoInventario) {
                mostrarInventario()
                mostrandoInventario = true
            } else {
                ocultarInventario();
                mostrandoInventario = false
            }


        }
    }

    let armaEquipada = document.getElementById("armaEquipada");
}