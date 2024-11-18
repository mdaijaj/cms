import React from 'react';
import { NavLink } from 'react-router-dom';
import "../App.css"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">
                        <img src="data:image/png;base64,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" style={{ borderRadius: "50%" }} width="100" height="100" className="" alt="image path not found" />
                    </NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/create_post">Create Post</NavLink>
                            </li>
                            
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/post_table">Post List</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}



export default Navbar;
