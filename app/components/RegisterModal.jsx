import '../ui/registerModal.css';
import { useState } from 'react';

const RegisterModal = ({ isOpen, onClose }) => {
    if (!isOpen)
        return null;

    const [inputType, setInputType] = useState("password");

    const handleTogglePassword = () => {
        setInputType((prevType) => (prevType === "password" ? "text" : "password"));
    };

    return (
        <div className='modalOverlay' onClick={onClose}>
            <div className='modalContent' onClick={(e) => e.stopPropagation()}>
                <input type="text" placeholder='First name' />
                <input type="text" placeholder='Last name' />
                <input type="email" placeholder='Email' />
                <input type="text" placeholder='Username' />
                <div className="createPassword">
                    <input type={inputType} placeholder='Password' />
                    <button onClick={handleTogglePassword}>
                        {inputType === "password" ? "Show" : "Hide "}
                    </button>
                </div>
                <button>Register</button>
                <button className='closeButton' onClick={onClose}>
                    Back
                </button>
            </div>
        </div>
    );
};

export default RegisterModal;