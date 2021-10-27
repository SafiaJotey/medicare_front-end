import React from 'react';
import { Link } from 'react-router-dom';
import notFound from'../../images/404.png'
import "./Error.css"

const error = () => {
    return (
        <div className="notFound">
            <img src={notFound}></img>
            <Link to="/">Go back</Link>
        </div>
    );
};

export default error;