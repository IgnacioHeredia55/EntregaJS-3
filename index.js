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
const infoCard = document.querySelector('.info_card')
const errorMsg = document.getElementById("error-p")
const button = document.getElementById("button")
const infoMSG = document.getElementById("info-msg")
// ====================== Funciones auxiliares ======================



let saveToLocalStorage = (input) => {
  localStorage.setItem('pizza', JSON.stringify(createCardTemplate(input)))
}

const renderPizza = (input) => {
  saveToLocalStorage(input)
  card.innerHTML = createCardTemplate(input)
  serchIsSucces()
}

const createCardTemplate = (input) => {
  i = input.value - 1;
  return `
    <img src=${pizzas[i].imagen} alt="pizza-img" class="pizza-img">
    <div class="info_card">
        <p>Nombre: <span class="pizza-nombre">${pizzas[i].nombre}</span></p>
       <p>Precio: <span class="pizza-precio">$${pizzas[i].precio}</span></p>
    </div>
  `
}

const loadPizzaFromLocalStorage = () => {
  const savedPizza = localStorage.getItem('pizza');
  if (savedPizza) {
    const pizzaData = JSON.parse(savedPizza);
    card.innerHTML = pizzaData; // Muestra la pizza guardada
  }
}

const createErrorCardTemplate = () => {
  card.classList.add("card-error")
  card.classList.remove("card")
  card.innerHTML = '<p id="error-p" class="error">!ERROR¡ Tenes que ingresar un numero!</p>';
}

//manejador del boton submit

let submitHandler = (event) => {
  event.preventDefault();
  if(validateInput(input)){
    renderPizza(input)
  }
  else{
    createErrorCardTemplate();
  }
}


const validateInput = (input) => {
  let flag = true
  if(!input.value.length){
    return
  }
  return flag;
}


const serchIsSucces = () => {
  card.classList.remove("card-error")
  card.classList.add("card")
  infoMSG.classList.add("hidden")
}



// ====================== Funcion inicializadora ======================

const init = () => {
  window.addEventListener('DOMContentLoaded', loadPizzaFromLocalStorage)
  inputForm.addEventListener('submit', submitHandler); 
}

init()

