import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { setImagePreview } from '../app/actions/imageAction';
import aba from "../assets/Images/aba.jpg";
import SideBarr from "../components/profile/SideBarr";
import { useNavigate } from 'react-router-dom'; 
import { setUserData } from '../app/actions/userAction';



const ProfilePage = () => {
  const imagePreview = useSelector((state) => state.image.imagePreview);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const imageData=reader.result;
      const userId=userData.id;
      const imageInfo={userId,imageData}
      //save image with user id on localstoarge
      localStorage.setItem(`user-${userId}-image`, JSON.stringify(imageInfo));
      dispatch(setImagePreview(imageData));
    };

    reader.readAsDataURL(file);
  };

  // const [userData, setUserData] = useState({});

 

const fetchData = async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5000/api/userinfo', {
      withCredentials: true, // Ensure cookies are sent with the request
    });

    const userData = response.data.user;
    dispatch(setUserData(userData));
  } catch (error) {
    console.error('Error fetching user profile:', error);
  }
};

  useEffect(() => {
    const userId=userData.id;
    const imageData = localStorage.getItem(`user-${userId}-image`);

    if (imageData) {
      dispatch(setImagePreview(JSON.parse(imageData).imageData));
    }

    // Fetch user profile data
    fetchData(dispatch);

   

}, [dispatch]); // Empty dependency array to run only once after mount
// console.log(userData);
  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full">
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
                      className="h-60 w-60 rounded-full mt-10 m-auto cursor-pointer"
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
                    <marquee>እንኳን ደህና መጡ, {userData.firstName} {userData.lastName}</marquee>
                  </p>
                  <p>{userData.email}</p>
                  <div className="mt-10">
                    <p className='text-2xl'>ስልክ: {userData.phone}</p>
                  </div>
                </div>
                <div className="justify-center items-center mt-10">
                  <p className='text-center font-bold text-3xl'>ድህረገጻችንን ስለጎበኙ እናመሰግናለን!</p>
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
