import React from 'react'
import data from "./assets/newData.json"

const Card = () => {
    return (
        <div className='bg'>
            <div className='d-flex flex-wrap justify-content-around'>
                
                {data.map((d, i) => {
                    return (


                        < div className='card-top m-5' key={i} style={{ width: "13rem" }} >
                            <img className="card-img" src={d.picture} alt="Image" />

                            
                            <div className='card-body'>
                                <h5 className='card-name'>{d.name.title} {d.name.first}</h5>
                                <p className='card-text mb-0'>{d.cell}</p>
                                <p className='card-text mb-0'>{d.location.city},{d.location.state}</p>
                                <p className='card-text'>{d.location.country}</p>
                                <a href='#' className=''>{d.email}</a>
                            </div>
                        </div>)
                })}
                </div>
            
        </div >
    )
}


export default Card





