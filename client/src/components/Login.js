import React, {useState, useEffect} from 'react'
import SignUp from './SignUp'
function Login() {
    //data from server
    const initialValues = {member:"", username:"", password:""};
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
        
        if(Object.keys(formErrors).length===0 & isSubmit){
            console.log(details);
            //fetch data from patient side
            if(details.member==='patient'){
                fetch('http://localhost:3000/patients')
                .then(res => res.json())
                .then(data => setDetails({data}));
            }
            //fetch data from doctor side
            if(details.member==='doctor'){
                fetch('http://localhost:3000/doctors/:')
                .then(res => res.json())
                .then(data => setDetails({data}));
            }
            //need to match data with fetched data, if ok, then render to another page
        }        
    })

    const validate = (values) =>{
        const errors={};
        const regex = /^[^s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.member){
            errors.member="Please choose either patient or doctor"
        }
        if(!values.username){
            errors.username= "Username is required"
        }
        if(!values.password){
            errors.password="Password is required"
        }
        return errors;
    };

    return (
        <div className='container'>
            <h2>Welcome to Doc-Pal</h2>
            <form className='login' onSubmit={submitHandler}>
                <label>My_LogIn
                    <select className='drop_down_btn' name='member' onChange={handleChange} value={details.member}>
                    <option value=''>Choose Member</option>
                    <option value='patient'>Patient</option>
                    <option value='doctor'>Doctor</option>
                    </select>              
                    <p className='error_msg'>{formErrors.member}</p>          
                </label>
                
                <br />
                <label className='label'> Username:
                    <input className='textbox' type='text' name='username' placeholder='Enter Username' onChange={handleChange} value={details.username}></input>
                </label>
                <p className='error_msg'>{formErrors.username}</p>
                <br />
                <label className='label'> Password:
                    <input className='textbox' type='password' name='password' placeholder='Enter Password' onChange={handleChange} value={details.password}></input>
                </label>
                <p className='error_msg'>{formErrors.password}</p>
                <br />
                <div className='button'>
                    <button className='btn' value='login'>LogIn</button>
                    <br />
                    <a className='sign_up' href='./SignUp'>Sign Up</a>
                </div>
            </form>
        </div>
    )
}

export default Login;