import React, {useContext} from 'react';
import { MealsContext } from '../../../../App';
// import { MealsContext } from 'App';

export default function HomePage() {
    const [state, setState] = useContext(MealsContext)
    
    return (
    <div>Home</div>
    )
}