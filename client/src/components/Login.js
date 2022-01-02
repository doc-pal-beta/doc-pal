import React, {useState} from 'react'
import SignUp from './SignUp'
function Login({login, error}) {
    //data from server
    const [details, setDetails] = useState({
        member:'',
        username:'',
        password:''
    })
    
    const submitHandler = e =>{
        e.preventDefault();
        login(details);
    }



    return (
        <div className='container'>
            <h2>Welcome to Doc-Pal</h2>
            <form className='login' onSubmit={submitHandler}>
                <label>My_LogIn
                    <select className='drop_down_btn' onChange={e => setDetails({...details, member: e.target.value})} value={details.member}>
                    <option value=''>Choose Member</option>
                    <option value='patient'>Patient</option>
                    <option value='doctor'>Doctor</option>
                    </select>                        
                </label>
                <br />
                <label className='label'> Username:
                    <input className='textbox' type='text' placeholder='Enter Username' onChange={e => setDetails({...details, username: e.target.value})} value={details.username}></input>
                </label>
                <br />
                <label className='label'> Password:
                    <input className='textbox' type='password' placeholder='Enter Password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
                </label>
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