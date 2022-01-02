import React, { useState } from 'react'
import SignUp from './SignUp';
function Login() {
    //data from server
    const PersonData = {
        userName: 'tinhtarkhin',
        password: '12345'
    }

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const loginFunc = ()=>{
        console.log('LoginSuccess')
    }

    return (
        <>
            <div className='container'>
                <h2>Welcome to Doc-Pal</h2>
                <form className='login'>
                    <label>My_LogIn
                        <select className='drop_down_btn'>
                        <option value=''>Choose Member</option>
                        <option value='patient'>Patient</option>
                        <option value='doctor'>Doctor</option>
                        </select>                        
                    </label>
                    <br />
                    <label className='label'> Username:
                        <input className='textbox' type='text' placeholder='Enter Username ' onChange={e => setUserName(e.target.value)}></input>
                    </label>
                    <br />
                    <label className='label'> Password:
                        <input className='textbox' type='password' placeholder='Enter Password ' onChange={e => setPassword(e.target.value)}></input>
                    </label>
                    <br />
                    <div className='button'>
                        <button className='btn' value='login' onChange={loginFunc}>LogIn</button>
                        <br />
                        <a className='sign_up' href='/sign-up'>Sign Up</a>
                        <SignUp />
                    </div>
                </form>
            </div>
        </>
    )
}




export default Login;