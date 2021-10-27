import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
        <div className="contact container">
            <h3>ContactUs</h3>
            <form className='my-5'>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" className="form-control" id="exampleInputname" aria-describedby="nameHelp" placeholder="Enter your name"/>
                
            </div>
            <div class="mb-3 ">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email"/>
            
            </div>
            <div class="mb-3">
                <label for="exampleInputText" class="form-label">Message</label>
                <textarea type="text" className="form-control" id="exampleInputPassword1" placeholder="Message"/>
            </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

<div className="container">
    <h2>Stay Connected</h2>
    <div className="social">
        <div>
            <a href=''><i class="fab fa-facebook-f"></i></a>
        </div>
        <div>
        <a href=''><i class="fab fa-twitter"></i></a>
        </div>
        <div>
        <a href=''><i class="fab fa-instagram"></i></a>
        </div>
    </div>
</div>
</div>
    );
};

export default Contact;