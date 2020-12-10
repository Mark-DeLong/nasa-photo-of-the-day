import React, { useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'

const VideoUrl = () => {
    const [videoURL, setVideoURL] = useState("")

    useEffect(() => {
        axios
            .get (
            `https://api.nasa.gov/planetary/apod?api_key=QTu3yE2OUyP4BTP1nHE396h5ywBkCP4KyeYh78nK`
            )
            .then ( (data) => {
                setVideoURL(data.data.url)
            })
    }, []) 

    return (
        <iframe width="420" height="315" src={videoURL} ></iframe>
    )
}

export default VideoUrl