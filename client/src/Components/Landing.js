import React from 'react'
import { Link} from 'react-router-dom';

const Landing = () => {

  return (
      <div className="landing">
        <h1>Tired of navigating through metro maps?</h1>
        <div className="heading-para">
        <p>The Delhi Metro is a mass rapid transit (MRT) system serving Delhi and its satellite cities of Ghaziabad, Faridabad, Gurugram, Noida and Bahadurgarh, in the National Capital Region of India. The network consists of 10 colour-coded lines serving 255 stations with a total length of 348.12 kilometres (216.31 mi). It is the largest and busiest metro rail system in India.</p>
        <br />
        <p>
            Remembering routes and exchanges to 255 stations must be difficult.
        </p>
        </div>
        <h2>Let's make this easy for you</h2>
        <div className="buttons">
        <Link to='/route' ><button className='route-btn'>Get route</button></Link>
        <button className="locate-btn">Nearest Metro</button>
        </div>
    </div>
  )
}

export default Landing