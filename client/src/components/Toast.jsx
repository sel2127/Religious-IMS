import React from 'react';
import { toast, ToastContainer, cssTransition } from 'react-toastify';

const Fade = cssTransition({
    enter: 'fade-enter',
    exit: 'fade-exit',
});

export const Toast = () => {
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                transition={Fade}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default toast; // Export the toast function
