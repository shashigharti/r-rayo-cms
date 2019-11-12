import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { apiService } from '../..';

/**
 * EditResource class
 *
 * Edit Page Wrapper (HOC). It makes the api call and passes the data to edit page.
 */
const EditResource = (WrappedComponent, apiEndpoint) => {
    return class extends Component {
        state = {
            loading: false,
            payload: []
        };
        componentDidMount() {
            this.setState({ loading: true });

            apiService.getById(this.props.match.params.id, apiEndpoint)
                .then(response => {
                    this.setState({
                        payload: response.data.data,
                        loading: false
                    });
                }).catch(err => {
                    console.log(err);
                });
        }
        render() {
            return <WrappedComponent {...this.props} {...this.state} />;
        }
    }
}

export default EditResource;