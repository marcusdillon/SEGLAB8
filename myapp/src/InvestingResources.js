import React, {Component} from 'react';
import InvResources from './components/InvResources';

class InvestingResources extends Component {
    render () { 
        return (
        <div className='investingResources'>
            <div class="container-fluid">
                <div class = "row" >
                        <div class="col-sm-12" >
                            <div class="resourcesHeader" >
                                <InvResources />
                            </div>
                        </div>
                </div>
            </div>
        </div>
        )
    }
}

export default InvestingResources
