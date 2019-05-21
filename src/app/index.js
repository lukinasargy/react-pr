import React from "react";
import { render } from "react-dom";

import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {Footer} from "./components/Footer";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
}
render(<App/>, window.document.getElementById("app"));


/*function sayHi(who) {
    if (Array.isArray(who)) {
        who.forEach(sayHi)
    } else {
        document.write('<h1>Hello, ' + who + '</h1>');
    }
}
var who = window.prompt('Your name?', undefined);
sayHi(who); */


