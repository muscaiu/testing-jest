import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'state in Header'
        }
    }

    render() {
        return (
            <p>{this.state.name}</p>
        )
    }
}

export default Header
