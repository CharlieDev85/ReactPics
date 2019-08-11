import React from 'react';

class SearchBar extends React.Component{
    //this methods could be call whatever we want.
    //the only one that matters is the property inside the input element
    onInputChange(event){
        console.log(event.target.value);
    }

    onInputClick(event){
        console.log("input was clicked");
    }

    //we don't place "()" for event changes
    render(){
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={this.onInputChange} onClick={this.onInputClick}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;