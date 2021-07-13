import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route} from 'react-router-dom';
import Loggin from './components/Loggin';
// import {CardProduct} from './components/CardProduct'
import DashboardScreen from './components/DashboardScreen';


export const AppRouter = () => {
    return(
        <Router>
            <Switch>
                <Route path={'/'} exact component={Loggin} />
                <Route path={'/dashboard'} exact component={DashboardScreen}/>
            </Switch>
        </Router>
    )
}

