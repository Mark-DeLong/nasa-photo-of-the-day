import React, { useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import styled from 'styled-components'

const TitleStyle = styled.h2`
    color: red;
 `

const Title = () => {
    const [title, setTitle] = useState("")

    useEffect(() => {
        axios
            .get (
            `https://api.nasa.gov/planetary/apod?api_key=QTu3yE2OUyP4BTP1nHE396h5ywBkCP4KyeYh78nK`
            )
            .then ( (data) => {
                setTitle(data.data.title)
            })
    }, []) 
    
    return (
        <TitleStyle>
            <h2>{title}</h2>
        </TitleStyle>
    )
}
export default Title