const form= document.getElementById("form");
function dataValidation(){
    var login=document.getElementById('login_user').value;
    var pass=document.getElementById('login_pass').value;
    var Sepudo=true;
    if(login==null||login==''){
        setErrorFor(document.getElementById('login_user'),'Por favor, Ingrese una dirección de correo válida');
      Sepudo=false;
    }else{
        setSuccesFor(document.getElementById('login_user'));
    }
    if(pass==null||login==''){
        setErrorFor(document.getElementById('login_pass'),'Por favor, Ingrese la contraseña');
       
      Sepudo=false;
    }else{
        setSuccesFor(document.getElementById('login_pass'));
    }

    if(Sepudo==false){
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
    console.log("adada");
    if(dataValidation()){
        alert("Inicio de sesión exitoso, Ya puedes navegar con nosotros");
        form.submit();
    }
});
