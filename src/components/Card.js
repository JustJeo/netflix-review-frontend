import React from 'react'

const Card = (props) => {
  return (
    <div className="MovieCard">
      <h2>{ props.category }</h2>
      <img src={ props.coverArtUrl } alt="Netflix image"/>
      <h3>{ props.title }</h3>
      <h5>By: { props.publisher }</h5>
      <p>{ props.content } <u><i>read more</i></u></p>
      {/* <button className="seeMore">See More</button> */}
    </div>
  )
}

export default Card;
