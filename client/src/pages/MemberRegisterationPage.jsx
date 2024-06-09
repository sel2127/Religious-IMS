import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setUserData } from '../app/actions/userAction';
import Contact from '../assets/Images/contact.jpg';

function ContactUS() {
    const userDataFromStore = useSelector((state) => state.user.userData);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    useEffect(() => {
        const fetchData = async (dispatch) => {
            try {
                const response = await axios.get('http://localhost:5000/api/userinfo', {
                    withCredentials: true, // Ensure cookies are sent with the request
                });

                const userData = response.data.user;
                dispatch(setUserData(userData));
                setFormData({
                    name: userData.firstName + ' ' + userData.lastName,
                    email: userData.email,
                    phone: userData.phone,
                    message: '',
                });
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };

        fetchData(dispatch);
    }, [dispatch]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/contact/send', formData);
            if (response.data.success) {
                alert('Message sent successfully!');
                setFormData({ ...formData, message: '' });
            } else {
                alert('Failed to send message');
            }
        } catch (error) {
            console.error('There was an error sending the message!', error);
            alert('There was an error sending the message!');
        }
    };

    return (
        <div className="w-full mt-10">
            <div className="flex gap-8 justify-content items-center">
                <div className="w-1/2 flex justify-center">
                    <img src={Contact} alt="contact" className="w-full" />
                </div>
                <div className="w-1/2 flex flex-col gap-y-10 items-center justify-start">
                    <form className="w-3/4" onSubmit={handleSubmit}>
                        <div className="w-3/4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name*"
                                value={formData.name}
                                onChange={handleChange}
                                className="border-b border-gray-200 w-full placeholder-black-300 text-sm"
                                required
                                readOnly
                            />
                        </div>
                        <div className="w-3/4">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email*"
                                value={formData.email}
                                onChange={handleChange}
                                className="border-b border-gray-200 w-full placeholder-black-300 text-sm"
                                required
                                readOnly
                            />
                        </div>
                        <div className="w-3/4">
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone Number*"
                                value={formData.phone}
                                onChange={handleChange}
                                className="border-b border-gray-200 w-full placeholder-black-300 text-sm"
                                required
                                readOnly
                            />
                        </div>
                        <div className="w-3/4">
                            <textarea
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                className="border-b border-gray-200 w-full placeholder-black-300 text-sm"
                                required
                            ></textarea>
                        </div>
                        <div className="flex w-full justify-center items-center">
                            <button
                                type="submit"
                                className="bg-[#2d5986] w-1/6 h-8 hover:bg-[#79a6d2] text-white text-center rounded-full transform hover:scale-110"
                            >
                                ላክ
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUS;
