/*Validacion de inputs contacto*/

const input_usuario = document.getElementById('usuario');
const input_email = document.getElementById('email');
const input_asunto = document.getElementById('asunto');
const input_mensaje = document.getElementById('texto-mensaje');

const label_usuario = document.querySelector('.label-usuario');
const label_email = document.querySelector('.label-email');
const label_asunto = document.querySelector('.label-asunto');
const label_mensaje = document.querySelector('.label-mensaje');
const boton_enviar = document.getElementById('contacto_enviar');

var usuario_correcto = false;
var email_correcto = false;
var asunto_correcto = false;
var mensaje_correcto = false;

input_usuario.addEventListener('input', () =>{
  if(input_usuario.value.length > 0){
    input_usuario.classList.add('checked');
    label_usuario.classList.remove('error');
    label_usuario.innerHTML = '';
    usuario_correcto = true;
  }else{
    input_usuario.classList.remove('checked');
    input_usuario.classList.add('error');
    label_usuario.classList.add('error');
    label_usuario.innerHTML = 'Ingrese su nombre y apellido.';
    usuario_correcto = false;
  }

  if(input_usuario.value.length > 50){
    input_usuario.classList.remove('checked');
    input_usuario.classList.add('error');
    label_usuario.classList.add('error');
    label_usuario.innerHTML = 'Máximo de 50 caracteres.';
    usuario_correcto = false;
  }
  
  if(usuario_correcto && email_correcto && asunto_correcto && mensaje_correcto){
    boton_enviar.removeAttribute('disabled');
  }else{
    boton_enviar.setAttribute('disabled');
  }
});

input_email.addEventListener('input', () =>{
  if(input_email.value.length > 0){
    if(input_email.value.includes('@') && input_email.value.includes('.com')){
      input_email.classList.remove('error')
      input_email.classList.add('checked');
      label_email.classList.remove('error');
      label_email.classList.add('checked');
      label_email.innerHTML = 'Correo electronico correcto';
      email_correcto = true;
    }else{
      input_email.classList.remove('checked');
      input_email.classList.add('error');
      label_email.classList.remove('checked');
      label_email.classList.add('error');
      label_email.innerHTML = "El correo electronico debe tener formato 'usuario@email.com'";
      email_correcto = false;
    }
  }else{
    input_email.classList.remove('checked');
    input_email.classList.add('error');
    label_email.classList.remove('checked');
    label_email.classList.add('error');
    label_email.innerHTML = 'Ingrese un correo electronico.';
    email_correcto = false;
  }

  if(usuario_correcto && email_correcto && asunto_correcto && mensaje_correcto){
    boton_enviar.removeAttribute('disabled');
  }else{
    boton_enviar.setAttribute('disabled');
  }
});

input_asunto.addEventListener('input', () =>{
  if(input_asunto.value.length > 0){
    input_asunto.classList.remove('error');
    input_asunto.classList.add('checked');
    label_asunto.classList.remove('error');
    label_asunto.classList.add('checked');
    label_asunto.innerHTML = 'Campo correcto';
    asunto_correcto = true;
  }else{
    input_asunto.classList.remove('checked');
    input_asunto.classList.add('error');
    label_asunto.classList.remove('checked');
    label_asunto.classList.add('error');
    label_asunto.innerHTML = 'El campo asunto no puede estar vacio.';
    asunto_correcto = false;
  }

  if(input_asunto.value.length > 50){
    input_asunto.classList.remove('checked');
    input_asunto.classList.add('error');
    label_asunto.classList.remove('checked');
    label_asunto.classList.add('error');
    label_asunto.innerHTML = 'Máximo de 50 caracteres.';
    asunto_correcto = false;
  }

  if(usuario_correcto && email_correcto && asunto_correcto && mensaje_correcto){
    boton_enviar.removeAttribute('disabled');
  }else{
    boton_enviar.setAttribute('disabled');
  }
});

input_mensaje.addEventListener('input', () =>{
  if(input_mensaje.value.length > 0){
    input_mensaje.classList.remove('error');
    input_mensaje.classList.add('checked');
    label_mensaje.classList.remove('error');
    label_mensaje.classList.add('checked');
    label_mensaje.innerHTML = 'Campo correcto';
    mensaje_correcto = true;
  }else{
    input_mensaje.classList.remove('checked');
    input_mensaje.classList.add('error');
    label_mensaje.classList.remove('checked');
    label_mensaje.classList.add('error');
    label_mensaje.innerHTML = 'El campo mensaje no puede estar vacio.';
    mensaje_correcto = false;
  }

  if(input_mensaje.value.length > 300){
    input_mensaje.classList.remove('checked');
    input_mensaje.classList.add('error');
    label_mensaje.classList.remove('checked');
    label_mensaje.classList.add('error');
    label_mensaje.innerHTML = 'Máximo de 300 caracteres.';
    mensaje_correcto = false;
  }

  if(usuario_correcto && email_correcto && asunto_correcto && mensaje_correcto){
    boton_enviar.removeAttribute('disabled');
  }else{
    boton_enviar.setAttribute('disabled');
  }
});
