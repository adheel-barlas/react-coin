import React from 'react';
import { API_URL } from '../../config';
import { handleResponse } from '../../helpers';
import './Search.css';

class Search extends React.Component {

    constructor(){
        super();

        this.state = {
            searchQuery: '',
        }

        this.handleChange = this.handleChange.bind(this);
        
    }

    handleChange(event){
       const inputName = event.target.name;
       const inputValue = event.target.value;

        this.setState({ searchQuery: inputValue})

        // If there is no search don't fetch a result
        if(!inputValue){
            return '';
        }

        fetch(`${API_URL}/autocomplete?searchQuery=${inputValue}`)
            .then(handleResponse)
            .then((result) => {
                console.log(result);
            });

    }

    render(){
        return(
            <form>
                <input onChange={this.handleChange} />
                <button>Submit</button>
            </form>
        );
    }
}

export default Search;