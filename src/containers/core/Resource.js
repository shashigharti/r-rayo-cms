// Reference 
// The React Cookbook: Advanced Recipes to Level Up Your Next App


class Resource extends Component {
    state = {
        loading: false,
        payload: []
    }

    render() {
        return this.props.render(this.state);
    }

}