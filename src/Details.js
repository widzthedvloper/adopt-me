/* eslint-disable react/prop-types */
import { Component } from "react";
import { withRouter } from "react-router-dom";

class Details extends Component {
    constructor () {
        super();

        this.state = { loading: true };
    }

    componentDidMount () {
        fetch(`http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`)
        .then(res => res.json())
        .then(data => this.setState(Object.assign({ loading: false, }, data.pets[0])))
    }

    render() {
        const {animal, breed, city, state, description, name} = this.state;
        return (
            <div className="details">
                <h1>{name}</h1>
                <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
                <button>Adopt {name}</button>
                <p>{description}</p>
            </div>
        )
    }
}

export default withRouter(Details);