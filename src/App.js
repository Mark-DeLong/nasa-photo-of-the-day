import React from "react";

import Title from './Title.js'
import Date from './Date.js'
import Explanation from './Explanation.js'
import Image from './Image.js'

import styled from 'styled-components'

const Theme = styled.div`
        display: flex;
        justify-content: center;
        primaryColor: "royalblue",
        secondaryColor: "crimson",
        tertiaryColor: "forestgreen",
        danger: "orange",
        black: "black",
        white: "white",
        breakpointMobile: "{max-width: 550px}",
        breakpoints: {
            mobile: "{max-width: 550px}",
            tablet: "{max-width: 800px}"
        },
        padding: {
            small: "4px",
            medium: "8px"
        }
   `

function App() {
  
  return (
    <Theme>
      <div className="App">

        <Title />
          
        <Date />
        
        <Image />

        <Explanation />
        
      </div>
    </Theme>

  )
  }

export default App;
