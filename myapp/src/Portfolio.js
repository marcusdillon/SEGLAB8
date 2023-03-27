import React, {Component} from 'react';
import Port from './components/Port';

class Portoflio extends Component {
    render () { 
        return (
        <div className='news'>
            <div class="container-fluid">
                <div class = "row" >
                        <div class="col-sm-12" >
                            <div class="portfolioHeader" >
                                <Port />
                            </div>
                        </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Portoflio
