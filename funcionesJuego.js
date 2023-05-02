//Menu
let aplicarFondo = document.getElementById("pantallaJuego");
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
let personaje = new claseElegible(" ", 1, 1, 1, 1, 0);
let guerrero = new claseElegible("guerrero", 25, 7, 3, 4, 0);
let mago = new claseElegible("mago", 10, 2, 0, 2, 7);
let ladron = new claseElegible("ladrón", 15, 4, 2, 9, 0);

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
            <img class="card-img-top" src="./img/mago.png" alt="Card image cap">
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
        <img class="card-img-top" src="./img/ladrón.png" alt="Card image cap">
    <div class="card-body estiloTarjeta">
        <h5 class="card-title text-center">ladrón</h5>
        <p class="card-text">
            salud: 15 <br>
            Fuerza: 4 <br>
            Armadura: 2 <br>
            Agilidad: 9 <br>
            Mana: 0</p>
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
        <img class="card-img-top" src="./img/${personaje.nombreClase}.png" alt="Card image cap">
        <div class="card-body estiloTarjeta">
        <h5 class="card-title text-center">${personaje.nombreClase}</h5>
        <p class="card-text">
            Salud: ${personaje.vida} <br>
            Fuerza: ${personaje.fuerza} <br>
            Armadura:${personaje.defensa} <br>
            Agilidad: ${personaje.agilidad} <br>
            Mana: ${personaje.mana}</p>
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
    vidaActual = (Math.floor(personaje.vida / 2));
    manaActual = personaje.mana
    iniciarRevisarVida();


    aplicarFondo.classList.add("fondoJuego")

    function iniciarRevisarVida() {
        const intervaloVida = setInterval(() => {
            if (vidaActual >= 1) {
                revisarVida()
                revisarMana()
            } else {
                clearInterval(intervaloVida)
                muerte()
            }
        }, 500)
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
                <div class="row lineaDatoHud"><p class="col-2">Salud:</p> <div class="col-9"><div class="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="height: 20px">
                    <div class="progress-bar" id="barraVida">${vidaActual}/${personaje.vida}</div> </div> </div> </div>

                <div class="row lineaDatoHud"><p class="col-2">Mana:</p> <div class="col-9"><div class="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="height: 20px">
                    <div class="progress-bar" id="barraMana">${manaActual}/${personaje.mana}</div></div>
                </div></div>
                
            </div>
            
            <div class= "d-flex cuadriculaArmaEquipada" id = "armaEquipada">ARMA</div>
            <div class="col-2"></div>
            
        </div>

    </div>

    `

        let pantallaSuperiorBase = document.getElementById("pantallaSuperior")
        let pantallaSuperior = pantallaSuperiorBase
        let estadisticas = document.getElementById("estadisticas")
        let mostrandoStats = false
        estadisticas.onclick = () => {
            if (mostrandoInventario == true) {
                ocultarInventario();
                mostrandoInventario = false
                pantallaCentral.innerHTML = pantallaAnterior
            };
            if (!mostrandoStats) {
                mostrarStats();
                mostrandoStats = true;
            } else {
                mostrandoStats = false
                ocultarStats();
            }
        }

        let pantallaAnterior = null;
        const mochilaJugador = document.getElementById("mochila");
        let pantallaCentral = document.getElementById("pantallaCentral");

        let mostrandoInventario = false;
        mochilaJugador.onclick = () => {
            if (mostrandoStats == true) {
                estadisticas.style = ""
                ocultarStats();
                mostrandoStats = false
            };

            if (!mostrandoInventario) {
                pantallaAnterior = pantallaCentral.innerHTML
                mostrarInventario()
                mostrandoInventario = true
            } else {
                ocultarInventario();
                mostrandoInventario = false
                pantallaCentral.innerHTML = pantallaAnterior
            }


        }
    }

    let armaEquipada = document.getElementById("armaEquipada");
    armaEquipada.innerHTML = `<h5>Vacío</h5>`
}







//Inventario


class consumibleInventario {
    constructor(id, nombre, efectoSalud, valorTienda, descripcion, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.efectoSalud = efectoSalud;
        this.valorTienda = valorTienda;
        this.descripcion = descripcion;
        this.imagen = imagen;

    }
}





//Items:
let pocionSalud = new consumibleInventario(101, "pocion", 8, 30, "Poción básica de salud, Restaura 8 puntos de vida", `<img src="./img/pocionSalud.png">`)
let pocionSaludSuprema = new consumibleInventario(102, "Poción de salud suprema", 50, 200, "Una poción de vida suprema, regenera la vida por completo, muy valiosas y raras", `<img src="./img/pocionSaludSuprema.png">`)
let manzana = new consumibleInventario(103, "manzana", 1, 3, "Una manzana, restaura 1 punto de vida,", `<img src="./img/manzana.png">`)



function remover(objeto) {
    let objetoRemovido = inventario.indexOf(objeto);
    if (objetoRemovido != -1) {
        inventario.splice(objetoRemovido, 1)
        return inventario;
    }
}
//Funciones inventario objetos


function usarObjeto() {
    objetoUsado = inventario.find((objeto) => objeto.id == itemClickeado.id);
    if (vidaActual < personaje.vida) {
        objeto = objetoUsado;
        vidaActual = vidaActual + objeto.efectoSalud
        remover(objeto)
    } else {
        console.log("Tu vida ya está al máximo")
    }
}



let danioTotal = 1
function equipar() {
    if (slotArma.length == 1) {
        slotArma.length = 0
    }
    let armaAEquiparse = inventario.find((arma) => arma.id == itemClickeado.id);
    slotArma.push(armaAEquiparse)
    armaEquipada.innerHTML = `${slotArma[0].imagen}`
}


//INVENTARIO JUEGO - IMPORTANTE : 


const inventario = [pocionSaludSuprema]
let slotArma = []




//Armas


//armas iniciales:

class armaInventario {
    constructor(id, nombre, danio, habilidadUsada, valorTienda, descripcion, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.danio = danio;
        this.habilidadUsada = habilidadUsada;
        this.valorTienda = valorTienda
        this.descripcion = descripcion;
        this.imagen = imagen
    }
}

function DarArmaInicial() {

    let espadaBasica = new armaInventario(001, "Espada", 5, personaje.fuerza, 15, `Espada básica, que todo aventurero novato carga. Daño= 5 + ${personaje.fuerza}`, `<img src="./img/espada.png"></img>`)
    let varitaMagica = new armaInventario(002, "varita mágica", 10, personaje.mana, 60, "Una varita mágica de mago aprendiz, dispara chispas ardientes. Daño= 10. Consume 1 de maná por uso", `<img src="./img/varitaMagica.png">`)
    let daga = new armaInventario(003, "daga", 2, personaje.agilidad, 10, `Una daga, especial para encuentros cercanos. Daño = 2 + ${personaje.agilidad}`, `<img src="./img/daga.png">`,)

    if (personaje.nombreClase == "guerrero") {
        inventario.push(espadaBasica);
    } else if (personaje.nombreClase == "mago") {
        inventario.push(varitaMagica);
    } else if (personaje.nombreClase == "ladrón") {
        inventario.push(daga);
    }
}

//VIDA:

function revisarVida() {


    if (vidaActual > personaje.vida) {
        vidaActual = personaje.vida;
    }

    porcentajeVida = Math.floor((vidaActual / (personaje.vida)) * 100);

    const barraVida = document.getElementById("barraVida");

    barraVida.style.width = `${Math.floor(porcentajeVida)}%`;
    barraVida.innerText = `${vidaActual}/${personaje.vida}`
    barraVida.style.backgroundColor = `red`


}
function revisarMana() {

    porcentajeMana = Math.floor((manaActual / (personaje.mana)) * 100);

    if (manaActual > personaje.mana) {
        manaActual = personaje.mana;
    }
    if (vidaActual <= 0) {
        muerte()
    }

    const barraMana = document.getElementById("barraMana");
    barraMana.style.width = `${Math.floor(porcentajeMana)}%`;
    barraMana.innerText = `${manaActual}/${personaje.mana}`;
    barraMana.style.backgroundColor = "blue"


    if (personaje.nombreClase != "mago") {
        barraMana.style.width = `100%`;
        barraMana.innerText = `No posees magia`;
    }
};


var vidaActual = 1;
var manaActual = personaje.mana;
let menuMostrarStats = ""
function mostrarStats() {
    menuMostrarStats = document.createElement("div")
    menuMostrarStats.classList.add("col-8")
    menuMostrarStats.id = "menuStats"
    menuMostrarStats.innerHTML =
        `
    <h4>${nombrePersonaje}</h4>
    <h5>${personaje.nombreClase}</h5>
    <table>
    <tr>
    <th>Fuerza</th> 
    <th>Armadura</th>
    <th>Agilidad</th>
    <th>Mana</th>
    </tr>
    <tr>
    <td>${personaje.fuerza}</td>
    <td>${personaje.defensa}</td>
    <td>${personaje.agilidad}</td>
    <td>${personaje.mana}</td>
    </tr>
    </table>`

    pantallaSuperior.appendChild(menuMostrarStats)
    return pantallaSuperior
}

function ocultarStats() {
    pantallaSuperior.removeChild(menuMostrarStats)
}

// Muerte
function muerte() {
    inicioJuego.innerHTML = `
            <div id="pantallaSuperior">

                <h2 class= "text-center">Has muerto</h2>
                
                </div>
                <div id="pantallaCentral">
                    
                <div class= "text-center row" id="menuPrincipal">
                        <div class="col-4"></div>
                        
                            <div class="col-4">
                                <button id="botonReintentar">Volver al menú principal</button>
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

}

