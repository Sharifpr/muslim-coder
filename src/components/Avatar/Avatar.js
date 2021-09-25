import React from 'react';
import './avatar.css';

const Avatar = (props) => {

    const { firstName, lastName } = props.user;

    return (
        <div className="avatar">
            <h5>{firstName} {lastName}</h5>
        </div>
    );
};

export default Avatar;