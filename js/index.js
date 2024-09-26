const container=document.getElementById("container");
console.log(typeof container);
console.log(container);
console.log(container.baseURI );
console.log(container.className);
console.log(container.innerHTML);

const titulo=document.getElementById("titulo");
console.log(titulo);
console.log(titulo.innerText);

//LLAMAR UNA CLASE
const fruta= document.getElementsByClassName("fruta");
console.log(fruta);
// innerText te xto que esta dentro del elemento 
// inner html te miestra todo lo que esta dentro de htmal 
const verduras=document.getElementsByClassName("verdura");
console.log (verduras);
console.log(verduras[0].innerText); //cebolla

//formas de recuperar un elemento
//querySelector(); permite seleccionar el primer elemento que cumpla ese criterio.
const ingrediente=document.querySelector(".ingrediente");
    console.log(ingrediente);
// me devolvio el primer ingrediente que tiene clase ingrediente en mi doc html, si quiero llamar a un id etngo que poner #.
const ingreVerdura=document.querySelector(".ingrediente.verdura");
console.log(ingreVerdura);

const ingreFruta=document.querySelector("ul li.fruta");
console.log(ingreFruta);


//querySelectorAll(); devuelve todos lo elementos que cumplan el criterio. aqui uso almoadilla en los id.
const listaVerduras=document.querySelectorAll(".verdura");
console.log(listaVerduras);
console.log(listaVerduras.length);
console.log(listaVerduras[1].innerText);

/*TRABAJAR CON ESTILOS EN JS*/
// en query selector no es necesario usar almoadilla porque trabaja mas especificamente 
const primerIngrediente= document.querySelector(".ingrediente");
console.log(primerIngrediente); 
console.log(primerIngrediente.style.backgroundColor="green");

const otroIngrediente= document.querySelector("#pinia");
console.log(otroIngrediente);
otroIngrediente.style.backgroundColor="yellow";
otroIngrediente.style.textTransform="uppercase";

//trabajar con el texto 

console.log(titulo);

console.log(titulo.innerText);
console.log(titulo.textContent);
console.log(titulo.innerHTML);
titulo.innerText="Lista Pizza";

//MODIFICANDO ATRIBUTOS, en este caso <a></a>
const anchor=document.querySelector("a");
console.log(anchor);

console.log(anchor.getAttribute("href"))

//REMOVE- Eliminar Atributo 
// si quiero eliminar este atributo 
anchor.removeAttribute("href");


//SET -ACTUALIZAR O CREAR ATRIB
// entoces con set recupero o creo un atributo y con remove elimino atributos.

anchor.setAttribute("href","https://www.elpais.com");
anchor.setAttribute("class","enlace");// estoy creando el atributo enlace y en css estoy haciendo las modificaciones del estilo de ese boton. 
anchor.setAttribute("target","_blank");

/*MODIFICAR CLASES*/
console.log(listaVerduras);
const queso=document.querySelector(".queso");
console.log(queso);
console.log(queso.classList);

queso.classList.add("nuevo");
console.log(queso.classList.value);
console.log(queso.classList.contains("nuevo"));

if(queso.classList.contains("nuevo")){
    queso.classList.add("texto-rojo","enlace");
    queso.classList.remove("nuevo");
}

//CREAR ELEMENTOS <li><a href="http://google.com">pagina</a></li>
const nuevoIngrediente=document.createElement("li");
console.log(nuevoIngrediente);
nuevoIngrediente.setAttribute("id","mozzarella");
nuevoIngrediente.classList.add("ingrediente","queso");
nuevoIngrediente.innerText=("Mozzarella");

//contenedor 
const listaIngrediente=document.getElementById("lista-ingredientes");
console.log(listaIngrediente);


listaIngrediente.appendChild(nuevoIngrediente);

//ELIMINAR UN ELEMENTO
nuevoIngrediente.remove();//aca elimino el nuevo ingredeinte 

// listaIngrediente.removeChild (nuevoIngrediente);// aca elimino de la lista de ingredeintes remover al hijo llamado nuevo ingrediente(Mozzarella). 



// aca le cambio el colo al boton de champinion cuando le doy un click 

const champ=document.querySelectorAll(".ingrediente");
let champinion={};
for(let i=0;i<champ.length;i++){
    if(champ[i].innerText ==="Champiñones"){
champinion=champ[i];
    }
}
function coloresHexadecimales() {
    let valores="0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color = color + valores[Math.floor(Math.random() * valores.length)];
    }
    return color;
  }

  console.log(coloresHexadecimales());

console.log(champinion);
champinion.addEventListener("click",() =>{
    let colorAleatorio= coloresHexadecimales ();
    console.log(colorAleatorio);
    champinion.style.backgroundColor = colorAleatorio 
    console.log(document);})





