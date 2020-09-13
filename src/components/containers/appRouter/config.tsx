import React from 'react';
import HomePage from '../pages/home';
import AboutPage from '../pages/about';
import OrdersPage from '../pages/orders';
import ReportsPage from '../pages/reports';
import {IRoute} from '../appRouter';
import MealPage from '../pages/meal-page';
import ConfigurationPage from '../pages/configuration';
import {Gear} from 'react-bootstrap-icons'

export const routesConfiguration: Array<IRoute> = [
    { order: 0, component: HomePage, path: "/", name: "Home", exact: true, isVisible: true },
    { order: 3, component: AboutPage, path: "/about", name: "About", isVisible: true },
    { order: 1, component: OrdersPage, path: "/orders", name: "Orders", isVisible: true },
    { order: 2, component: ReportsPage, path: "/reports", name: "Reports", isVisible: true },
    { order: 4, component: MealPage, path: "/newmeal", name: "Add New Meal", isVisible: true },
    { order: 5, component: ConfigurationPage, path: "/configuration", name: <Gear size={25}/>, isVisible: true },
]