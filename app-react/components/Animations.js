import React, { Component } from "react";
import { CSSTransitionGroup } from 'react-transition-group';

class Animations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                'ReactJS',
                'JavaScript',
                'Angular',
                'VueJs',
                'Java/J2ee'
            ]
        }
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {
        let items = this.state.items.concat([
            prompt('Insert new item ....')
        ]);
        this.setState({items:items});
    }

    handleRemove(item) {
        let items = this.state.items.slice();
        items.splice(item, 1);
        this.setState({items:items});
    }

    render() {
        const listItems = this.state.items.map((item, i) => (
        <div key={item} onClick={this.handleRemove(i)}>
            {item}
        </div>
        ));

        return(
            <div>
                <h1>Example Animation</h1>
                <button className="btn btn-primary" onClick={this.handleAdd}> Add Item</button>
                <CSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={800}
                    transitionLeaveTimeout={600}>
                    {listItems}
                </CSSTransitionGroup>
            </div>
        );
    }
}

export default Animations;
