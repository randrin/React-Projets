import React, { Component } from "react";

class Forms extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isSelected: true,
            title: 'My First Form Reatc JS',
            companyName: ''
        };
        this.submitForm = this.submitForm.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.compagnyText = this.compagnyText.bind(this);
    }

    submitForm (event) {
        event.preventDefault();
        alert('Value Input is: '+ this.state.value);
    }
    onChangeValue (e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({[name]: value});
    }

    compagnyText(event) {
        this.setState({
            companyName: event.target.value
        });
    }

    render() {
        return (
            <div>
                <label htmlFor="name">Enter you companyName Name: </label>
                <input type="text" id="companyName" onChange={this.compagnyText} />
                <h4>You are enter: {this.state.companyName}</h4>
            </div>
        );
    }
}

export default Forms;
