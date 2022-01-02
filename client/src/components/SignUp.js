import React from 'react'

function SignUp() {
    return (
        <div className='SignUp'>
            <form className='SignUp_form'>
                <h1>
                    Get started with us today! Create your account by filling out the information below.
                </h1>
                <div className='form-inputs'>
                    <label className='username'>UserName :
                        <input type='text' name='username' placeholder='Enter your username' />
                    </label>
                    <br/>
                    <label className='email'>Email :
                        <input type='text' name='email' placeholder='Enter your email address' />
                    </label>
                    <br/>
                    <label className='password'> Create new password:
                        <input type='password' name='password' placeholder='Enter your password' />
                    </label>
                    <br/>
                    <label className='password2'> Confirm password:
                        <input type='password' name='password2' placeholder='ReEnter your new password' />
                    </label>
                    <br/>
                </div>
            </form>
        </div>
    )
}

export default SignUp;