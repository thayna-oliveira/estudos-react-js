import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Start from './components/Start';
import Header from './components/Header';

const Routes = () => {
    return (
        <BrowserRouter> 
            <Header/>
            <Switch>

                <Route exact path="/" component={Start} /> 
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;