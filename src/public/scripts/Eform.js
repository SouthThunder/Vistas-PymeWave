
const form= document.getElementById("form");
function validarform() {
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
        alert("Por favor, Ingrese una dirección de correo válida");
        return false;
    }
    //Valida que el telefono tenga únicamente números
    if(!telefono.match(regexNumeros)){
        alert("El telefono debe contener únicamente números.");
        return false;
    }
    //Valida que el telefono sea de 10 numeros(En colombia los numeros son de 10 números)
    if(telefono.length!=10){
        alert("Por favor, Ingrese un télefono válido.");
        return false;
    }
    //Valida que la contraseña tenga más de 8 caracteres
    if(password.length<8){
        alert("La contraseña debe contener mínimo 8 caracteres");
        return false;
    }
    //Valida condiciones de contraseña
    if(!password.match(regexMayuscula)||!password.match(regexMinuscula)||!password.match(regexNumero)||!password.match(regexCaracterEspecial) ){
        alert("La contraseña debe contener almenos una mayuscula, una minuscula, un numero y un caracter especial")
        return false;
    }


    return true;
}
form.addEventListener("submit",e => {
    e.preventDefault(); 
    if(validarform()){
        alert("¡Registro Exitoso!, Ya puedes navegar con nosotros");
        window.location.href="/signIn";
    }
});



