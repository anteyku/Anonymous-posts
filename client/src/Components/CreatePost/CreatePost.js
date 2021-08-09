import React from 'react';
import './CreatePost.css'

const CreatePost = ({setCondition}) => {
    const condPopup = (e) => {
        e.preventDefault()
        setCondition(false)
    }
    return (
        <>
            <div className='form__container'>
                <form className='form'>
                    <div className='form__title'>Hello!
                        <br/>
                        You want create anon post?
                    </div>
                    <div>
                        <textarea name='postvalue' type="text" className='from-post__text reset-input'
                                  placeholder='Enter your text  📢'/>
                    </div>
                    <div>
                        <button className='form__btn reset-input' onClick={
                            condPopup
                        }>Send!
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
};

export default CreatePost;