//*******************/

// Mostrar inventario e interacciones durante el juego
function mostrarInventario() {




    let imagenDefecto = `<img src="./img/plantillaInventario.png"></img>`
    let inventarioMostrado = inventario.map((objeto) => {
        return {
            id: objeto.id,
            imagenObjeto: objeto.imagen,
            nombreObjeto: objeto.nombre,
            descripcionObjeto: objeto.descripcion,
        };
    });

    while (inventarioMostrado.length < 10) {
        inventarioMostrado.push({
            id: 0,
            imagenObjeto: imagenDefecto,
            nombreObjeto: "Vacío",
            descripcionObjeto: "",

        });
    }




    pantallaCentral.innerHTML = `
    <div class= "row">
    <div class= "col-8" id= "menuInventario">
    <div class= "row d-flex justify-content-around align-items-center">
    <div class= "d-flex cuadricula">${inventarioMostrado[0].imagenObjeto}</div>
    <div class= "d-flex cuadricula">${inventarioMostrado[1].imagenObjeto}</div>
    <div class= "d-flex cuadricula">${inventarioMostrado[2].imagenObjeto}</div>
    <div class= "d-flex cuadricula">${inventarioMostrado[3].imagenObjeto}</div>
    <div class= "d-flex cuadricula">${inventarioMostrado[4].imagenObjeto}</div>
    </div>
    <div class= "row d-flex justify-content-around align-items-center">
    <div class= "d-flex cuadricula">${inventarioMostrado[5].imagenObjeto}</div>
    <div class= "d-flex cuadricula">${inventarioMostrado[6].imagenObjeto}</div>
    <div class= "d-flex cuadricula">${inventarioMostrado[7].imagenObjeto}</div>
    <div class= "d-flex cuadricula">${inventarioMostrado[8].imagenObjeto}</div>
    <div class= "d-flex cuadricula">${inventarioMostrado[9].imagenObjeto}</div>
    </div>
    </div>
    <div class= "col-3" id="muestraInventario"><p>Pasa el mouse sobre un objeto para saber qué hace. Clickealo para usarlo instantaneamente</p></div>
    </div>
    `;

    let infoItem = document.getElementsByClassName("cuadricula");
    for (let i = 0; i < infoItem.length; i++) {

        let muestraInventario = document.getElementById("muestraInventario");
        infoItem[i].addEventListener("mouseover", () => {
            infoItem[i].classList.add("cuadriculaGlow")
            muestraInventario.innerHTML =
                `<h5>${inventarioMostrado[i].nombreObjeto}</h5>
                <br>
            <p>${inventarioMostrado[i].descripcionObjeto}</p>
            `
        })

        infoItem[i].addEventListener("mouseout", () => {
            infoItem[i].classList.remove("cuadriculaGlow")
            muestraInventario.innerHTML =
                `<p>Pasa el mouse sobre un objeto para saber qué hace. Clickealo para usarlo instantaneamente</p>`
        })


        infoItem[i].addEventListener("click", () => {
            let funcionesInventario = inventarioMostrado[i].id;
            interaccionInventario();
            mostrarInventario();


            function interaccionInventario() {
                switch (funcionesInventario) {
                    case 1:
                        itemClickeado = inventarioMostrado[i];
                        equipar()
                        break;
                    case 2:
                        itemClickeado = inventarioMostrado[i];
                        equipar()
                        break;
                    case 3:
                        itemClickeado = inventarioMostrado[i];
                        equipar()
                        break;
                    case 101:
                        itemClickeado = inventarioMostrado[i]
                        usarObjeto()
                        break
                    case 102:
                        itemClickeado = inventarioMostrado[i]
                        usarObjeto()
                        break;
                    case 103:
                        itemClickeado = inventarioMostrado[i]
                        usarObjeto()
                        break;
                    default:
                        console.log("Sin interacción")
                }
            }
        })
    }


}




