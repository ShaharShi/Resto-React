import React from 'react';
import { routesConfiguration } from './config'
import { Switch } from 'react-router-dom';
import RoutesApp from './routesApp';

export interface IRoute {
    component: any,
    path: string,
    name?: string | any,
    exact?: boolean,
    isVisible: boolean,
    order: number,
}
export interface IProps {
    routes: Array<IRoute>
}

export default function AppRouter() {
    return (
        <Switch>
           <RoutesApp routes={routesConfiguration} />
        </Switch>
    )
}