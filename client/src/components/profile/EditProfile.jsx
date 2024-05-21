import React from "react";
import Sidebarr from "./SideBarr";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUserData } from '../../app/actions/updateUserData';

const EditProfile = () => {

  const userDataFromStoreEdit = useSelector((state) => state.user.userData);
  const dispatch = useDispatch(); // Get the dispatch function from react-redux
  const navigate = useNavigate();

  const handleSaveProfile = async (event) => {
    event.preventDefault();
    
    // Extract form data and update it based on your form structure
    const firstName= document.getElementById('firstName').value;
    const lastName= document.getElementById('lastName').value;
    const email= document.getElementById('email').value;
    const phone= document.getElementById('phone').value;

    const updatedUserData = { firstName, lastName, email, phone };

    dispatch(updateUserData(updatedUserData)); // Dispatch the action with updated data
    navigate('/profile')
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-center text-3xl font-bold custom-font mb-4">Edit your profile here</h1>

      <div className="flex flex-row space-x-8 lg:flex-row w-full lg:w-3/4">
        <Sidebarr className="lg:w-1/4" />
        <div className='lg:w-3/4 flex justify-center items-center'>

          <div className="bg-gray-200 rounded-xl p-8 shadow-lg">
            <form className="space-y-4 flex flex-col text-center w-full" onSubmit={handleSaveProfile}>

              <input
                type="text"
                id="firstName"
                name="firstName"
                defaultValue={userDataFromStoreEdit.firstName}
                placeholder="Enter new first name"
                className="border rounded-3xl px-6 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                onInput={(e) => {
                  if (e.target.value.length < 3) {
                    e.target.setCustomValidity(
                      "Username must be at least 3 characters long"
                    );
                  } else {
                    e.target.setCustomValidity("");
                  }
                }}
                autoComplete="name"
              />

              <input
                type="text"
                id="lastName"
                name="lastName"
                defaultValue={userDataFromStoreEdit.lastName}
                placeholder="Enter new last name"
                className="border rounded-3xl px-6 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                onInput={(e) => {
                  if (e.target.value.length < 3) {
                    e.target.setCustomValidity(
                      "Username must be at least 3 characters long"
                    );
                  } else {
                    e.target.setCustomValidity("");
                  }
                }}
                autoComplete="name"
              />

              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                defaultValue={userDataFromStoreEdit.email}
                className="border rounded-3xl px-6 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onInput={(e) => {
                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  if (!e.target.value.match(emailRegex)) {
                    e.target.setCustomValidity(
                      "Please enter a valid email address"
                    );
                  } else {
                    e.target.setCustomValidity("");
                  }
                }}
                required
                autoComplete="email" 
              />

              <input
                name="phone"
                type="text"
                id="phone"
                defaultValue={userDataFromStoreEdit.phone}
                placeholder="Phone"
                className="border rounded-3xl px-6 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onInput={(e) => {
                  const ethiopianPattern1 = /^(09)[0-9]{8}$/;

                  if (!ethiopianPattern1.test(e.target.value)) {
                    e.target.setCustomValidity(
                      "Please enter a valid Ethiopian phone number (09 + 8 digits)"
                    );
                  } else {
                    e.target.setCustomValidity("");
                  }
                }}
              />

              <div className="flex justify-center space-x-4 mt-6">
                <button
                  id="submit" className="bg-blue-500 text-white px-6 py-2 rounded-3xl"
                  type="submit"
                >
                  Save
                </button>
                <button
                  className="bg-red-500 text-white px-6 py-2 rounded-3xl"
                  onClick={() => window.history.back()}
                >
                  Cancel
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
