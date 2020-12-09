import React, { useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'



function App() {
  // const [nasaDataFromApi, setNasaDataFromApi] = useState({})
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [videoURL, setVideoURL] = useState("")
  const [explanation, setExplanation] = useState("")


  useEffect(() => {
    axios
      .get (
        `https://api.nasa.gov/planetary/apod?api_key=QTu3yE2OUyP4BTP1nHE396h5ywBkCP4KyeYh78nK`
        )
      .then ( (data) => {
        // nasaDataFromApi(data.data)
        setTitle(data.data.title)
        setDate(data.data.date)
        setVideoURL(data.data.url)
        setExplanation(data.data.explanation)
        // console.log(data.data)
      })
    }, []) 

  // console.log(title)
  // console.log(date)
  // console.log(videoURL)
  // console.log(explanation) 

  return (
    <div className="App">
      <div className="content">
        <h2>{title}</h2>
        <p>{date}</p>
        <iframe width="420" height="315" src={videoURL}> </iframe>
        <p>{explanation}</p>
      </div>
    </div>
  );
}

export default App;
