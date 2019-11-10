import React, { Component } from 'react';
import { apiService } from '..';

// Ref: The React Cookbook: Advanced Recipes to Level Up Your Next App

class Resource extends Component {
    state = {
        loading: false,
        payload: []
    }
    componentDidMount() {
        this.setState({ loading: true });
        const path = process.env.API_ENDPOINT + '/' + this.props.path
        console.log(apiService);
        let getData = apiService.get(path);
        getData.then(response => {
            this.setState({
                payload: response.data,
                loading: false
            })
        });
        getData.catch(err => {
            console.log(err);
        })

    }
    render() {
        // render is a function that is being called; we pass state information
        return this.props.render(this.state);
    }

}

export default Resource;