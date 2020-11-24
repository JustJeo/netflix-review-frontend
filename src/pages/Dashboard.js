import React, { Component } from 'react';
import UserModel from '../models/user'
import ReviewModel from '../models/review'

import UserCard from '../components/User'

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
                <div key={index}>
                    <UserCard {...user} />
                </div>
            )
        })
        return (
            <div>
                <div>{ this.state.users.length } Total Sign-Ups</div>
                <div>{ this.state.reviews.length } Total Articles</div>
                { this.state.users ? userList : 'Loading...'}
            </div>
        );
    }
}

export default Dashboard;
