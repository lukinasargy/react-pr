import React from "react";
import { render } from "react-dom";

import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {Footer} from "./components/Footer";

class App extends React.Component {
    render() {
        const user = {
            name: "Lily",
            hobbies: ["sports", "pc"]
        };
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"Jhon"} age={18} user={user}>
                            <p>This is a paragraph!</p>
                        </Home>
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





