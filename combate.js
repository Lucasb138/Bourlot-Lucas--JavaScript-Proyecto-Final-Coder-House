//COMBATE e historia



class Enemigo {
    constructor(nombreEnemigo, saludActualEnemigo, saludEnemigo, ataqueEnemigo, imagenEnemigo) {
        this.nombreEnemigo = nombreEnemigo;
        this.saludActualEnemigo = saludActualEnemigo
        this.saludEnemigo = saludEnemigo;
        this.ataqueEnemigo = ataqueEnemigo;
        this.imagenEnemigo = imagenEnemigo;
    }
}


let lobo1 = new Enemigo("Lobo", 5, 5, 2, `<img src="./img/lobo.png">`);
let lobo2 = new Enemigo("Lobo", 5, 5, 2, `<img src="./img/lobo.png">`);
let lobo3 = new Enemigo("Lobo", 5, 5, 1, `<img src="./img/lobo.png">`);
let bandido1 = new Enemigo(" bandido", 8, 8, 2, `<img src= "./img/bandido.png">`);
let bandido2 = new Enemigo(" bandido", 10, 10, 2, `<img src= "./img/bandido.png">`);
let zombie1 = new Enemigo("Zombie", 10, 10, 3, `<img src= "./img/zombie.png">`);
let zombie2 = new Enemigo("Zombie", 10, 10, 4, `<img src= "./img/zombie.png">`);
let reyEsqueleto = new Enemigo("Rey Esqueleto", 30, 30, 5, `<img src= "./img/reyEsqueleto.png">`)

combateGanado = false

//Función de combate:
function Combate() {
    let ordenCombate = [...listaEnemigos, jugador];
    let rondaActual = 0;

    let contadorSaludEnemigo = []
    contadorSaludEnemigo = listaEnemigos.map((datosEnemigo) => {
        return {
            saludActualEnemigo: datosEnemigo.saludActualEnemigo,
            saludEnemigo: datosEnemigo.saludEnemigo,
            ataqueEnemigo: datosEnemigo.ataqueEnemigo
        }
    });


    pantallaCentral.innerHTML = `
    <div class="row">
        <div class="col-12" id="menuCombate">
            <div class="d-flex justify-content-center align-items-center" id="tablaCombate"></div> 
        </div>
    </div>`;

    let displayEnemigos = document.getElementById("tablaCombate");
    for (let enemigo of listaEnemigos) {
        displayEnemigos.innerHTML += `<div class= "detectarEnemigo">${enemigo.imagenEnemigo} </div> 
        <div class="flexEnemigo">
            <div class="detectarVidaEnemigo"></div> 
            <div class="detectarDanioEnemigo"></div>
        </div>`
    }

    actualizarVidaEnemigo();

    function actualizarVidaEnemigo() {
        let displayVida = document.querySelectorAll(`.detectarVidaEnemigo`)
        let displayDanio = document.querySelectorAll(`.detectarDanioEnemigo`)
        for (let i = 0; i < contadorSaludEnemigo.length; i++) {
            displayVida[i].innerHTML = `${contadorSaludEnemigo[i].saludActualEnemigo} / ${contadorSaludEnemigo[i].saludEnemigo}`
            if (rondaActual > 1) {
                displayDanio[i].innerHTML = `<img src= "../img/ataqueEnemigoIcono.png">${contadorSaludEnemigo[i].ataqueEnemigo}`
            }
        }
    }


    let asignarEnemigos = document.getElementsByClassName("detectarEnemigo");
    for (let i = 0; i < asignarEnemigos.length; i++) {
        let enemigoAsignado = asignarEnemigos[i];
        enemigoAsignado.setAttribute("id", `enemigo${i + 1}`);
    }

    detectarRonda();

    function detectarRonda() {
        if (rondaActual === 0) {
            turnoJugador();
        } else if (rondaActual === ordenCombate.length) {
            rondaActual = 0;
            if (listaEnemigos.length == 0) {
                actualizarVidaEnemigo()
                darloot()

            }
        } else {
            let enemigoActual = ordenCombate[rondaActual - 1];
            turnoEnemigo(enemigoActual);
        }
    }

    function turnoJugador() {
        for (let i = 0; i < asignarEnemigos.length; i++) {
            let cuadriculaEnemigo = asignarEnemigos[i];
            let enemigo = listaEnemigos[i];
            if (enemigo.saludActualEnemigo > 0) {
                const handler = () => {
                    ataqueJugador(enemigo);
                    contadorSaludEnemigo[i].saludActualEnemigo = enemigo.saludActualEnemigo
                    detectarRonda();
                    if (contadorSaludEnemigo[i].saludActualEnemigo <= 0) {
                        cuadriculaEnemigo.removeEventListener('click', handler);
                        cuadriculaEnemigo.classList.remove("enemigoAtacable")
                    }
                }
                cuadriculaEnemigo.addEventListener("click", handler);
                cuadriculaEnemigo.classList.add("enemigoAtacable")

            }
        }
    }


    function ataqueJugador(enemigo) {
        let ataque = parseInt(slotArma[0].danio + slotArma[0].habilidadUsada)
        enemigo.saludActualEnemigo -= ataque;
        rondaActual++;
        if (enemigo.saludActualEnemigo <= 0) {
            enemigo.saludActualEnemigo = 0
            muerteEnemigo(enemigo)
        }
        actualizarVidaEnemigo()
    }

    function muerteEnemigo(enemigo) {
        let enemigoMuerto = listaEnemigos.indexOf(enemigo);
        listaEnemigos.splice(enemigoMuerto, 1)
        ordenCombate.splice(enemigoMuerto, 1)
    }





    function turnoEnemigo(enemigo) {
        actualizarVidaEnemigo();
        danioRecibido = enemigo.ataqueEnemigo - personaje.defensa;
        if (danioRecibido < 1) { danioRecibido = 1 };
        vidaActual -= danioRecibido
        revisarVida()
        rondaActual++;
        detectarRonda();
    }


}



