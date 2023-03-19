import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
                            <li><Link to="/navNav">Home</Link></li>
                            <li><Link to="/navNews">Financal News</Link></li>
                            <li><Link to="/navResources">Investing Resources</Link></li>
                            <li><Link to="/navAppointment">Book an Appointment</Link></li>
                            <li><Link to="/navPortfolio">Portoflio</Link></li>
                            <li><Link to="/navFooter">Contact</Link></li>
                        </ul>
                    </div>
                </div>
        )
    }
}

export default Navbar
