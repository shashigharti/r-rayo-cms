import React, { Component } from 'react';
import Axios from "axios";

// Reference 
// The React Cookbook: Advanced Recipes to Level Up Your Next App


class Resource extends Component {
    state = {
        loading: false,
        payload: []
    }
    componentDidMount() {
        this.setState({ loading: true });
        const path = process.env.API_ENDPOINT + '/' + this.props.path
        return [];
        // Axios.get(path).then(res => {
        //     this.setState({
        //         payload: res.data,
        //         loading: false
        //     })
        // });
    }
    render() {
        //render is a function that is being called; we pass state information
        return this.props.render(this.state);
    }

}

export default Resource;