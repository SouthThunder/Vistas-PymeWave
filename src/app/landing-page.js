import React, { Component } from"react";
import {render}  from "react-dom";
import {Header} from './partials/header.js';
import {Footer} from './partials/footer.js';
import {Home} from './partials/home.js';


class LandingPage extends Component{
    render(){
        return(
            <div>
                <Header/>
                    <Home/>
                <Footer/>
            </div>
        )
    }
}


render(<LandingPage/>, document.getElementById('landing-page'));



