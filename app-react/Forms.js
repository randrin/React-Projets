import React, { Component } from "react";

class Forms extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isSelected: true,
            title: 'My First Form Reatc JS'
        };
        this.submitForm = this.submitForm.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
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

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <h1>{this.state.title}</h1>
                <label>Name: </label>
                <input type="text" value={this.state.value} onChange={this.onChangeValue} />
                <br/>
                <label>Passed examen ? </label>
                <input type="checkbox" checked={this.state.isSelected} onChange={this.onChangeValue} />
                <br/>
                <input type="submit" value="Submit Form" />
            </form>
        );
    }
}

export default Forms;
