import React from 'react'

const Card = (props) => {
  return (
    <div className="MovieCard">
      <h5>{ props.category }</h5>
      <h3>{ props.title }</h3>
      <h5>By: { props.publisher }</h5>
      <p>{ props.content }</p>
    </div>
  )
}

export default Card;
