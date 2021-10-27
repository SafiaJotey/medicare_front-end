import React from 'react';
import { Link } from 'react-router-dom';
import "./Register.css"

const Register = () => {
    return (
        <div className="register container">
        <h3>Please Register</h3>
        <form className='my-5'>
        
        <div class="mb-3 ">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email"/>
        
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword" class="form-label">Password</label>
            <textarea type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>

<button type="submit" class="btn btn-primary">Login</button>
<span> <Link to="/login">Login if already have an accaount</Link></span>
</form>


</div>
    );
};

export default Register;