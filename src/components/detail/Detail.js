import React from 'react';
import { API_URL } from '../../config';
import { handleResponse } from '../../helpers';
import './Detail.css';

class Detail extends React.Component {

    componentDidMount(){
        const currencyId = this.props.match.params.id;
        
        fetch(`${API_URL}/cryptocurrencies/${currencyId}`)
            .then(this.handleResponse)
            .then((currency) => {
                console.log('currency', currency);
            })
            .catch((error) => {
                console.log('error', error);
            })
    }

    render(){
        return(
            <div>
                Detail
            </div>
        );
    }
}

export default Detail;