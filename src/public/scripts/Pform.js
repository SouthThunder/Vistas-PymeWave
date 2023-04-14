const form= document.getElementById("formu");
function validarform() {
    var sePudo=true;
    var telefono=document.getElementById('Telefono').value;
    var correo=document.getElementById('Correo').value;
    var password=document.getElementById('password').value;
    var nombre=document.getElementById('nombre').value;
    var apellidos=document.getElementById('apellidos').value;
     // Expresión regular para verificar que el valor contenga únicamente números
    var regexNumeros = /^[0-9]+$/;

    // Verificar si contiene al menos una letra mayúscula, una letra minúscula y un número
    var regexMayuscula = /[A-Z]/;
    var regexSoloLetras = /^[a-zA-Z]+$/;
    var regexMinuscula = /[a-z]/;
    var regexNumero = /[0-9]/;
    var regexCaracterEspecial = /[!@#$%^&*(),.?":{}|<>]/;
// Expresión regular para verificar que el valor sea una dirección de correo electrónico válida
var regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
//Valida que sea un email
    if(!correo.match(regexEmail)){
        setErrorFor(getElementById('Correo').value,'Por favor, Ingrese una dirección de correo válida');
        console.log("ss");
        sePudo=false;
    }
    else{
        setSuccesFor(getElementById('Correo').value);
    }
    //valida que el nombre tenga unicamente letras
    if(!nombre.match(regexSoloLetras)||!apellidos.match(regexSoloLetras)){
        setErrorFor(getElementById('nombre').value,'Por favor, digite un nombre y/ o apellido valido');
        sePudo=false;
    }
    else{
        setSuccesFor(getElementById('nombre').value);
    }
    //Valida que el telefono tenga únicamente números
    if(!telefono.match(regexNumeros)){
        setErrorFor(getElementById('Telefono').value,'El telefono debe contener únicamente números.');
        sePudo=false;
    }
    else{
        setSuccesFor(getElementById('Telefono').value);
    }
    //Valida que el telefono sea de 10 numeros(En colombia los numeros son de 10 números)
    if(telefono.length!=10){
        setErrorFor(getElementById('Telefono').value,'Por favor, Ingrese un télefono válido.');
        sePudo=false;
    }else{
        setSuccesFor(getElementById('Telefono').value);
    }
    //Valida que la contraseña tenga más de 8 caracteres
    if(password.length<8){
        setErrorFor(getElementById('password').value,'La contraseña debe contener mínimo 8 caracteres');
        sePudo=false; 
    }else{
        setSuccesFor(getElementById('password').value);
    }
    //Valida condiciones de contraseña
    if(!password.match(regexMayuscula)||!password.match(regexMinuscula)||!password.match(regexNumero)||!password.match(regexCaracterEspecial) ){
        setErrorFor(getElementById('password').value,'Contraseña requiere mayúscula, minúscula, número y caracter especial.');
        sePudo=false;
    }else{
        setSuccesFor(getElementById('password').value);
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
    if(validarform()){
        alert("¡Registro Exitoso!, Ya puedes Surfear con nosotros");
        window.location.href="/signIn";
    }
});


