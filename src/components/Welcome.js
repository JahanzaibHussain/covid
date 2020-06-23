import React from 'react'
import {Link} from 'react-router-dom'

function Welcome() {
    return (
        <div className="welcome" > 
            <div className="container h-100">
                <div className="row h-100 justify-content-center align-items-center">
                        <Link to="/dashboard">
                            <h1>
                                Covid-19
                            </h1>
                        </Link>
                </div>
            </div>
        </div>
    )
}

export default Welcome
