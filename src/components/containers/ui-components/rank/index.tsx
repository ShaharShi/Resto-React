import React, { useState } from "react"
import { StarFill } from 'react-bootstrap-icons';


interface IProps {
    stars: number,
    paintStarOption?: boolean
}

enum StarColors {
    primary = "red",
    secondary = "blue"
}

export default function Rank(props: IProps) {
    const [state, setState] = useState({starColor: StarColors.primary})
    if (!props.stars) return <div>No Rating</div>
    const numberOfStarsArr = new Array(Number(props.stars.toFixed(0))).fill(true, 0)

    function changeStartsColor() {
        const color = state.starColor === StarColors.primary ? StarColors.secondary : StarColors.primary
        setState({
            starColor: color
        })
    }

    return (
        <div>
            {numberOfStarsArr.map((_, index) => <StarFill key={index} fill={state.starColor} onClick={() => changeStartsColor} />)}
        </div>
    )
}