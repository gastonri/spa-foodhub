import './App.scss';
import { LOGIN_PATH } from './paths';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import routes from './routes';

const App = () => {
    return (
        <div className="App">
            <a href={LOGIN_PATH}>Login</a>
            {routing()}
        </div>
    );
};

const routing = () => {
    return <Router>{renderRoutes()}</Router>;
};

const renderRoutes = () => {
    return routes.map((route) => {
        return (
            <Route
                key={route.path}
                path={route.path}
                component={route.component}
                exact={route.exact}
            />
        );
    });
};

export default App;