//Función de combate finalizada.

function lootCombate(objeto1, objeto2, objeto3) {
    return new Promise((resolve, reject) => {
        pantallaCentral.innerHTML =
        `<div class= "row">
            <div class="col-4"></div>
            <div id="mensajeLoot">
            <h5>Has conseguido los siguientes objetos:</h5> 
            <p>${objeto1.nombre}</p>
            <p>${objeto2.nombre}</p> 
            <p>${objeto3.nombre}</p> 
            <button id="aceptarLoot">Aceptar</button>
            </div> 
            <div class="col-4"></div>
            </div>`;
            
            inventario.push(objeto1, objeto2, objeto3);
            
            let lootAceptado = document.getElementById("aceptarLoot");
            lootAceptado.onclick = () => {
            pantallaCentral.innerHTML = "";
            checkpoint++;
            detectarCheckpoint();
            resolve(checkpoint);
        };
    });
}

let checkpoint = 1

function detectarCheckpoint() {
    if (checkpoint == 2) {
        checkpoint2()
    }
    if (checkpoint == 3) {
        checkpoint3()
    }
}

function encuentro1() {
    jugador = personaje;
    listaEnemigos = [lobo1, lobo2, bandido1, lobo3]

    Combate()
    darloot = () => {
        lootCombate(pocionSalud, pocionSalud, manzana)
            .then((checkpoint) => {
                combateGanado = false
            })
    }
}



