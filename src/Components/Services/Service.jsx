import React from 'react'
import './Service.css'
import Servicedata from '../../assets/Servicedata'

function Service() {
  return (
    <div className='services'>
      <div className="service-title">
        <h1>My Services</h1>
      </div>  
      <div className="services-container">
        {
            Servicedata.map((service,index)=>{
                return <div key={index} className='service-format'>
                    <h3>{service.id}.</h3>
                    <h2>{service.name}</h2>
                    <p>{service.description}</p>
                    <div className="service-readmore">
                        {/* <p>Read More</p> */}
                    </div>
                </div>
            })
        }
        </div>
    </div>
  )
}

export default Service