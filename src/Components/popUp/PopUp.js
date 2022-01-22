import React from 'react'
import './PopUp.css';
export default function PopUp(props) {
    return (
        <div className='popup-box'>
            <div class="alert" dir='rtl'>
                هذا المستخدم مسجل مسبقا يرجى المحاولة بحساب اخر.
                <span class="closebtn"
                    onClick={() => {
                        props.handleClose();
                        localStorage.removeItem('popUp');
                        props.setPopUp(false);
                    }}
                >
                    &times;
                </span>
            </div>
        </div>
    )
}
