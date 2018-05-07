import React from 'react';
import { handleResponse } from '../../helpers';
import { API_URL } from '../../config';
import { renderChangePercent } from '../../helpers';
import Loading from '../common/Loading';
import Table from '../list/Table';
import './Table.css';
import Pagination from './Pagination';

class List extends React.Component {

    constructor(){
        super();

        this.state = {
            loading: false,
            currencies: [],
            error: null,
            totalPages: 0,
            page: 1,
        };
    }

    componentDidMount(){
        this.fetchCurrencies();
    }

    fetchCurrencies(){
        this.setState({
            loading: true
        });

        const { page } = this.state;

        fetch(`${API_URL}/cryptocurrencies?page=${page}&perPage=20`)
            .then(handleResponse)
            .then((data) => {
                const { currencies, totalPages } = data;
                this.setState({
                    currencies,
                    totalPages,
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

    handlePaginationClick = (direction) =>{
        let nextPage = this.state.page;

        // Increment next page 
        nextPage = direction === 'next' ? nextPage + 1 : nextPage -1;

        this.setState({ page: nextPage }, () =>{
            // Fetch currencies when page state has changed
            this.fetchCurrencies();
        });
    }

    render(){
    const { loading, error, currencies, totalPages, page } = this.state;

    if(loading){
        return <div className="loading-container"><Loading /></div>
    }

    if(loading){
        return <div className="error">{error}</div>
    }
    
    return (
      <div>
        <Table 
        currencies={currencies}
        renderChangePercent = {renderChangePercent} 
        />

        <Pagination 
        totalPages = {totalPages}
        page = {page}
        handlePaginationClick = {this.handlePaginationClick}
        />
      </div>
    );
  }
}

export default List;