function ocultarInventario() {
    pantallaCentral.innerHTML = null
}








//COMBATE




class Enemigo {
    constructor(nombreEnemigo, saludActualEnemigo, saludEnemigo, ataqueEnemigo, defensaEnemigo, imagenEnemigo) {
        this.nombreEnemigo = nombreEnemigo;
        this.saludActualEnemigo = saludActualEnemigo
        this.saludEnemigo = saludEnemigo;
        this.ataqueEnemigo = ataqueEnemigo;
        this.defensaEnemigo = defensaEnemigo;
        this.imagenEnemigo = imagenEnemigo;
    }
}


let lobo1 = new Enemigo("Lobo", 3, 3, 4, 0, `<img src="./img/lobo.png">`);
let lobo2 = new Enemigo("Lobo", 3, 3, 4, 0, `<img src="./img/lobo.png">`);
let lobo3 = new Enemigo("Lobo", 3, 3, 4, 0, `<img src="./img/lobo.png">`);
let bandido1 = new Enemigo(" bandido", 5, 5, 3, 3, `<img src= "./img/bandido.png">`);
let bandido2 = new Enemigo(" bandido", 5, 5, 3, 3, `<img src= "./img/bandido.png">`);
let zombie = new Enemigo("Zombie", 5, 5, 1, 1, `<img src= "./img/objeto.png">`);
//const enemigoVacio = new Enemigo ("", 0, 0 , 0)

