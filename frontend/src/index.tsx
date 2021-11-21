import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import {
    PublicNavigation,
    HomePage,
    AboutPage,
    PollPage,
} from '~/components';

const AppWrapper = styled.div`
    font-family: 'Roboto', sans-serif;
    max-width: 1024px;
    margin: 0 auto;
`;

const Routing = () => {
    return (
        <Router>
            <PublicNavigation />
            <Switch>
                <Route path="/about">
                    <AboutPage />
                </Route>
                <Route exact path="/poll/:id" children={<PollPage />} />
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Redirect from="/home" to="/" />
            </Switch>
        </Router>
    )
}

const App = () => {
    return (
        <AppWrapper>
            <Routing />
        </AppWrapper>
    )
}

ReactDOM.render(<App />, document.getElementById('app-root'));
