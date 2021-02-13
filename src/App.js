import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Routes from './Routes';
import ErrorBoundary from "./ErrorBoundary";

class App extends React.Component {
    render() {
        return (
            <ErrorBoundary>
                <Routes />
            </ErrorBoundary>
        );
    }
}

export default App;
