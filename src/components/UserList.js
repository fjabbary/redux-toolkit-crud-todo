import React from 'react';
import { Link } from 'react-router-dom';
import { deleteUser } from '../features/user';

import { useSelector, useDispatch } from 'react-redux';
import { HiPencilAlt } from "react-icons/hi";
import { CgTrash } from "react-icons/cg";

function UserList() {
    const users = useSelector(state => state.users);

    const dispatch = useDispatch();

    const renderUsers = () => {
        return users.map(user => {
            return (
                <div className="user-card" key={user.id}>
                    <div className="user-card-info">
                        <strong><div>{user.name}</div></strong>
                        <div>{user.email}</div>
                    </div>
                    <div className="user-card-icons">
                        <Link to={`/edit-user/${user.id}`}><HiPencilAlt /></Link>
                        <CgTrash onClick={() => dispatch(deleteUser(user.id))} />
                    </div>
                </div>
            )
        })
    }

    return (
        <>
            <Link to="/add-user" className="btn btn-add">Add User</Link>
            <div className="user-list">
                {users.length === 0 ? <h1>No User Found!</h1> : renderUsers()}
            </div>
        </>
    )
}

export default UserList;