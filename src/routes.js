import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Start from './pages/Start';

/*

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

*/
const Routes = () => {
    return (
        <BrowserRouter> 
            <Switch>
                <Route exact path="/" component={Start} /> 
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;