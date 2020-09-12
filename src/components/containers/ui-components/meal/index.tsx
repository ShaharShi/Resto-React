import React, { useContext, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { MealsContext } from 'App';
import Rank from '../rank';

export interface IMeal {
    name: string;
    description: string;
    image: string;
    action: Function;
    actionTitle: string;
    cls: string
    rating: number
}


export default function Meal(props: IMeal) {
    const [globalState, setGlobalState] = useContext(MealsContext)
    
    function addMeal() {
        setGlobalState({ ...globalState, orders: [...globalState.orders, props] })
    }
    return (
        <Card className="col-lg-4 mb-5">
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Rank stars={props.rating}/>
                <Button variant={props.cls || "primary"} onClick={addMeal}>{props.actionTitle}</Button>
            </Card.Body>
        </Card>
    )
}