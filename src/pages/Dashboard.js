import React, { Component } from 'react';
import UserModel from '../models/user'

import UserCard from '../components/User'

class Dashboard extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        this.fetchUserData()
    }

    fetchUserData = () => {
        UserModel.all().then(data => {
            this.setState({ users: data.users })
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
                { this.state.users ? userList : 'Loading...'}
            </div>
        );
    }
}

export default Dashboard;
