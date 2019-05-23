import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {
    constructor (props) {
        super();
        this.age = props.age;
    }
    onMakeOlder() {
        this.age += 3;
        console.log(this.age);
    }

    render() {
        return (
            <div>
                <h3>{this.props.name} {this.age} years old  </h3>
                <hr/>
                <button onClick={() => this.onMakeOlder()} className={"btn btn-primary"}>Make me older!</button>
            </div>
        );
    }
}
Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
}

/*function sayHi(who) {
    if (Array.isArray(who)) {
        who.forEach(sayHi)
    } else {
        document.write('<h1>Hello, ' + who + '</h1>');
    }
}*/
// var who = window.prompt('Your name?', undefined);
// sayHi(who);