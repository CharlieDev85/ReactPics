import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(term) {
        //console.log(term);
        axios.get(
            'https://api.unsplash.com/search/photos', {
                params: { query: term },
                headers: { Authorization: 'Client-ID 131bf192d653ab58b1aaf06a68c1ca0e6b416079496740606c15131cfa40bb26' }
            }
        ).then(
            /**
             * we cn use this .then method to be able to get some console.log
            */
            (response) => {
                console.log(response.data.results);
            }
        );
    }

    render() {
        return (
            <div className="ui conteiner" style={{ marginTop: '10px' }}>
                <SearchBar runMeWhenUserSubmits={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;

 //npm install --save axios
/**
 * it was used to install axios
 * it's used to get data from an API
 */