import React from 'react';
import { API_URL } from '../../config';
import Loading from '../common/Loading';
import { handleResponse } from '../../helpers';
import './Detail.css';

class Detail extends React.Component {

    constructor(){
        super();

        this.state = {
            currency: {},
            loading: false,
            error: null,
        };
    }

    componentDidMount(){
        const currencyId = this.props.match.params.id;
        
        fetch(`${API_URL}/cryptocurrencies/${currencyId}`)
            .then(handleResponse)
            .then((currency) => {
                this.setState({
                    loading: false,
                    error: null,
                    currency,
                });
            })
            .catch((error) => {
                this.setState({
                    loading: false,
                    error: error.errorMessage,
                });
            })
    }

    render(){
        const { loading, error, currency } = this.state;

        console.log(currency);

        // If state loading is set to true
        if(loading){
            return <div className="loading-container"><Loading /></div>
        }

        // If state error is set to true
        if(error){
            return <div className="error">{error}</div>
        }

        return(
            <div className="Detail">
                <h1>{currency.name}</h1> {currency.symbol}
            </div>
        );
    }
}

export default Detail;