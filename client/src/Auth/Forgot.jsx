import React, { useContext } from 'react';
import axios from 'axios';
import '../assets/styles/main.css';
import { useNavigate } from 'react-router-dom';
import { RecoveryContext } from "../App";

const Forgot = () => {
    const { setEmail, email, setOTP } = useContext(RecoveryContext);
    const navigate = useNavigate();

    function navigateToOtp() {
        if (email) {
            const OTP = Math.floor(Math.random() * 9000 + 1000);
            setOTP(OTP);

            axios.post("http://localhost:5000/send_recovery_email", {
                OTP,
                recipient_email: email,
            })
            .then(response => {
                console.log(response.data); // Log the response for debugging
                navigate('/otpinput');
            })
            .catch(error => {
                console.error(error);
                alert("There was an error sending the email. Please try again.");
            });
            return;
        }
        return alert("Please enter your email");
    }

    return (
        <div>
            <div className='mx-auto border border-gray-300 w-1/2 mt-10 rounded rounded-3xl text-gray-600'>
                <div className='flex flex-col items-center justify-center p-10'>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder='ኢሜል'
                        className='mt-10 w-full h-10 px-6 border border-gray-300 rounded-full'
                    />
                    <div className="mt-6 w-1/2 bg-dark-blue border border-gray-200 rounded-full h-10 flex items-center">
                        <button
                            className="w-full mx-auto text-base font-bold text-white"
                            onClick={navigateToOtp}
                        >
                            ግባ
                        </button>
                    </div>
                    <div className='mx-auto underline decoration-dotted mt-4 cursor-pointer hover:text-[#79a6d2]'>
                        <a href="/login">ወደመግቢያው ተመለስ</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Forgot;