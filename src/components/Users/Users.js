import React, { useState } from 'react';
import fakeData from '../FakeData/fakeData.json';
import Cart from '../Cart/Cart';
import User from '../User/User';
import './users.css';

const Users = () => {

    const [users, setUsers] = useState([]);

    const addToCart = (user) => {
        const newUser = [...users, user];
        setUsers(newUser)
    };

    return (
        <div className="users-container">
            <div className="users">
                {
                    fakeData.map(user => <User
                        key={user.id}
                        addToCart={addToCart}
                        user={user}></User>)
                }
            </div>
            <div className="cart-details">
                <Cart user={users}></Cart>
            </div>
        </div>
    );
};

export default Users;