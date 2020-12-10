import React, { useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'

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
        <p>{date}</p>
    )
}

export default Date