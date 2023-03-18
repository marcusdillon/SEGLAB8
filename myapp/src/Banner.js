import React, {Component} from 'react';
import logo from './logo.png';

class Banner extends Component {
    render () { 
        return (
                <div className='news'>
                <header className="App-header" >
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"/>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>  
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-2">
                            <div class = "mylogo" > 
                                <img class="img-responsive" src={logo} width="175" alt='logo'/>
                            </div>
                        </div>
                        <div class="col-lg-10">
                            <div class = "banner" > 
                                <p>Big Stonks Investing </p>
                            </div>
                        </div>
                    </div>
                </div>
                </header>
               
                




            </div>
        )
    }
}

export default Banner