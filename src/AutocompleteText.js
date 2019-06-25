import React from 'react';
import './AutocompleteText.css';


export default class AutocompleteText extends React.Component{
    constructor (props) {
        super (props);
        this.items = [
            'David',
            'Daniel',
            'Sara',
            'Jane',
        ];
        this.state = {
            suggestions: [], 
            text: '',

        };
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.items.sort().filter(v => regex.test(v));
        } 
            this.setState(() => ({ suggestions, text: value  }));
    }

    suggestionsSelected (value){
        this.setState(() => ({
            text: value,
            suggestion: [],
        }))


    }
      
    renderSuggestions () {
        const { suggestions } = this.state;
        if (suggestions.length === 0 ) {
            return null;
        }
        return (
            <ul>
                {suggestions.map((item) => <li onClick={() => this.suggestionsSelected(item)}>{item}</li>)}
            </ul>
        );
    }

    render () {
        const { text } = this.state;
        return (
            <div className="AutocompleteText">
                <input value={text} onChange={this.onTextChanged} type="text" />
               {this.renderSuggestions()}
            </div>
        )
    }
}



