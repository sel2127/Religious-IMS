import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setImagePreview } from "../app/reducers/imageReducer";
import profile from "../assets/Images/profile.png";
import SideBarr from "../components/profile/SideBarr";
import { setUserData } from "../app/actions/userAction";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProfilePage = () => {
  const imagePreview = useSelector((state) => state.image.imagePreview);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      dispatch(setImagePreview(reader.result));
    };

    reader.readAsDataURL(file);
  };

  const userData = useSelector((state) => state.user.userData);

const fetchData = async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5000/api/userinfo', {
      withCredentials: true, // Ensure cookies are sent with the request
    });

      const userData = response.data.user;
      dispatch(setUserData(userData));
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error("Error fetching user profile:", error);
        // Redirect to login page or display an error message
        navigate("/login"); // Adjust redirection if needed
      }
    }
  };

  useEffect(() => {
    // Check if image data exists in localStorage
    const savedImagePreview = localStorage.getItem("imagePreview");

    if (savedImagePreview) {
      dispatch(setImagePreview(savedImagePreview));
    }

    // Fetch user profile data
    fetchData(dispatch);
  }, [dispatch]); // Empty dependency array to run only once after mount
  // console.log(userData);
  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full bg-gray-100 py-10">
      <div className=" w-full rounded-lg">
        <div className="flex flex-col lg:flex-row">
          {/* sidebar */}
          <div>
            <SideBarr />
          </div>
          <div className="lg:w-1/2 mx-auto">
            <div className="flex flex-col">
              <div className="h-full overflow-hidden bg-white shadow py-10 rounded-lg">
                <div className="rounded-t-xl flex justify-center items-center">
                  <label htmlFor="fileInput">
                    <img
                      src={imagePreview ? imagePreview : profile}
                      alt="profile"
                      className="w-[100px] h-[100px] rounded-full mx-auto cursor-pointer"
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
                <div className="mt-8 text-center">
                  <p className="text-base font-bold">
                    {t('pic')}
                  </p>
                </div>
                <div className="flex flex-col text-base justify-center items-center gap-4 p-4">
                  <p className="font-bold text-xl text-dark-blue">
                    <marquee>
                    {t('wel')}{userData.firstName} {userData.lastName}
                    </marquee>
                  </p>
                  <div>
                    <div>
                      <p>{t('name')}: {userData.firstName} {userData.lastName}</p>
                    </div>
                    <div>
                      <p>{t('email')}: {userData.email}</p>
                    </div>
                    <div className="">
                      <p>{t('phone_number')}: {userData.phone}</p>
                    </div>
                  </div>
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
