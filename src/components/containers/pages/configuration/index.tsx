import React, { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import FormLabel from 'react-bootstrap/esm/FormLabel';
import Row from 'react-bootstrap/esm/Row';
import { StarFill } from 'react-bootstrap-icons';
import { MealsContext } from 'App';
import Col from 'react-bootstrap/esm/Col';

export default function ConfigurationPage() {
    const [globalState, setGlobalState] = useContext(MealsContext)
    const [state, setState] = useState({starColor: '', imageSize: ''})

    return (
        <div className={'container mt-5'}>
            <Row>
                <Form className={'m-5'}>
                    <FormGroup>
                        <FormLabel>Star Color</FormLabel>
                        <InputGroup.Prepend>
                            <Form.Control onChange={(e) => setState({...state, starColor: e.target.value})} placeholder={'Insert Star Color'}/>
                            <InputGroup.Text><StarFill color={state.starColor} size={20}/></InputGroup.Text>
                        </InputGroup.Prepend>
                        <Button onClick={() => setGlobalState({...globalState, configApp: {...globalState.configApp, starColor: state.starColor}})} style={styles.buttonStyle}>Set Color</Button>
                    </FormGroup>
                </Form>
                <Form className={'m-5'}>
                    <FormGroup>
                        <FormLabel>Image Size</FormLabel>
                        <InputGroup.Prepend>
                            <Form.Control onChange={(e) => setState({...state, imageSize: e.target.value})} placeholder={'Insert Image Size'}/>
                            <InputGroup.Text>PX</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Button onClick={() => setGlobalState({...globalState, configApp: {...globalState.configApp, imageSize: state.imageSize}})} style={styles.buttonStyle}>Set Size</Button>
                    </FormGroup>
                </Form>
            </Row>
        </div>
    )
}

const styles : any = {}
styles.buttonStyle = {
'width' : '100%',
'margin-top' : '10px'
}