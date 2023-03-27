import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './i18n';
import Home from './components/Home';
import FinNews from './components/FinNews';
import InvResources from './components/InvResources';
import Book from './components/Book';
import Port from './components/Port';
import Contact from './components/Contact';

class Navbar extends Component {
    render () { 
        return (
                <div className='myNavBar'>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"/>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
                    <div className='theNavBar'>
                        <ul>
                            <li><Link to="/navNav"><Home /></Link></li>
                            <li><Link to="/navNews"><FinNews /></Link></li>
                            <li><Link to="/navResources"><InvResources /></Link></li>
                            <li><Link to="/navAppointment"><Book /></Link></li>
                            <li><Link to="/navPortfolio"><Port /></Link></li>
                            <li><Link to="/navFooter"><Contact /></Link></li>
                        </ul>
                    </div>
                </div>
        )
    }
}

export default Navbar
