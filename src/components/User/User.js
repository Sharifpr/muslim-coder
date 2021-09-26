import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faVenusMars, faEnvelope, faPhone, faMapMarkedAlt, faMoneyCheckAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const User = (props) => {
    const { image, firstName, lastName, gender, email, phone, address, salary } = props.user;


    return (
        <div className="user">
            <div className="img-container">
                <div className="image">
                    <img src={image} alt="" />
                </div>
            </div>
            <div className="mt-5">
                <p><FontAwesomeIcon className="icon" icon={faUser} /> Name: <span className="name">{firstName} {lastName}</span></p>
                <p><FontAwesomeIcon className="icon" icon={faVenusMars} /> Gender: {gender}</p>
                <p><FontAwesomeIcon className="icon" icon={faEnvelope} /> Email: {email}</p>
                <p><FontAwesomeIcon className="icon" icon={faPhone} /> Phone: {phone}</p>
                <p><FontAwesomeIcon className="icon" icon={faMapMarkedAlt} /> Address: {address}</p>
                <p><FontAwesomeIcon className="icon" icon={faMoneyCheckAlt} /> Salary: ${salary}</p>
            </div>
            <button onClick={() => {
                props.addToCart(props.user);

            }} className="btn btn-outline-dark w-50 fs-5 mt-2"><FontAwesomeIcon className="btn-icon" icon={faUserPlus} />  Add</button>
        </div>
    );
};

export default User;