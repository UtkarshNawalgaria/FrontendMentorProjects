import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <header>Frontend Mentor Projects</header>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About Page</Link>
                </li>
            </ul>
        </div>
    )
}

export default Home
