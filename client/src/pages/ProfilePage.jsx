import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import profileData from "../components/profileData";
import { setImagePreview } from '../store/reducers/imageReducer';
import aba from "../assets/Images/aba.jpg";
import Breadcrumb from "../common/Breadcrumb";
import { Link } from "react-router-dom";
import SideBarr from "../components/profile/SideBarr";



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

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Check if image data exists in localStorage
    const savedImagePreview = localStorage.getItem("imagePreview");
  
    if (savedImagePreview) {
      dispatch(setImagePreview(savedImagePreview));
    }
  
    fetch('/api/profile')
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error('Error fetching user profile:', error));
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full">
      <Breadcrumb />
      <div className=" w-full rounded-lg">
        <div className="flex flex-col lg:flex-row">
          {/* sidebar */}
          <div>
            <SideBarr />
          </div>
          <div className='lg:w-1/2 m-auto'>

          <div className="   flex flex-col  h-screen mt-10">
            <div className=" h-full overflow-hidden shadow bg-gray-200 rounded-lg">
              <div className="rounded-t-xl flex justify-center items-center">
                <label htmlFor="fileInput">
                  <img
                    src={imagePreview ? imagePreview : aba}
                    alt="profile"
                    className="h-75 w-75 rounded-full mt-10 m-auto cursor-pointer"
                  />
                </label>
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="font-bold text-xl text-dark-blue">
                  <marquee>Wellcome, {profileData.username}</marquee>
                </p>
                <p>{profileData.email}</p>
                <div className="mt-10">
                  <p>Your phone: {profileData.phone}</p>
                </div>
              </div>
              <div className="justify-center items-center mt-10">
                <p className='text-center font-bold text-4xl'>Thank you for visiting our website</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
