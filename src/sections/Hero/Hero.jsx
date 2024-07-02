import React from 'react'
import HeroPic from './../../assets/hero-img.png'
import sunPic from './../../assets/sun.svg';
import moonPic from './../../assets/moon.svg';
import twitterDark from './../../assets/twitter-dark.svg'
import twitterLight from './../../assets/twitter-light.svg';
import githubDark from './../../assets/github-dark.svg';
import githubLight from './../../assets/github-light.svg';
import linkedinDark from './../../assets/linkedin-dark.svg';
import linkedinLight from './../../assets/linkedin-light.svg';
import CV from './../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext';
import './HeroStyles.css'

function Hero(){
    const {theme, toggleTheme}=useTheme();
  return (
     <section id='hero'>
         <div className='heroTop'>
            <img src={HeroPic} alt="Hero Pic" />
            <span className='sunOrMoon'>
                <img src={theme==='light'? sunPic:moonPic} alt="sunPic or MoonPic" onClick={toggleTheme}/>
            </span>
         </div>
         <div className='heroContent'>
         <div>
            <h1>nethaji goud</h1>
            <h2>frontend developer</h2>
         </div>
         <span className='tglLinks'>
            <a href="https://www.twitter.com/" target='_blank'>
                <img src={theme==='light'? twitterLight:twitterDark} alt="twitter" />
            </a>
            <a href="https://www.github.com/">
                <img src={theme==='light'? githubLight:githubDark} alt="github" />
            </a>
            <a href="https://www.linkedin.com/">
                <img src={theme==='light'? linkedinLight:linkedinDark} alt="linkedIn" />
            </a>
         </span>
         <p>
            With a passion for developing modern React web apps for commercial business
         </p>
         <a href={CV} download>
            <button>Resume</button>
         </a>
         </div>
     </section>
  )
}

export default Hero