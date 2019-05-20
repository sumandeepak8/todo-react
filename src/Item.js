import React, { Component } from "react";

class Item extends Component{
    constructor(props) {
        super(props);
        this.state = {
            content : props.content
        }
    }

    render() {
        return (
            <div>
                {this.state.content}
            </div>
        );
    }
}

export default Item;