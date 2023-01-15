import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <Link to="/"><h2>CRUD Redux Toolkit</h2></Link>
        </div>
    )
}

export default Header