import React from 'react'
import  './ProjectStyles.css'
import viberr from './../../assets/viberr.png'

function Project() {
  return (
    <section id='projects'>
         <h1>Projects</h1>
         <a href="https://www.github.com/">
            <img src={viberr} alt="viber" />
         </a>
         <h4>Viberr</h4>
         <p>Streaming App</p>
    </section>
  )
}

export default Project