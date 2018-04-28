import React from 'react';
import { handleResponse } from '../../helpers';
import { API_URL } from '../../config';

class List extends React.Component {

    constructor(){
        super();

        this.state = {
            loading: false,
            currencies: [],
            error: null,
        };
    }

    componentDidMount(){
        this.setState({
            loading: true
        });

        fetch(`${API_URL}/cryptocurrencies?page=1&perPage=20`)
            .then(handleResponse)
            .then((data) => {
                this.setState({
                    currencies: data.currencies,
                    loading: false,
                });
            })
            .catch((error) => {
                this.setState({
                    error: error.errorMessage,
                    loading: false,
                });
            });
    }

    render(){
        console.log(this.state);
        return(
            <div>
                Up to date cryptocurrencies financial data
            </div>
        );
    }
}

export default List;