import React, {Component} from 'react';
import FinNews from './components/FinNews';

class News extends Component {
    render () { 
        return (
        <div className='news'>
            <div class="container-fluid">
                <div class = "row" >
                        <div class="col-sm-12" >
                            <div class="newsHeader" >
                                <FinNews />
                            </div>
                        </div>
                </div>
            </div>
        </div>
        )
    }
}

export default News
