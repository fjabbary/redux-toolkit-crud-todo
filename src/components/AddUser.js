import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../features/user'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function AddUser() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: ""
    });

    const handleAddUser = () => {
        dispatch(addUser({ id: uuidv4(), ...user }));
        setUser({ name: "", email: "" });
        navigate('/');
    }

    return (
        <div className="add-user">
            <div>
                <label>Name:</label>
                <input type="text" value={user.name} onChange={e => setUser({ ...user, name: e.target.value })} minLength="3" />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={user.email} onChange={e => setUser({ ...user, email: e.target.value })} />
            </div>
            <button className="btn" onClick={handleAddUser}>Submit</button>
        </div>
    )
}

export default AddUser