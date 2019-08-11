import React from 'react';

class SearchBar extends React.Component{
    //this methods could be call whatever we want.
    //the only one that matters is the property inside the input element
    onInputChange(event){
        console.log(event.target.value);
    }



    //alternate way to handle events
    //using an arrow function inside jsx
    render(){
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={(e)=>console.log(e.target.value)} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;