import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';
import findSuggestions from '../../redux/actions/findSuggestions';
import findResults from '../../redux/actions/findResults';
 import {getAll} from "../../data/api";

class IAppBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            books: [],
        };

        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeSelection = this.onChangeSelection.bind(this);
    }

    onChangeText(text) {
        this.setState({ text });

        this.props.findSuggestions(text);
    }

    componentDidMount() {
        getAll();
        //let movies=[]
        // getAll().then( (response) =>{
        //     console.log("response=> ",response)
        //     movies = response.results
        //     console.log("movies=>", movies)
        // } );
      }

    onChangeSelection(text) {
        const {
            findResults,
            match,
            history,
        } = this.props;

        this.setState({ text });

        findResults(text);

        if (match.path !== '/results') {
            history.push('/results');
        }
    }

    render() {
        const {
            text,
        } = this.state;

        const {
            suggestions,
        } = this.props;

        return (
            <Page
                text={text}
                suggestions={suggestions}
                onChangeText={this.onChangeText}
                onChangeSelection={this.onChangeSelection}
            />
        );
    }
}

const mapStateToProps = state => ({
    suggestions: state.suggestions,
});

const mapDispatchToProps = {
    findSuggestions,
    findResults,
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(IAppBar)
);
