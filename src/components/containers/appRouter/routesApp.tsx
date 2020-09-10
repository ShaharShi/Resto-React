import React from 'react';
import {IRoute} from '../appRouter'
import { Route } from 'react-router-dom';


interface IProps {
    routes: Array<IRoute>
}
export default function RoutesApp(props: IProps) {
    const {routes} = props
    return (
        <>{routes.map((route: any) => <Route component={route.component} path={route.path} />)}</>
    )
}