function Combate() {
    let ordenCombate = [...listaEnemigos, jugador];
    let rondaActual = 0;

    pantallaCentral.innerHTML = `
    <div class="row">
        <div class="col-12" id="menuCombate">
            <div class="d-flex justify-content-center align-items-center" id="tablaCombate"></div> 
        </div> 
    </div>`;

    let displayEnemigos = document.getElementById("tablaCombate");
    for (let enemigo of listaEnemigos) {
        displayEnemigos.innerHTML += `<div class="d-flex detectarEnemigo">${enemigo.imagenEnemigo}</div>`;
    }



    let asignarEnemigos = document.getElementsByClassName("detectarEnemigo");
    for (let i = 0; i < asignarEnemigos.length; i++) {
        let enemigoAsignado = asignarEnemigos[i];
        enemigoAsignado.setAttribute("id", `enemigo${i + 1}`);
    }

    let contadorSaludEnemigo = listaEnemigos.map((datosEnemigo) => {
        return {
            saludActualEnemigo = datosEnemigo.saludActualEnemigo,
            saludEnemigo = datosEnemigo.saludEnemigo,
        }
    });
};



detectarRonda();

function detectarRonda() {
    if (rondaActual === 0) {
        turnoJugador();
    } else if (rondaActual === ordenCombate.length) {
        rondaActual = 0;
        console.log("Es tu turno");
        if (listaEnemigos.length == 0) {
            alert("GANASTE")
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
                console.log(`Atacaste a ${enemigo.nombreEnemigo}`);
                ataqueJugador(enemigo);
                detectarRonda();
                cuadriculaEnemigo.removeEventListener('click', handler);
            }
            cuadriculaEnemigo.addEventListener("click", handler);
        }
    }
}

let imagenMuerte = `<img src="./img/objeto.png">`

function ataqueJugador(enemigo) {
    let ataque = parseInt(slotArma[0].danio + slotArma[0].habilidadUsada)
    console.log(`Atacaste a ${enemigo.nombreEnemigo} con ${ataque} de daño`);
    enemigo.saludActualEnemigo -= ataque;
    console.log(`${enemigo.nombreEnemigo} tiene ahora ${enemigo.saludActualEnemigo} de salud`);
    rondaActual++;
    if (enemigo.saludActualEnemigo <= 0) {
        enemigo.saludActualEnemigo = 0
        console.table(enemigo)
        console.log(imagenMuerte)
        muerteEnemigo(enemigo)
    }
}

function muerteEnemigo(enemigo) {
    let enemigoMuerto = listaEnemigos.indexOf(enemigo);
    listaEnemigos.splice(enemigoMuerto, 1)
    ordenCombate.splice(enemigoMuerto, 1)
}


function turnoEnemigo(enemigo) {
    console.log(`El enemigo ${enemigo.nombreEnemigo} atacó`);
    vidaActual -= enemigo.ataqueEnemigo - jugador.defensa;
    console.log(`Tu personaje tiene ahora ${vidaActual} de salud.`);
    rondaActual++;
    detectarRonda();
}

console.log(rondaActual)
}





function encuentro1() {
    jugador = personaje;
    listaEnemigos = [lobo1, lobo2, bandido1, lobo3]

    Combate()
}


game()
