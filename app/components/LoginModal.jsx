import '../ui/loginModal.css';

const LoginModal = ({ isOpen, onClose }) => {
    if (!isOpen)
        return null;

    return (
        <div className='modalOverlay' onClick={onClose}>
            <div className='modalContent' onClick={(e) => e.stopPropagation()}>
                <input type="text" placeholder='username' />
                <input type="password" placeholder='password' />
                <button>Login</button>
                <button className='closeButton' onClick={onClose}>
                    Back
                </button>
            </div>
        </div>
    );
};

export default LoginModal;