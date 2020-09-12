import React, { useContext, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { MealsContext } from 'App';

interface IMeal {
    name: string;
    description: string;
    image: string;
    action: Function;
    actionTitle: string;
    cls: string
}


export default function Meal(props: IMeal) {
    const [state, setState] = useContext(MealsContext)
    
    function addMeal() {
        setState({ ...state, orders: [...state.orders, props] })
    }
    
    return (
        <Card className="col-lg-4 mb-5">
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Button variant={props.cls || "primary"} onClick={addMeal}>{props.actionTitle}</Button>
            </Card.Body>
        </Card>
    )
}