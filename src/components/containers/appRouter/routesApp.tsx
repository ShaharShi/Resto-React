import React from 'react';
import {IRoute, IProps} from '../appRouter'
import { Route } from 'react-router-dom';


export default function RoutesApp(props: IProps) {
    const {routes} = props
    
    return (
        <>{routes.map((route: IRoute, i) => <Route key={i} {...route} />)}</>
    )
}