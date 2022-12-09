import React, {Component, useState} from "react";

import {Button, Container, Form, FormControl, Nav, Navbar} from 'react-bootstrap'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Home from "../pages/Home";
import Writers from "../pages/Writers";
import Kupala from "../pages/Kupala"
import Kolas from "../pages/Kolas"
import Tank from "../pages/Tank"
import Korot from "../pages/Korotkevich"
import Bagdanovich from "../pages/Bagdanovich"
import Melez from "../pages/Melez"

import { useTranslation } from 'react-i18next';


function Header() {
const { t, i18n } = useTranslation();
const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
        return(
            <>

                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">{t('Wiki')}</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link >{t('Home')}</Nav.Link>
                                <Nav.Link href="/writers">{t('Writers')}</Nav.Link>

                            </Nav>

                        </Navbar.Collapse>
                        <Nav>
            <Nav.Link onClick={() => changeLanguage("ru")}>RU</Nav.Link>
            <Nav.Link onClick={() => changeLanguage("en")}>
              EN
            </Nav.Link>
          </Nav>
                    </Container>
                </Navbar>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/writers" element={<Writers/>}/>
                    <Route exact path = '/Kupala' element = {<Kupala/>}/>
                    <Route exact path = '/Kolas' element = {<Kolas/>}/>
                    <Route exact path = '/Tank' element = {<Tank/>}/>
                    <Route exact path = '/Korotkevich' element = {<Korot/>}/>
                    <Route exact path = '/Bagdanovich' element = {<Bagdanovich/>}/>
                    <Route exact path = '/Melez' element = {<Melez/>}/>
                </Routes>
            </Router>
            </>
        )
    }

export default Header;