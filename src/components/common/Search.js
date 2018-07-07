import React from 'react';
import './Search.css';

class Search extends React.Component {

    constructor(){
        super();

        this.handleSubmit = this.handleSubmit.bind(this);

        
    }

    handleSubmit(event){
        event.preventDefault();
        
        console.log(this.searchQuery.value);
        console.log(this.firstname.value);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input ref={(input) => this.searchQuery = input} />
                <input ref={(input) => this.firstname = input} />
                <button>Submit</button>
            </form>
        );
    }
}

export default Search;