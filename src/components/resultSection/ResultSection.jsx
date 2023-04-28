import React from 'react'
import flower1 from '../../assets/images/flower-1.jpg'
import flower2 from '../../assets/images/flower-2.jpg'
import cloudPattern from '../../assets/videos/cloudPatterns.mp4'
import './index.css'

const ResultSection = () => {
  return (
    <div className='result-section'>
      <div className='result-card'>
        <h1 style={{ textAlign: 'left', color: 'white' }}>Result Section</h1>
        <p >Let's explore the effect of these cumulus cloud type</p>
      </div>
      <div className="description">
        <div className="des-text">
          <h2 style={{ color: 'black' }}> Flower </h2>
          <p style={{ color: 'black' }}>Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
            more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
            word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32
            and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
            This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
            "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
        </div>
        <div className="image">
          <img alt='img' src={flower1} />
          <img alt='img' src={flower2} />
        </div>
      </div>
    </div>
  )
}

export default ResultSection