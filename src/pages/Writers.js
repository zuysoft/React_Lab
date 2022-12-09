import React, {Component, useState, useEffect } from 'react';
import writersBackground from '../accerts/bg.jpg';
import kupalaImg from '../accerts/KupalaMain.jpg';
import kolasImg from '../accerts/KolasMain.jpg';
import korotkevichImg from '../accerts/KorotkevichMain.jpg';
import tankImg from '../accerts/TankMain.jpg';
import bagdanovichImg from '../accerts/BagdanovichMain.jpg';
import melezImg from '../accerts/MelezMain.jpg'

import WriterList from './writerList'


import Writer_DATA from '../writers.json';

import './css/writersStyles.css'
import {Button, Form} from "react-bootstrap";



function Writers(props) {

    const listOfWriters  = Writer_DATA;

const filterwriters = (searchText, listOfWriters) => {
  if (!searchText) {
    return listOfWriters;
  }
  return listOfWriters.filter(({ title }) =>
    title.toLowerCase().includes(searchText.toLowerCase())
  );
}
    const [SearchTerm, setSearchTerm] = useState('');
    const [writersList, setWritersList] = useState(listOfWriters);
   // const filteredWriters= writers.filter(writer =>{
   //     return writer.title.toLowerCase().includes(SearchTerm.toLowerCase)
  //  });
    useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredWriters = filterwriters(SearchTerm, listOfWriters);
      setWritersList(filteredWriters);
    }, 300);

    return () => clearTimeout(Debounce);
  }, [SearchTerm]);
        return (
            <>
                <Form className="d-flex">
        <Form.Control
            type="search"
            placeholder="Search"
            className="me-1"
            aria-label="Search"
            onChange={(e) =>setSearchTerm(e.target.value)}
        />
        <Button variant="outline-success">Search</Button>
    </Form>
                <section style = {{
                    backgroundImage: 'url(' + writersBackground + ')',
                }}>
                  
                          <WriterList writerList={writersList} />
                </section>
            </>
        );
}

export default Writers;