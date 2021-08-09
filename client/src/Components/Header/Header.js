import React, {useState} from 'react';
import './Header.css'
import CreatePost from "../CreatePost/CreatePost";
import {useDispatch, useSelector} from "react-redux";
import {FETCH_DATA_POST} from "../../action/PostActions";
import Register from "../RegisterPopup/Register";
import Login from "../Login/Login";

const Header = () => {
    const dispatch = useDispatch()
    const [openModalCP, setOpenModalCP] = useState(null);
    const [openModalReg, setOpenModalReg] = useState(null);
    const [openModalLog, setOpenModalLog] = useState(null);
    const reduxState = useSelector(state => state)

    const handlerOpenModalCP = (e) => {
        setOpenModalCP(true)
        dispatch(FETCH_DATA_POST())
        e.preventDefault()
    }
    const handlerOpenModalReg = (e) => {
        setOpenModalReg(true)
        // * DISPATCH REG
        e.preventDefault()
    }
    const handlerOpenModalLog = (e) => {
        setOpenModalLog(true)
        // * DISPATCH LOG
        e.preventDefault()
    }
    const {auth} = reduxState
    return (
        <header className='header'>
            <nav className='nav'>
                <div className='nav__logo'>
                    <div className='nav__logo-text'>POST<span>APP</span></div>
                </div>
                <div className='nav__add-post'>
                    {
                        auth ?
                            <button className='reset-btn'
                                    onClick={(e) => handlerOpenModalCP(e)}>
                              Add post
                            </button> :
                            <div>
                                <button className='reset-btn login-btn'
                                        onClick={(e) => handlerOpenModalReg(e)}>Register
                                </button>
                                <button className='reset-btn register-btn'
                                        onClick={(e) => handlerOpenModalLog(e)}>Login
                                < /button>
                            </div>

                    }
                </div>
                {
                    openModalReg ? <Register setCondition={setOpenModalReg}/> : null
                }
                {
                    openModalLog ? <Login setCondition={setOpenModalLog}/> : null
                }
                {
                    openModalCP ? <CreatePost setCondition={setOpenModalCP}/> : null
                }
            </nav>
        </header>
    )
};

export default Header;