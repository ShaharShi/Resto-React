import React, {useContext, useEffect} from 'react';
import { MealsContext } from '../../../../App';
import Axios from 'axios';
import Meal from 'components/containers/ui-components/meal';
// import { MealsContext } from 'App';

export default function HomePage() {
    const [state, setState] = useContext(MealsContext)

    async function getMealsFromServer() {
        try {
            const { data } = await Axios.get('http://localhost:5200/meals')
            setState({...state, meals: [...state.meals, ...data]})
        } catch (error) {
            console.log(error)
        } finally {
            
        }
    }
    
    useEffect(()=> {
        getMealsFromServer()
    }, [])
    
    
    return (
    <div className={"row mt-5 justify-content-between"}>{
        state.meals.map((meal: any) => { return <Meal key={meal.name} actionTitle={'Add to Orders'} {...meal}/>})
    }</div>
    )
}