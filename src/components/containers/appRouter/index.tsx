import React from 'react';
import HomePage from '../pages/home';
import AboutPage from '../pages/about';
import OrdersPage from '../pages/orders';
import ReportsPage from '../pages/reports';
import { Switch, Route } from 'react-router-dom';
import RoutesApp from './routesApp';


export interface IRoute {
    component: any,
    path: string,
    name?: string,
    exact?: boolean,
    isVisible: boolean,
    order: number,
}

const routesConfiguration: Array<IRoute> = [
    { order: 0, component: HomePage, path: "/", name: "Home", exact: true, isVisible: true },
    { order: 1, component: AboutPage, path: "/about", name: "About", isVisible: true },
    { order: 2, component: OrdersPage, path: "/orders", name: "Orders", isVisible: true },
    { order: 3, component: ReportsPage, path: "/reports", name: "Reports", isVisible: true },
]

export default function AppRouter() {
    return (
        <Switch>
           <RoutesApp routes={routesConfiguration} />
        </Switch>
    )
}