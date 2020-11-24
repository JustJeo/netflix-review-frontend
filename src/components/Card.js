import React from 'react'

const Card = (props) => {
  return (
    <div className="MovieCard">
      <h2>{ props.category }</h2>
      <h3>{ props.title }</h3>
      <h5>By: { props.publisher }</h5>
      <p>{ props.content }</p>
      <button>See More</button>
    </div>
  )
}

export default Card;