function checkpoint2() {
    pantallaCentral.innerHTML =
        `<div class= "row">
    <div class="col-2"></div>
    <div class= "col-8" id="mensajeCheckpoint">
    <h5>El soldado muerto</h5>
    <p>Encuentras un soldado muerto, su escudo está roto, pero reconoces su símbolo, es un soldado de la realeza, sientes cierto vínculo ¿Quizás serviste a algún reino antes de morir? También encuentras un arco, fabricado con aurumplast, un metal dorado de caracteristicas similares al oro, pero con una mayor flexibilidad y resistencia. En manos capaces, este arco podría ser devastador ¿Deseas tomarlo?</p>
    <button id= "tomarArco">Sí (Añadir al inventario)</button> <button id=no>No (Seguir tu camino)</button>
    </div>
    <div class="col-2"></div>
    </div>`

    function recogerArco() {
        arco = armasJuego[1]
        inventario.push(arco)
    }

    let tomarArco = document.getElementById("tomarArco")
    tomarArco.onclick = () => {
        recogerArco();
        pantallaCentral.innerHTML = "";
        eventoArcoResuelto();
    }

    document.getElementById("no").onclick = () => {
        pantallaCentral.innerHTML = "";
        eventoArcoResuelto()
    }


    //Una vez se acepta o se deniega el arco, la aventura continúa
    function eventoArcoResuelto() {
        let explorarBosque2 = document.createElement("button")
        explorarBosque2.innerText = "Explorar el bosque"

        mostrarBoton = document.getElementById("ubicacionBotonExplorar")
        mostrarBoton.appendChild(explorarBosque2)

        explorarBosque2.onclick = () => {
            encuentro2()
            mostrarBoton.removeChild(explorarBosque2)
        }
    }
}



function encuentro2() {
    listaEnemigos = [lobo1, bandido1, bandido2, zombie1]
    listaEnemigos.forEach(enemigo => {
        enemigo.saludActualEnemigo = enemigo.saludEnemigo
    });

    Combate()
    darloot = () => {
        lootCombate(pocionSalud, pocionSaludSuprema, manzana)
            .then((checkpoint) => {
                combateGanado = false
            })
    }
}

function checkpoint3() {
    let explorarBosque3 = document.createElement("button")
    explorarBosque3.innerText = "Enfrentar al rey Esqueleto"

    mostrarBoton = document.getElementById("ubicacionBotonExplorar")
    mostrarBoton.appendChild(explorarBosque3)

    explorarBosque3.onclick = () => {
        encuentro3()
        mostrarBoton.removeChild(explorarBosque3)
    }
}

function encuentro3() {
    listaEnemigos = [zombie1, reyEsqueleto, zombie2]
    listaEnemigos.forEach(enemigo => {
        enemigo.saludActualEnemigo = enemigo.saludEnemigo
    });

    Combate()
    darloot = () => {
        juegoTerminado = true
        epilogo()
    }
}

function epilogo() {
    inicioJuego.innerHTML = `
                <div id="pantallaSuperior">
    
                    <h2 class= "text-center">Cumpliste tu destino</h2>
                    
                    </div>
                    <div id="pantallaCentral">

                    <p>Con el golpe final sobre el rey esqueleto, te declaras victorioso, puedes ver como grupos de muertos vivientes comienzan a aparecer entre los árboles, pero, al momento de tomar tu arma para combatirlos, notas que comienzan a arrodillarse ante tí. Y entonces lo comprendiste, las sombras te trajeron de vuelta, no para terminar con el reinado del campeón de los no muertos, sino para reemplazarlo. Y así será. Pues tu voluntad lentamente se pierde mientras tomas tu trofeo. La corona de huesos, que te conferirá el poder necesario para gobernar esta tierra, como adalid de la muerte en la tierra de los vivos. <strong>${nombrePersonaje}</strong> se ha convertido en el rey esqueleto</p>
                        
                    <div class= "text-center row" id="menuPrincipal">
                            <div class="col-4"></div>
                            
                                <div class="col-4">
                                <button id="botonReintentar">Volver a jugar</button>
                                </div>
                            </div>
                            <div class="col-4"></div> 
                
                        
                        </div>
                        `

    aplicarFondo.classList.remove("fondoJuego")
    let botonReintentar = document.getElementById("botonReintentar");
    botonReintentar.onclick = () => {
        window.location.reload()
    }
    return juegoTerminado
}
game()