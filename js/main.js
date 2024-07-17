const btn_burger = document.getElementById('burger');
const menu_burger = document.querySelector('.burger__menu');

const btn_ver_mas = document.getElementById('btn-ver-mas');
const btn_cerrar = document.getElementById('btn-cerrar');
const face_front = document.querySelector('.front');
const face_back = document.querySelector('.back');
const footer_year = document.getElementById('footer-year');

const hard_skills = document.getElementById('hard-skills');
const soft_skills = document.getElementById('soft-skills');
const formacion = document.getElementById('formacion');
const proyectos = document.querySelectorAll('.proyecto');
const flecha_arriba = document.querySelector('.main-arrow__container');

let currentIndex = 0;


footer_year.textContent = new Date().getFullYear();

btn_burger.addEventListener('click', () =>{
  //boton menu lateral
  menu_burger.classList.toggle('active');
  btn_burger.classList.toggle('active');
});

function ocultar_menu(){
  menu_burger.classList.remove('active');
  btn_burger.classList.remove('active');
}

setInterval(() =>{
  this.changePosition(1);
},5000);


window.addEventListener('scroll', function(){
  let posicion_hard = hard_skills.getBoundingClientRect().top;
  let posicion_soft = soft_skills.getBoundingClientRect().top;
  let posicion_formacion = formacion.getBoundingClientRect().top;

  let altura_pantalla = window.innerHeight / 1.5;

  if(posicion_hard <= altura_pantalla){
    hard_skills.style.animation = 'skills-frame 1.5s ease-in-out forwards'
  }

  if(posicion_soft <= altura_pantalla){
    soft_skills.style.animation = 'soft-skills-frame 1.5s ease-in-out forwards'
  }

  if(posicion_formacion <= altura_pantalla){
    formacion.style.animation = 'formacion-frame 600ms ease-in-out forwards'
  }


  const obtener_altura_pagina = () => document.documentElement.scrollTop || document.body.scrollTop;

  if(obtener_altura_pagina() < 300){
    flecha_arriba.classList.add('oculto');
  }else{
    flecha_arriba.classList.remove('oculto');
  }
});


function showProject(index) {
  proyectos.forEach((proyecto, i) => {
    proyecto.classList.remove('active');
    if (i === index) {
      proyecto.classList.add('active');
    }
  });
}

function changePosition(change) {
  currentIndex = (currentIndex + change) % proyectos.length;
  if(currentIndex < 0) {
    currentIndex = proyectos.length - 1;
  }
  showProject(currentIndex);
}


const obtener_altura_pagina = () => document.documentElement.scrollTop || document.body.scrollTop;

addEventListener('DOMContentLoaded', () =>{
  const flecha_arriba = document.querySelector('.main-arrow__container');

  if(obtener_altura_pagina() < 300){
    flecha_arriba.classList.add('oculto');
  }

  showProject(currentIndex);
  setInterval(changePosition(1), 10000);
});

