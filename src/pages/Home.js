import React, { Component } from 'react';
import ReviewModel from '../models/review'
import { Container, Row, Col } from "react-bootstrap"
import Card from '../components/Card'
import RegisterModal from '../components/RegisterModal';


class Home extends Component {
  state = {
    reviews: [],
    show: true
  }

  componentDidMount() {
    this.fetchReviewData()
  }

  fetchReviewData = () => {
    ReviewModel.all().then(data => {
      this.setState({ reviews: data.reviews })
    })
  }

  showModal = e => {
    console.log('close modal')
    this.setState({
        show: false
    });
  };

  onClose = e => {
      this.props.show = false;
  };

  render() {
    let reviewList = this.state.reviews.map((review, index) => {
      return (
          <Col xs={12} sm={6} md={6} lg={4}>
            <Card {...review} key={index} />
          </Col>
      )
    })

    return (
      <container>

        <RegisterModal 
          show={ this.state.show } 
          onClose={ this.showModal }
        />

        <div className="logo">
          <h1>Netflix</h1>
          <h3>----- TV Recaps -----</h3>

          {/* Shrink input and button for mobile */}
          <form className="search">
            <input type="text" placeholder="Search..."></input>
            <button>GO!</button>
          </form>
        </div>

        {/* Hide "Featured" when going to mobile */}
        <div className="featured">
          <img src="https://trello-attachments.s3.amazonaws.com/5fbc13c30904984231073a61/5fbc62350f4f453fd20448a6/b5570ce6543388140e53cdf457ef9ace/Stranger_Things_Banner.png" alt="7 teenagers in 80's style clothes"/>
          <div className="strangerThings">
            <h2>"Stranger Things"</h2>
            <h3>Everything to know about season 4</h3>
          </div>
        </div>
        <div className="reviews">
          { this.state.reviews ? 
          <Container fluid>
            <Row>
              {
                reviewList 
              }
            </Row>
          </Container>
          : 'Loading...'}
        </div>
      </container>
    )
  }
}

export default Home;