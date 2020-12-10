import React, { useState, useEffect} from "react";
import axios from 'axios'
import styled from 'styled-components'

const ExplanationStyle = styled.p`
    border: 1px dotted navy;
    max-width: 80%;
    margin-left: 10%;
    &:hover {
        max-width: 90%;
        margin-left: 5%;
        transition: all 0.5s ease-in-out;
      }
      transition: all 0.5s ease-in-out;
 `

const Explanation = () => {
    const [explanation, setExplanation] = useState("")


    useEffect(() => {
        axios
            .get (
            `https://api.nasa.gov/planetary/apod?api_key=QTu3yE2OUyP4BTP1nHE396h5ywBkCP4KyeYh78nK`
            )
            .then ( (data) => {
                setExplanation(data.data.explanation)
            })
    }, []) 

    return (
        <ExplanationStyle>
            <p>{explanation}</p>
        </ExplanationStyle>
    )
}

export default Explanation