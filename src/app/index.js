import React, { Component } from"react";
import {render}  from "react-dom";
import {Header} from './partials/header.js';
import {Footer} from './partials/footer.js';



class App extends Component{
    render(){
        return(
            <div>
                <Header/>

                <Footer/>
            </div>
        )
    }

}


render(<App/>, document.getElementById('app'));




