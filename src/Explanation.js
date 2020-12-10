import React, { useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'

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
        <p>{explanation}</p>
    )
}

export default Explanation