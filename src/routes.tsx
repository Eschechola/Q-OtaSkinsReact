import React, { ReactElement } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/main';

const Routes = (): ReactElement => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;