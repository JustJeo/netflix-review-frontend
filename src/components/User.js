import React from 'react'

const User = (props) => {
    return (
        <div className="UserCard">
            <h3>{ props.name }</h3>
            <h5>{ props.email }</h5>
            <p>{ props.id }</p>
        </div>
    )
}

export default User;