import { Component } from "react";
import { Link, Navigate } from "react-router-dom";


class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, redirect: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo);
    }

    componentDidUpdate() {
        if (this.state.hasError) {
            setTimeout(() => this.setState({ redirect: true }), 5000)
        }
    }

    render() {
        if (this.state.redirect) {
            return <Navigate to="/" />
        }
        else
            if (this.state.hasError) {
                return (
                    <h1>Something went wrong.{" "}
                        <Link to="/">Go Home</Link>
                    </h1>
                );
            }

        return this.props.children;
    }
}

export default ErrorBoundary