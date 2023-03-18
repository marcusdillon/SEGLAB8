import React, {Component} from 'react';

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
                        <li><a class="active" href="#navNav">Home</a></li>
                        <li><a href="#navNews">Financal News</a></li>
                        <li><a href="#navResources">Investing Resources</a></li>
                        <li><a href="#navAppointment">Book an Appointment</a></li>
                        <li><a href="#navPortfolio">Portoflio</a></li>
                        <li><a href="#navFooter">Contact</a></li>
                        
                        </ul>
                </div>
            </div>
        )
    }
}

export default Navbar