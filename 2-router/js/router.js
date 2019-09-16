import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Zhubaile from './zhubaile';
import Zhuyanyan from './zhuyanyan';
import Popup from './Popup';
//import UserLayout from './xianshi';


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/"  component={Popup}/>
            <Route exact path="/Zhubaile"  component={Zhubaile}/>
            <Route exact path="/Zhuyanyan"  component={Zhuyanyan}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;

/*
const routerConfig = [
    {
        path: '/Zhubaile',
        layout: UserLayout,
        component: Zhubaile,
    },
    {
        path: '/Zhuyanyan',
        layout: UserLayout,
        component: Zhuyanyan,
    },
];

export default routerConfig;*/
