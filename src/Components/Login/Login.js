import React from 'react';
// import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import "./Login.css"

const Login = () => {
    const { signInUsingGoogle,
        
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        toggleLogin,
        handleRegistration,
         isLogin, error } = useAuth();

    return (
        <div>
            <div className=" my-5 login">

                <form onSubmit={handleRegistration}  >
                    <h3 className="my-2">Please {isLogin ? 'Login' : 'Register'}</h3>
                    {!isLogin && <div className="row mb-3">
                        
                        <div className="col-sm-10">
                            <input onBlur={handleNameChange} type="text" className="form-control" id="inputName" placeholder="Your Name" />
                        </div>
                    </div>}
                    <div className="row mb-3">
                        
                        <div className="col-sm-10">
                            <input onBlur={handleEmailChange} type="email" placeholder="Your Email" className="form-control" id="inputEmail3" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                       
                        <div className="col-sm-10">
                            <input onBlur={handlePasswordChange} type="password"placeholder="Your PassWord" className="form-control" id="inputPassword3" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                                <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                    Allready Registerd?
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3 text-danger">{error}</div>
                    <button type="submit" className="btn btn-primary">
                        {isLogin ? 'Login' : 'Register'}
                    </button>
                    
                    <button className="btn btn-warning mx-1" onClick={signInUsingGoogle}> Google Sign In</button>
                </form>

               
               
               

            </div>
        </div>
    );
};

export default Login;

