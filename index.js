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
const pizzaNombre = document.querySelector('.pizza-nombre')
const pizzaPrecio = document.querySelector('.pizza-precio')
// ====================== Funciones auxiliares ======================

const renderPizza = (input) => {
  i = input.value;
  card.innerHTML = `
    <img src=${pizzas[i].imagen} alt="pizza-img" class="pizza-img">
    <div class="info_card">
        <p>Nombre: <span class="pizza-nombre">${pizzas[i].nombre}</span></p>
       <p>Precio: <span class="pizza-precio">${pizzas[i].precio}</span></p>
    </div>
  ` 
  // pizzaNombre.innerText = pizzas[i].nombre;
  // pizzaPrecio.innerText = pizzas[i].precio;
  // pizzaImagen.src = pizzas[i].src
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
    console.log("Tenes que ingresar un numero")
    return
  }
  return flag;
}

// }
/*id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    imagen: "./img/4quesos.png",
  }*/ 

// ====================== Validaciones ======================

// let pizzaIsValid = (input) => {
//   if (!input.value) {
//     console.log("Tenes que ingresar un numero!");
//     return
//   }
//   console.log(`${pizzas[input.value].nombre}`)
// }

// ====================== Funcion inicializadora ======================

const init = () => {
  //Submit Handler
    inputForm.addEventListener('submit', submitHandler); 
}

init()

