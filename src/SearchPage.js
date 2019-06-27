import React, { Component } from 'react';
import AutocompleteText from './AutocompleteText';
import './AutocompleteText.css';



class SearchPage extends Component {
    jsonpURL = 'http://niche-recruiting-autocomplete.appspot.com/search/'
    render() {
        return (
        <div>
        <div className="header">Thirst for knowledge?</div>
        <AutocompleteText jsonpURL={this.jsonpURL} />
        </div>
        )}
}

export default SearchPage;