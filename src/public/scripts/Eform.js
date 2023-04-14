
const form= document.getElementById("form");

function dataValidation() {
    var sePudo=true;
    var telefono=document.getElementById('Telefono').value;
    var correo=document.getElementById('Correo').value;
    var password=document.getElementById('password').value;
     // Expresión regular para verificar que el valor contenga únicamente números
    var regexNumeros = /^[0-9]+$/;

    // Verificar si contiene al menos una letra mayúscula, una letra minúscula y un número
    var regexMayuscula = /[A-Z]/;
    var regexMinuscula = /[a-z]/;
    var regexNumero = /[0-9]/;
    var regexCaracterEspecial = /[!@#$%^&*(),.?":{}|<>]/;
// Expresión regular para verificar que el valor sea una dirección de correo electrónico válida
var regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
//Valida que sea un email
    if(!correo.match(regexEmail)){
        setErrorFor(document.getElementById('Correo'),'Por favor, Ingrese una dirección de correo válida');
        sePudo=false;
        
    }else{
        setSuccesFor(document.getElementById('Correo'));
    }
    //Valida que el telefono tenga únicamente números
    if(!telefono.match(regexNumeros)){
        setErrorFor(document.getElementById('Telefono'),'El telefono debe contener únicamente números.');
        sePudo=false;
    }else{
        setSuccesFor(document.getElementById('Telefono'));
    }
    //Valida que el telefono sea de 10 numeros(En colombia los numeros son de 10 números)
    if(telefono.length!=10){
        setErrorFor(document.getElementById('Telefono'),'Por favor, Ingrese un télefono válido.');
        sePudo=false;
    }else{
        setSuccesFor(document.getElementById('Telefono'));
    }
    //Valida que la contraseña tenga más de 8 caracteres
    if(password.length<8){
        setErrorFor(document.getElementById('password'),'La contraseña debe contener mínimo 8 caracteres');
        sePudo=false;
    }else{
        setSuccesFor(document.getElementById('password'));
    }
    //Valida condiciones de contraseña
    if(!password.match(regexMayuscula)||!password.match(regexMinuscula)||!password.match(regexNumero)||!password.match(regexCaracterEspecial) ){
        setErrorFor(document.getElementById('password'),'Contraseña requiere mayúscula, minúscula, número y caracter especial.');
        sePudo=false;
    }else{
        setSuccesFor(document.getElementById('password'));
    }

if(sePudo==false){
    return false;
}else{
    return true;
}
}
function setErrorFor(input,message){
    const  inputbox=input.parentElement;
    const small= inputbox.querySelector('small');
    inputbox.className = 'inputbox error';
    small.innerText = message;

    input.focus();
}
function setSuccesFor(input){
    const formControl= input.parentElement;
    formControl.className= 'inputbox sucess';
}
form.addEventListener("submit",e => {
    e.preventDefault(); 
    if(dataValidation()){
        alert("¡Registro Exitoso!, Ya puedes navegar con nosotros");
        form.submit();
    }
});



