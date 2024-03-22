import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import profileData from '../components/profileData';
import { setImagePreview } from '../store/actions/imageAction';
import aba from "../assets/Images/aba.jpg";

const ProfilePage = () => {
  const imagePreview = useSelector((state) => state.image.imagePreview);
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onload = () => {
      dispatch(setImagePreview(reader.result));
    };
    
    reader.readAsDataURL(file);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-md bg-gray-300 text-black rounded-xl p-4">
        <div className="rounded-t-xl flex justify-center items-center">
          <label htmlFor="fileInput">
            <img
              src={imagePreview ? imagePreview : aba}
              alt="profile"
              className="h-32 w-32 rounded-full mt-5 ml-1 cursor-pointer"
            />
          </label>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-4 p-4">
          <p className="font-bold text-5xl text-blue-500">
            {profileData.username}
          </p>
          <p>{profileData.email}</p>
          <div className="mt-10">
            <p>Your phone: {profileData.phone}</p>
          </div>
          <div className='flex justify-center items-center'>
            <Link to="/editprofile">
              <button className="ml-10 text-white bg-blue-500 text-lg px-6 py-1 rounded-xl">
                Edit Profile
              </button>
            </Link>
            <Link to="/changepassword">
              <button className="ml-10 text-white bg-blue-500 text-lg px-6 py-1 rounded-xl">
                Edit Password
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;