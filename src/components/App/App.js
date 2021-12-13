import React from 'react';
import Results from '../Results/Results';
import NameCard from '../NameCard/NameCard';
import SearchBox from '../search/search';
import Header from './../Header/header';

import './App.css';

const name = require('@rstacruz/startup-name-generator');


class App extends React.Component {
    state = {
        headerText: "Name It!",
        headerExpanded: true,
        suggestedNames: [],
    };

    handleInputChange = (inputText) => {

        //console.log('Input text - ', inputText);
        this.setState({ headerExpanded: !inputText, suggestedNames: name(inputText) });
    };

    render() {
        return (
            <div>
                <Header headerExpanded={this.state.headerExpanded}
                    headTitle={this.state.headerText} />
                <SearchBox handleInputChange={this.handleInputChange} />
                <Results suggestedNames={this.state.suggestedNames} />
                <NameCard />
            </div>
        );
    }
}

export default App;