import React from 'react'
import "./Card.css"
function Card({el}) {
  return (
<div className="card  tt " style={{width: '18rem'}}>
  <img className="card-img-top" src={el.logo} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{el.name}</h5>
    <p className="card-text">{el.description}</p>
    <p className='PRICE'>{el.price}</p>
  
  </div>
</div>

  )
}

export default Card