import React, { Component } from 'react';
import AutocompleteText from './AutocompleteText';

class SearchPage extends Component {
    jsonpURL = 'http://niche-recruiting-autocomplete.appspot.com/search/'
    render() {
        return <AutocompleteText jsonpURL={this.jsonpURL} />
    }
}

export default SearchPage;