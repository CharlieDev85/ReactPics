import React from 'react';
//npm install --save axios

class SearchBar extends React.Component{
    state = {term: "hi there!"}

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.runMeWhenUserSubmits(this.state.term);
        //console.log(this.state.term);
    }

    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                        type="text" 
                        value={this.state.term}
                        onChange={(e) => this.setState({ term: e.target.value.toUpperCase() })} 
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;