import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import profileData from "../components/profileData";
import { setImagePreview } from "../store/actions/imageAction";
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
      {/* <Breadcrumb /> */}
      <div className="bg-white-100 w-full m-auto rounded-lg">
        <div className="flex flex-col lg:flex-row">
          {/* sidebar */}
          <div>
            <SideBarr />
          </div>

          <div className="  lg:w-full md:w-2/3 flex flex-col  h-screen">
            <div className=" h-full overflow-hidden shadow  rounded-lg">
              <div className="rounded-t-xl flex justify-center items-center">
                <label htmlFor="fileInput">
                  <img
                    src={imagePreview ? imagePreview : aba}
                    alt="profile"
                    className="h-44 w-44 rounded-full mt-10 m-auto cursor-pointer"
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
              <div className="justify-center items-center">
                <Link
                  to="/password"
                  className="flex items-center justify-center  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    class="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                    className=" bg-red-400 hover:bg-dark-blue"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fill-rule="evenodd"
                      fill-color="blue"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="  lg:w-full flex flex-col  h-screen">
            <div className=" h-full overflow-hidden shadow  rounded-lg">
              <div className="mt-10 px-2 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  User Profile
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  This is some information about your.
                </p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Full name
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      John Doe
                    </dd>
                  </div>
                  <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Email address
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {userData.email}
                    </dd>
                  </div>
                  <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Phone number
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      0987654321
                    </dd>
                  </div>
                  <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Address
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      kaliti
                      <br />
                      Addis Ababa, Ethiopia
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
