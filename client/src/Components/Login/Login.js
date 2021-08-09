import React from 'react';
import './Login.css'

const Login = ({setCondition}) => {
    const condPopup = (e) => {
        e.preventDefault()
        setCondition(false)
    }
    return (
        <>
            <div className='form__container'>
                <form action="" className='form'>
                    <div className='form__title'>LOGIN 🧤</div>
                    <div>
                        <input type="text" className='input__email reset-input' placeholder='Enter your email..'/>
                        <br/>
                        <input type="password" className='input__password reset-input'
                               placeholder='Enter your password..'/>
                    </div>
                    <div className='form__btn-container'>
                        <a href="#" className='form__btn-container-link'>REGISTER</a>
                        <button className='form__btn-container-btn' onClick={
                            condPopup
                        }>Create</button>
                    </div>
                </form>
            </div>
        </>
    )
};

export default Login;