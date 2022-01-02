import React, {useState} from 'react'

function SignUp({login}) {

    const [details, setDetails] = useState({
        username:'',
        email:'',
        password:'',
        password2:''
    })
    
    const submitHandler = e =>{
        e.preventDefault();
        login(details);
    }
    return (
        <div className='container'>
            <h2></h2>
            <form className='SignUp' onSubmit={submitHandler}>Create Account
                <br/>
                <label className='label'> Username:
                    <input className='textbox' type='text' placeholder='Enter Username' onChange={e => setDetails({...details, username: e.target.value})} value={details.username}></input>
                </label>
                <br />
                <label className='label'> Email :
                    <input className='textbox' type='text' placeholder='Enter Email' onChange={e => setDetails({...details, email: e.target.value})} value={details.email}></input>
                </label>
                <br />
                <label className='label'> Password:
                    <input className='textbox' type='password' placeholder='Enter Password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
                </label>
                <br />
                <label className='label'> Password:
                    <input className='textbox' type='password' placeholder='Re-Enter Password' onChange={e => setDetails({...details, password2: e.target.value})} value={details.password2}></input>
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