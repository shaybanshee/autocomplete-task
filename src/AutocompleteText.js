import React from 'react';
import './AutocompleteText.css';
import './utils/jsonp'


export default class AutocompleteText extends React.Component{
    state = {
        suggestions: [], 
            text: '',
    }

    componentWillMount(){
           
    }

    onData = (response) => {
        this.setState({ suggestions: response.results }, () => this.isLoading = false)
    }
    
    requestSuggestions() {
        const { JSONPUtil } = window
        const { jsonpURL } = this.props
        const { text } = this.state

        if (text.length > 1) {
            JSONPUtil.LoadJSONP(`${jsonpURL}?query=${text}&sid=${Math.random()}`, this.onData)
        } else {
            this.setState({ suggestions: [] })
        }
    }


    onTextChanged = (e) => {
        const value = e.target.value;
        this.setState({ text: value }, this.requestSuggestions)        
    }

    suggestionsSelected = (e) => {
        const { url } = e.target.dataset
        this.setState(() => ({
            text: '',
            suggestions: [],
        }), () => window.open(url))
    }
      
    renderSuggestions () {
        const { suggestions } = this.state;
        if (suggestions.length === 0 ) {
            return null;
        }
        return (
            <ul>
                {suggestions.map((item, idx) => 
                    <li key={item.id + idx} data-url={item.url} onClick={this.suggestionsSelected}>
                        {item.name}
                    </li>)}
            </ul>
        );
    }

    render () {
        const { text } = this.state
        return (
            <div className="AutocompleteText">
                <input value={text}  onChange={this.onTextChanged} type="text" />
               {this.renderSuggestions()}
            </div>
        )
    }
}



