import React from 'react';
import "./Contact.css"
// import background from 'module';
const Contact = () => {
    return (
        <div className="contact container">
            <h3>ContactUs</h3>
            <form className='my-5'>
            <div className="mb-3">
                <label for="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleInputname" aria-describedby="nameHelp" placeholder="Enter your name"/>
                
            </div>
            <div className="mb-3 ">
                <label htmlfor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email"/>
            
            </div>
            <div className="mb-3">
                <label htmlfor="exampleInputText" className="form-label">Message</label>
                <textarea type="text" className="form-control" id="exampleInputPassword1" placeholder="Message"/>
            </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

<div className="container">
    <h2>Stay Connected</h2>
    <div className="social">
        <div>
            <a href='#'><i className="fab fa-facebook-f"></i></a>
        </div>
        <div>
        <a href='#'><i className="fab fa-twitter"></i></a>
        </div>
        <div>
        <a href='#'><i className="fab fa-instagram"></i></a>
        </div>
    </div>
</div>
</div>
    );
};

export default Contact;