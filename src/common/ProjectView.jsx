import React from 'react'

function ProjectView({img, h4, p}) {
  return (
    <div>
         <a href="https://www.github.com/">
            <img src={img} alt="viber"/>
         </a>
         <h4>{h4}</h4>
         <p>{p}</p>
    </div>
  )
}

export default ProjectView