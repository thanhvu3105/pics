import React from 'react';

class SearchBar extends React.Component{

    
    
    //user input 
    state = { term: ''};

    onFormSubmit = (event) => {
        event.preventDefault();   //prevent the browser from automatically refresh
        this.props.onSubmit(this.state.term);   
    }
   
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label> 
                        
                        <input type="text" placeholder="Search..."
                               value={this.state.term}   
                               onChange={(event) => this.setState({term: event.target.value})}>
                        </input>
                    </div>
                </form>
            </div>

        );
    }
}

export default SearchBar;