import React, { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form'
import { MealsContext } from 'App';
import Button from 'react-bootstrap/esm/Button';

export default function MealPage() {
    const defaultImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAAEDCAMAAABQ/CumAAAARVBMVEWrq6ulpaX////5+fmnp6ft7e2wsLC3t7fs7Ozo6Oj39/fc3Nz8/Py+vr7f39/CwsLS0tLKysrIyMjj4+PQ0NDAwMCfn5/XuA2KAAAESUlEQVR4nO2c6ZKrKhRGdTMjxoGk3/9RD5O26ZNLe+tUjEl960e3A1osgc1gyqYBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+D+0T4ccYWEfuSZA+xKFlxJ4FiYMU3NeTqtHXYQrUPunWHAp7gUINKOwGCjWgsBso1IDCbqBQAwq7gUINKOwGCjWgsBso1DiLQj/0Mm/JmyrHZD8M6+H/5iQKXBAbckYGplOu5ewZEbHL8Mutz6KgiXx+3oM1cUN2zumx6wTZqX7rsygYJ+iatrKCHEPWFedNPzpWL4ezKGjWWZsaQVZQli0PvyNbbUbnUZhHusQalBXCznJOWlKVS0+kMChBfVMUZFBaz3U01vJ4HoW5nZiViwKz/XpuJP8mCk1zoY4XBRJr5eFXuryNgrJO8UVhWwrvosDj8/alFKxdI+kbtYX4X7ipTwqGxvWkpmrHcBKFNpVCqEokrimozqRLY+CTY9Vbn0RhKYXQj4nctRkyMuaM3yxN1SyeTUEKoqjAe0t2lLL3jrr6rU+j4EpXNrikEBxMHKhSEPnl1mdRGH0JonI0Yx6yyqHz3o/VwUW69hwKDeffW9tN/nvuzqLwD0BhN1CoAYXdQKEGFHZTFHj8Jd3SXW36sDZ3YqkvKzvbHi7/bfnm0rx7vAIfRcSn8VAvujJ4GHw4aK5q0GLhyqd1CczH1RnZ5UvTOESOJVkcwx6s0FEmrrAMLk0JuNL5mJsnWunacZ30pEWYMAnKxKPysiR7hcLYts1kw1SSF4Ubo/AwW367DKFytFLbPtS2OGP+qSDD2c7FlZqgMLdLTTpcIT63dmaWl1JQNswHcp1OCZXOyy8PFFK1u8TDQeF7GvQShZjvRaFbloMLSvylIDYK8Q6nUQgVyahGOjvcZSAo3H4o/CiF6QwKfGYiloJRvCd9n7BSkUJbaEYX18hyW3hNUA3N+Ss0Z0FzkxWuPxcbHygsFUkbo5mICzJBQZjARb1CgVlr84w+Kfy1UlcphRh4u/wGqATVlPQl/YJOmYzNOZSC2a2gmt66qSh8v/p5RUXKP9ZP/QK/kbh/H/hQQRYFrmw6+/rmnEkRiTN2/yptVbgu0VZZ164RKb9HeW0pbBVivzBSKIsHCs1gbTrBry7WtaKgUiQ4j4KJdVyTnmSIj2pWdwrSk+lbLueU6bVfuDq9CaovG2BsFZrekDPee2FT9V4VwkiWhPeG5bdui0JQnnhQ0D4SV80OVrhsFcqbnDByjmFK5HipBLuVBCqFTjHJkvWUOrQRJ0MJZfThCo1Um/izbksV+N7ZpHhwPCQuV5STmHjuBgo1oLAbKNSAwm6gUAMKu4FCDSjsBgo1oLAbKNSAwm4+QsF9gMIHfAfj7b9GYp/2RZijvgnzAV/mAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwMfwBuUM5vBM8lUQAAAAASUVORK5CYII='
    const initialState: any = {name: '' || 'No Name', description: '' || 'No Description', image: '' || defaultImage, rating: 1}
    const [state, setState] = useState(initialState)
    const [globalState, setGlobalState] = useContext(MealsContext)
    const numberOfStars = new Array(5).fill(true, 0)

    function handleSelect({target}: any ) {
        setState({...state, rating: Number(target.value)})
    }

    function handleInputChange({target}: any) {
        const { name , value } = target;
        setState({...state, [name]: value})
    }
    
    function handleSubmit(e: any) {
        e.preventDefault()
        setGlobalState({...globalState, meals: [...globalState.meals, state]})
    }

    return (
        <div className={'container mt-5'}>
            <Form>
                <Form.Group>
                    <Form.Label>Meal Name</Form.Label>
                    <Form.Control type={'text'} onChange={(e) => {handleInputChange(e)}} name={"name"}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Meal Description</Form.Label>
                    <Form.Control as={'textarea'} onChange={(e) => {handleInputChange(e)}} name={"description"} placeholder="Describe your Meal ..." />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Meal Image</Form.Label>
                    <Form.Control type={'text'} onChange={(e) => {handleInputChange(e)}} name={"image"} placeholder="Insert Meal URL image" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Meal Rating</Form.Label>
                    <Form.Control as={'select'} className={"d-block w-100"} onChange={(e: any) =>{ handleSelect(e)}}>
                        {numberOfStars.map((_, i) => { 
                            const currentIndex = i + 1
                            return <option key={currentIndex} value={currentIndex}>{currentIndex} Stars</option>
                        })}
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Button variant={'success'} onClick={(e) => {handleSubmit(e)}}>Add Meal</Button>
                </Form.Group>
            </Form>
        </div>
    )
}