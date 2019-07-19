import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Start from './pages/Start'; 
import Painel from './pages/Painel'; 
import { autenticado } from './auth';


const PrivateRoute = ({component: Component, ...rest}) => (

    <Route {...rest} render = {props => (
        autenticado() ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{pathname: '/', state: {from: props.location}}}/>
        )
    )}/>
);

const Routes = () => {
    return (
        <BrowserRouter> 
            <Switch>
                <Route exact path="/" component={Start} /> 
                <Route exact path="/painel" component={Painel} /> 
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;