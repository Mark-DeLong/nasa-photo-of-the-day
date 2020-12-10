import React, { useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'

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
        <h2>{title}</h2>
    )
}
export default Title