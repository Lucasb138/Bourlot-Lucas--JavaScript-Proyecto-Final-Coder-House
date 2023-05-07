
//Inventario


class consumibleInventario {
    constructor(id, nombre, efectoSalud, descripcion, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.efectoSalud = efectoSalud;
        this.descripcion = descripcion;
        this.imagen = imagen;

    }
}





//Items:
let pocionSalud = new consumibleInventario(101, "pocion de salud", 8, "Poción básica de salud, Restaura 8 puntos de vida", `<img src="./img/pocionSalud.png">`)
let pocionSaludSuprema = new consumibleInventario(102, "Poción de salud suprema", 50, "Una poción de vida suprema, regenera la vida por completo, muy valiosas y raras", `<img src="./img/pocionSaludSuprema.png">`)
let manzana = new consumibleInventario(103, "manzana", 1, "Una manzana, restaura 1 punto de vida,", `<img src="./img/manzana.png">`)



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
    }
}




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
    constructor(id, nombre, danio, habilidadUsada, descripcion, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.danio = danio;
        this.habilidadUsada = habilidadUsada;
        this.descripcion = descripcion;
        this.imagen = imagen
    }
}

function DarArmaInicial() {

    let espadaBasica = new armaInventario(001, "Espada", 2, personaje.fuerza, `Una espada, no es perfecta, pero hace el trabajo. Daño= ${personaje.fuerza + 2} (2 + fuerza)`, `<img src="./img/espada.png"></img>`)
    let arco = new armaInventario(002, "arco", 6, personaje.agilidad, `Un arco, Daño = ${personaje.agilidad + 6} (6 + agilidad)`, `<img src="./img/arco.png">`)
    let daga = new armaInventario(003, "daga", 2, personaje.agilidad, `Una daga, especial para encuentros cercanos. Daño = ${personaje.agilidad + 2} (2 + agilidad)`, `<img src="./img/daga.png">`,)

    let armaInicial = null;

    if (personaje.nombreClase == "guerrero") {
        inventario.push(espadaBasica);
        return armaInicial = espadaBasica
    } else if (personaje.nombreClase == "ladron") {
        armaInicial = daga;
        return inventario.push(daga);
    }
    slotArma.push(armaInicial)
    armaEquipada.innerHTML = `${slotArma[0].imagen}`

    return armasJuego = [espadaBasica, arco, daga]
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

let vidaActual = 1;
let menuMostrarStats = ""
let menuMostrarInventario = ""
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
    </tr>
    <tr>
    <td>${personaje.fuerza}</td>
    <td>${personaje.defensa}</td>
    <td>${personaje.agilidad}</td>
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
            descripcionObjeto: " ",

        });
    }

    menuMostrarInventario = document.createElement("div")
    menuMostrarInventario.classList.add("row")

    menuMostrarInventario.innerHTML = `
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
    `;

    pantallaCentral.appendChild(menuMostrarInventario);


    let infoItem = menuMostrarInventario.getElementsByClassName("cuadricula");
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
            ocultarInventario();
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
                }
            }
        })
    }


}


//Sin la variable debugInventario, el código podría tener problemas al cambiarse el innerHTML de la pantallaCentral
function ocultarInventario() {
    let debugInventario = document.getElementById("menuInventario");
    if (debugInventario) {
        pantallaCentral.removeChild(menuMostrarInventario)
    };
    inventarioMostrado = false
}