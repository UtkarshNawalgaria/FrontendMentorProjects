import React from 'react'
import { Link } from 'react-router-dom'

import Projects from '../components/projectData'

const Home = () => {
    return (
        <div className="container mx-auto text-center">
            <header className="text-3xl font-bold my-4">Frontend Mentor Projects</header>
            <div className="mt-10">
                <ul>
                    {Projects.map((project, idx) => {
                        return (
                            <li key={idx}>
                                <Link to={project.path}>{project.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            
        </div>
    )
}

export default Home
