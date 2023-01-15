import './App.css';
import AddUser from './components/AddUser';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import EditUser from './components/EditUser';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/edit-user/:id" element={<EditUser />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
