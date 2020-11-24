import React, { Component } from 'react';
import ReviewModel from '../models/review'

import Card from '../components/Card'


class Home extends Component {
  state = {
    reviews: []
  }

  componentDidMount() {
    this.fetchReviewData()
  }

  fetchReviewData = () => {
    ReviewModel.all().then(data => {
      this.setState({ reviews: data.reviews })
    })
  }

  render() {
    let reviewList = this.state.reviews.map((review, index) => {
      return (
        <div key={index}>
          <Card {...review} />
        </div>
      )
    })

    return (
      <container>
        <div className="logo">
          <h1>Netflix</h1>
          <h3>-----TV Recaps-----</h3>
        </div>
        <div className="reviews">
          { this.state.reviews ? reviewList : 'Loading...'}
        </div>
        {/* <div className="trending">
          <h2>Trending</h2>
          <Card />
          <Card />
          <Card />
        </div>
        <div className="lgbt">
          <h2>LGBTQIA+</h2>
          <Card />
          <Card />
          <Card />
        </div>
        <div className="voices">
          <h2>Black Voices</h2>
          <Card />
          <Card />
          <Card />
        </div> */}
      </container>
    )
  }
}

export default Home;