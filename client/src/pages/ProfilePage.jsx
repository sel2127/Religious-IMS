import React from "react";
import { useSelector, useDispatch } from "react-redux";
import profileData from "../components/profileData";
import { setImagePreview } from "../store/actions/imageAction";
import aba from "../assets/Images/aba.jpg";
import Breadcrumb from "../common/Breadcrumb";
import { Link } from "react-router-dom";

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
    <div>
      <Breadcrumb />

      <div className="w-full  m-auto flex flex-col md:flex-row justify-center items-center rounded-xl p-4">
        <div className="w-full md:w-1/2 h-auto md:h-full overflow-hidden shadow rounded-lg border-4 flex flex-col md:mr-4">
          <div className="w-full max-w-md text-black rounded-xl p-4">
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
              <p className="font-bold text-5xl text-blue-500">
                {profileData.username}
              </p>
              <p>{profileData.email}</p>
              <div className="mt-10">
                <p>Your phone: {profileData.phone}</p>
              </div>
              <div className="flex justify-center items-center">
                <Link to="/changepassword">
                  <button className="text-white bg-blue-500 text-lg px-6 py-1 rounded-xl">
                    Edit Password
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-auto h-auto md:h-full overflow-hidden shadow rounded-lg border-4 mt-4 md:mt-0">
          <div className="mt-10 px-4 py-5 sm:px-6">
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
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  John Doe
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Email address</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  johndoe@example.com
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Phone number</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                 0987654321
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Address</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  kaliti
                  <br />
                 Addis Ababa, Ethiopia 
                </dd>
              </div>
            </dl>
          </div>
          <div className="flex mt-10 justify-center items-center">
            <Link to="/editprofile">
              <button className="ml-10 text-white bg-blue-500 text-lg px-6 py-1 rounded-xl">
                Edit Profile
              </button>
            </Link>
            <Link to="/logout">
              <button className="ml-10 text-white bg-red-300 text-lg px-6 py-1 rounded-xl">
                Logout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;