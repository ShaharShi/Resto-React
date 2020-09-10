import React from 'react';
import { IProps} from '../appRouter'
import { Link } from 'react-router-dom';

export default function LinksApp(props: IProps): any {
    const {routes} = props
    return (routes.sort((r1, r2) => r1.order - r2.order).filter((route: any) => route.isVisible ).map((route, i) => {
        const {path, name} = route
            return <Link key={i} to={path} className={'mr-4'}>{name}</Link>
    })
    )
}