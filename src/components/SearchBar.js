import React from 'react';

class SearchBar extends React.Component{
    state = {term: "hi there!"}

    /**
     * When enter button is pressed inside an input text, it runs the default action,
     * which is to submit the form. To prevent that, we'll use event.preventDefault
     */
    onFormSubmit(event){
        event.preventDefault();
        /**
         * next console log will throw an error
         * explanation of this error is given on the course
         * it's fixed by using arrow function instead.
         */
        console.log(this.state.term);
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