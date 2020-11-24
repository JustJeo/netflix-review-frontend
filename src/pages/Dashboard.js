import React, { Component } from 'react';
import UserModel from '../models/user'
import ReviewModel from '../models/review'
import { Container, Row, Col } from "react-bootstrap"
import User from '../components/User'

class Dashboard extends Component {
    state = {
        users: [],
        reviews: []
    }

    componentDidMount() {
        this.fetchUserData()
        this.fetchReviewData()
    }

    fetchUserData = () => {
        UserModel.all().then(data => {
            console.log(data.users.length)
            this.setState({ users: data.users })
        })
    }
    
    fetchReviewData = () => {
        ReviewModel.all().then(data => {
            this.setState({ reviews: data.reviews })
        })
    }

    render() {
        let userList = this.state.users.map((user, index) => {
            return (
              
              <Col xs={12} sm={6} md={6} lg={4}>
                <User {...user} key={index} />
              </Col>
              
            )
        })
        return (
            <div className="dashboard">
                <div>{ this.state.users.length } Total Sign-Ups</div>
                <div>{ this.state.reviews.length } Total Articles</div>
                { this.state.users ?  
                <Container>
                  <Row>
                    {
                      userList
                    }
                  </Row>
                </Container>
              : 'Loading...'}
            </div>
        );
    }
}

export default Dashboard;
