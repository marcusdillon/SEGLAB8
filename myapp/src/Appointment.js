import React, {Component} from 'react';
import Book from './components/Book';

class Appointment extends Component {
    render () { 
        return (
        <div className='news'>
            <div class="container-fluid">
                <div class = "row" >
                        <div class="col-sm-12" >
                            <div class="appointmentHeader" >
                                <Book />
                            </div>
                        </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Appointment
