import React, { Component } from 'react';
// import { links } from './data'
// import { Link } from 'react-router-dom';
// import MenuIcon from '@material-ui/icons/Menu';
import './Navtest.css'
import { menuitems } from './Menuitems'


class Navtest extends Component {
    state={clicked:false}
    handleClick=()=>{
        this.setState({clicked: !this.state.clicked})
    }



    render() {
        return (
            <nav className="navbarItems" id="home">
                <h1 className="navbar-logo">Cymark</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
                    {menuitems.map((item, index)=> {
                       return (
                            <li key={index}>
                                <a   className={item.cName}
                                href={item.url}>
                                    {item.text}
                                </a>
                            </li>
                        )
                       })}
                    
                </ul>
            </nav>
        );
    }
}



export default Navtest;
