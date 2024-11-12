// ====================== Array de pizzas ======================

const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

// ====================== Eleumentos recuperados ======================
const inputForm = document.querySelector('.pizza-form')
const input = document.querySelector('.inputN')
const card = document.querySelector('.card')
const pizzaImagen = document.querySelector('.pizza-img')
// const pizzaNombre = document.querySelector('.pizza-nombre')
// const pizzaPrecio = document.querySelector('.pizza-precio')
const infoCard = document.querySelector('.info_card')
const errorMsg = document.getElementById("error-p")
const button = document.getElementById("button")
// ====================== Funciones auxiliares ======================

console.dir(errorMsg)

const renderPizza = (input) => {
  i = input.value - 1;
  card.innerHTML = `
    <img src=${pizzas[i].imagen} alt="pizza-img" class="pizza-img">
    <div class="info_card">
        <p>Nombre: <span class="pizza-nombre">${pizzas[i].nombre}</span></p>
       <p>Precio: <span class="pizza-precio">S${pizzas[i].precio}</span></p>
    </div>
  ` 

}

//manejador del boton submit

let submitHandler = (event) => {
  event.preventDefault();
  if(validateInput(input)){
    renderPizza(input)
    console.log("todo en orden")
  }
  console.log(`${input.value}`)
}


const validateInput = (input) => {
  let flag = true
  if(! input.value.length){
    error()
    return
  }
  return flag;
}

const error = () => {
  errorMsg.classList.remove("hidden")
  infoCard.classList.add("hidden")
  pizzaImagen.classList.add("hidden")
  card.classList.add("card-error")
  card.classList.remove("card")

}

// ====================== Funcion inicializadora ======================

const init = () => {
  //Submit Handler
    inputForm.addEventListener('submit', submitHandler); 
}

init()

