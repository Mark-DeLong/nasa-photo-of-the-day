import React, { useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import styled from 'styled-components'

const DateStyle = styled.p`
    border: 1px solid gold;
    max-width: 20%;
    margin-left: 40%;
 `

const Date = () => {
    const [date, setDate] = useState("")
   
    useEffect(() => {
        axios
            .get (
            `https://api.nasa.gov/planetary/apod?api_key=QTu3yE2OUyP4BTP1nHE396h5ywBkCP4KyeYh78nK`
            )
            .then ( (data) => {
                setDate(data.data.date)
            })
    }, []) 

    return (
        <DateStyle>
            <p>{date}</p>
        </DateStyle>
    )
}

export default Date