import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    refreshPage = () => {
        window.location.reload();
    }
    render() { 
        return (
            <header className="header">
                <h1 
                className="header__title"
                onClick={this.refreshPage}>
                    MustSee
                </h1>
            </header>
        );
    }
}
 
export default Header;