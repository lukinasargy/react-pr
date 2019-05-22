import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {

    render() {
        let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, quae.";
        return (
            <div>
                <h3>{this.props.name} {this.props.age} years old added {this.props.user.name} to this page </h3>
                <p>{text}</p>
                <p>{this.props.user.name} hobbies : </p>
                <ul>
                    {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                </ul>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}
Home.propTypes = {
    name: PropTypes.string,
    name: PropTypes.string,
    name: PropTypes.string,
    children: PropTypes.element.isRequired,
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