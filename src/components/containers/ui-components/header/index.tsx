import React, { useEffect, useState } from 'react';
import axios from "axios";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Spinner from 'react-bootstrap/Spinner';
import LinksApp from '../../appRouter/linksApp';
import {routesConfiguration} from '../../appRouter/config'


export default function NavBarApp() {

    const [userDetails, setUserDetails] = useState(null)
    const [flag, setFlag] = useState(null)

    async function getUserDetailsApi() {
        try {
            const { data } = await axios.get("https://randomuser.me/api/?results=1")
            const user = data.results[0]
            setUserDetails(user)
            const responseCountries = await axios.get(`https://restcountries.eu/rest/v2/name/${user.location.country}`)
            const [country] = responseCountries.data
            setFlag(country.flag);
        } catch{
            // alert no details
        } finally {
            // cancel loader
        }
    }
    useEffect(() => {
        getUserDetailsApi()
    }, [])

    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Resto</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <LinksApp routes={routesConfiguration}/>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}