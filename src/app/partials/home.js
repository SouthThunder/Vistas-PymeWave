import React, { Component } from"react";
import '../../public/stylesheets/Home.css';

export class Home extends React.Component{
    render(){
        return(
            <main>
        <picture>
            <img src="/images/Backgrounds/home_main_img.jpg" alt="main"/>
        </picture>
        <div class="center">
            <h1 id="promt">Join The Magic</h1>
            <form class="search" id="form-search">
                <div class="input-container"  data-error="Please do not leave this blank">
                    <input type="search" placeholder="Search here..." id="input-search"/>
                </div>
                <div class="button-container">
                    <button type="button">Search</button>
                </div>
              </form>   
        </div>
    
        <div class="feed">
            <div class="arrow_left">
                <button><img src="https://cdn-icons-png.flaticon.com/512/4028/4028550.png"/></button>
            </div>
            <div class="arrow_right">
                <button><img src="https://cdn-icons-png.flaticon.com/512/1549/1549612.png"/></button>
            </div>
            <div class="scrollport">
                <div class="indicators">
                    <h1>¿No estás seguro de lo que buscas?</h1>
                    <h2>Surfea en nuestro mar de opciones</h2>
                </div>
                <div class="container"><img src="//placehold.it/300x400" alt=""/></div>
                <div class="container"><img src="//placehold.it/300x400" alt=""/></div>
                <div class="container"><img src="//placehold.it/300x400" alt=""/></div>
                <div class="container"><img src="//placehold.it/300x400" alt=""/></div>
                <div class="container"><img src="//placehold.it/300x400" alt=""/></div>
                <div class="container"><img src="//placehold.it/300x400" alt=""/></div>
                <div class="container"><img src="//placehold.it/300x400" alt=""/></div>
                <div class="container"><img src="//placehold.it/300x400" alt=""/></div>
                <div class="container"><img src="//placehold.it/300x400" alt=""/></div>
                <div class="container"><img src="//placehold.it/300x400" alt=""/></div>
                <div class="container"><img src="//placehold.it/300x400" alt=""/></div>
            </div>
        </div>
        
    </main>
        )
    }
}