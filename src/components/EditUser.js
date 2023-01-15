import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../features/user'
import { useNavigate, useParams } from 'react-router-dom';

function EditUser() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const state = useSelector(state => state.users)

    const [user, setUser] = useState({
        name: "",
        email: ""
    });

    useEffect(() => {
        const foundUser = state.find(user => user.id === id)
        setUser({ name: foundUser.name, email: foundUser.email });
    }, [id, state])

    const handleEditUser = () => {
        dispatch(editUser({ id, ...user }))
        navigate('/')
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
            <button className="btn" onClick={handleEditUser}>Update</button>
        </div>
    )
}

export default EditUser;