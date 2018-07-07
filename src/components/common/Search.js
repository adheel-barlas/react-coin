import React from 'react';
import './Search.css';

class Search extends React.Component {

    constructor(){
        super();

        this.state = {
            searchQuery: '',
            firstname: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
    }

    handleSubmit(event){
        event.preventDefault();
        
        console.log(this.state);
    }

    handleChange(event){
       const inputName = event.target.name;
       const inputValue = event.target.value;

        if(inputName === 'searchQuery'){
            this.setState({ searchQuery: inputValue })
        } 
        else if (inputName === 'firstname'){
            this.setState({ firstname: inputValue })
        }

    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input name="searchQuery" onChange={this.handleChange} />
                <input name="firstname" onChange={this.handleChange} />
                <button>Submit</button>
            </form>
        );
    }
}

export default Search;