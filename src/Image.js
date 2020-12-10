import React, { useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'

const Image = () => {
    const [image, setImage] = useState("")

    useEffect(() => {
        axios
            .get (
            `https://api.nasa.gov/planetary/apod?api_key=QTu3yE2OUyP4BTP1nHE396h5ywBkCP4KyeYh78nK`
            )
            .then ( (data) => {
                setImage(data.data.url)
            })
    }, []) 

    return (
        
            <img width="420" height="315" src={image} alt="space" ></img>
        
    )
}

export default Image