import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Avatar from '../Avatar/Avatar';
import './cart.css';

const Cart = (props) => {
    let salary = 0;
    props.user.forEach(user => salary += user.salary);

    return (
        <div className="cart">
            <h2><FontAwesomeIcon className="icon" icon={faUser} /> Total Users added: {props.user.length}</h2>
            <h3>Total Salary: ${salary}</h3>
            <div className="avatar-container">
                {
                    props.user.map(user => <Avatar

                        user={user}
                    ></Avatar>)
                }
            </div>
        </div>
    );
};

export default Cart;