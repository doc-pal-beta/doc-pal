import React, {useState, useEffect} from 'react'

function SignUp() {

    const initialValues = {username:"", email:'', password:"", password2:""};
    const [details, setDetails] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setSubmit] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setDetails({...details, [name]:value});
    }
    
    const submitHandler = e =>{
        e.preventDefault();
        setFormErrors(validate(details));
        setSubmit(true);
    }    

    useEffect(()=>{
        console.log(formErrors);
        if(Object.keys(formErrors).length===0 & isSubmit){
            console.log(details);
            //fetch from server and update new data
            fetch('http://localhost:3000/doctors',
            {
                method: 'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(details)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        }
    })
    const validate = (values) =>{
        const errors={};
        const regex = "/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/";
    
        if(!values.username){
            errors.username= "Username is required"
        }
        if(!values.email){
            errors.email= "Email address is required"
        }
        
        if(!values.password){
            errors.password="Password is required"
        }
        if(!values.password2){
            errors.password2="Confirmation Password is required"
        }
        if(values.password !== values.password2){
            errors.password2="Password didn't match"
        }
        return errors;
    };
    return (
        <div className='container'>
            <h2></h2>
            <form className='SignUp' onSubmit={submitHandler}>Create Account
                <br/>
                <p className='error_msg'>{formErrors.username}</p>
                <label className='label'> Username:
                    <input className='textbox' type='text' name='username' placeholder='Enter Username' onChange={handleChange}></input>
                </label>
                <br />
                <p className='error_msg'>{formErrors.email}</p>
                <label className='label'> Email :
                    <input className='textbox' type='text' name='email' placeholder='Enter Email' onChange={handleChange} value={details.email}></input>
                </label>
                <br />
                <p className='error_msg'>{formErrors.password}</p>
                <label className='label'> Password:
                    <input className='textbox' type='password' name='password' placeholder='Enter Password' onChange={handleChange} value={details.password}></input>
                </label>
                <br />
                <p className='error_msg'>{formErrors.password2}</p>
                <label className='label'> Password:
                    <input className='textbox' type='password' name='password2' placeholder='Re-Enter Password' onChange={handleChange} value={details.password2}></input>
                </label>
                <br />
                <div className='button'>
                    <button className='btn' value='SignUp'>SignUp</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp;