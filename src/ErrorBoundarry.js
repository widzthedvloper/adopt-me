/* eslint-disable react/prop-types */
/* eslint-disable import/named */
/* eslint-disable import/namespace */
import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
    state = { hasError: false, redirect: false }
    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.error(' ErrorBoundary caught an error', error, info);
        if(this.state.hasError) {
            setTimeout(() => this.setState({redirect: true}), 5000)
        }
    }

    render () {

        if(this.state.redirect) {
            return <Redirect to="/" />
        }else if(this.state.hasError) {
            return(
                <h2>
                    This listing has an error. <Link to="/">Click here</Link> to go back to the home page.
                </h2>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;