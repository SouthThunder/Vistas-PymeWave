import React, { Component } from"react";
import {render}  from "react-dom";
import '../../public/stylesheets/Sign_in.css';


export class SignIn extends Component{
    render(){
        return(
            <div>
                <main>
                    <div class="holder">
                        <div class="logo">
                            <picture>
                                <a href="/"><img src="/images/logos/PymeWaveSinFondo.png"/></a>
                            </picture>
                        </div>
                        <div class="form">
                            <section>   
                                <h1>Iniciar sesion</h1>
                            </section>
                            <div class="inputbox">
                                <ion-icon name="mail-outline"></ion-icon>
                                <input type="text" id="login_user" required/>                   
                                <label for="">Correo</label>
                            </div>
                            <div class="inputbox">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input type="password" id="login_pass" required/>
                                <label for="">Contraseña</label>
                            </div>
                            <br/>
                            <div class="enter">
                                <button type="submit">Ingresar</button>
                            </div>
                            <div class="not-account">
                                <p>¿No tienes una cuenta? <a href="/signUp">Registrate</a></p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }

}
