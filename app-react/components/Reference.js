import React, { Component } from "react";

class Reference extends Component {
    constructor(props) {
        super(props);
        this.callRef = null;
        this.setInputRef = element => {
            this.callRef = element;
        }
        this.handleSubmit = () => {
            if (this.callRef)
                this.callRef.focus();
        }
    }

    componentDidMount() {
        this.handleSubmit();
    }

    render() {
        return(
            <div>
                <h2>Adding Ref to DOM elements</h2>
                <input type="text" className="form-control" ref={this.setInputRef}/>
                <input type="button" className="btn btn-primary" value="Focused text Input" onClick={this.handleSubmit}/>
            </div>
        );
    }
}

export default Reference;
