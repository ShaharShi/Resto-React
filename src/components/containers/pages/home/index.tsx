import React, {useContext, useEffect} from 'react';
import { MealsContext } from '../../../../App';
import Axios from 'axios';
import Meal from 'components/containers/ui-components/meal';
// import { MealsContext } from 'App';

export default function HomePage() {
    const [globalState, setGlobalState] = useContext(MealsContext)

    async function getMealsFromServer() {
        try {
            const { data } = await Axios.get('http://localhost:5200/meals')
            setGlobalState({...globalState, meals: [...globalState.meals, ...data]})
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(()=> {
        if(!globalState.meals.length) {
            getMealsFromServer()
        }
    }, [])

    return (
    <div className={"row mt-5 justify-content-between"}>{
        globalState.meals.map((meal: any, i: number) => { return <Meal key={meal.name + i} {...meal} actionTitle={'Add to Orders'}/>})
    }</div>
    )
}