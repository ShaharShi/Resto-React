import React, { useState, useContext } from "react"
import { StarFill } from 'react-bootstrap-icons';
import { MealsContext } from "App";


interface IProps {
    stars: number,
    paintStarOption?: boolean
}

enum StarColors {
    primary = "gold",
    secondary = "blue"
}

export default function Rank(props: IProps) {
   const [globalState, setGlobalState] = useContext(MealsContext)
    if (!props.stars) return <div>No Rating</div>
    const numberOfStarsArr = new Array(Number(props.stars.toFixed(0))).fill(true, 0)

    return (
        <div>
            {numberOfStarsArr.map((_, index) => <StarFill key={index} fill={globalState.configApp.starColor || StarColors.primary} />)}
        </div>
    )
}