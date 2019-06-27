import React from 'react';
import './AutocompleteText.css';
import './utils/jsonp'


export default class AutocompleteText extends React.Component{
   
        state = {
            suggestions: [], 
            text: '',
            option: 0,
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

    handleKeyPress = (e) => {
        console.dir(e.key)
        //listener method to determine value of key pressed 
        if (e.key === 'ArrowDown' && this.state.suggestions.length - 1 != this.state.option) {
            this.setState({option: this.state.option + 1 }) 
        }
        else if (e.key === 'ArrowUp' && this.state.option != 0) {
            this.setState({option: this.state.option - 1 })
        }
        else if (e.key === 'Enter') {
            const { url } = this.state.suggestions[this.state.option];
            this.setState(() => ({
            text: '',
            suggestions: [],
            }), () => window.open(url))
        }
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
                    <li className={this.state.option == idx ? "selectedOption" : ''} key={item.id + idx} data-url={item.url} onClick={this.suggestionsSelected}>
                        {item.name}
                    </li>)}
            </ul>
        );
    }

    render () {
        const { text } = this.state
        return (
            <div className="AutocompleteText">
                <input value={text}  onChange={this.onTextChanged} onKeyDown={this.handleKeyPress} type="text" placeholder=" Enter a College Name or Location to Search" />
               {this.renderSuggestions()}
            </div>
        )
    }
}




