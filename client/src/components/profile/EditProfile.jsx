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
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const updatedUserData = { firstName, lastName, email, phone };

    dispatch(updateUserData(updatedUserData)); // Dispatch the action with updated data
    navigate('/profile')
  };

  return (
    <div className="w-full bg-gray-100 py-10">
      <div className=" w-full rounded-lg">
        <div className="flex flex-col lg:flex-row md:flex-row">
          <div>
            <Sidebarr />
          </div>
          <div className='lg:w-1/2 mx-auto'>
            <div className="bg-white rounded-xl  flex flex-col">
              <div className=" h-full overflow-hidden shadow rounded-lg py-10">
                <form className="space-y-4  flex flex-col  text-center lg: w-full ">

                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    defaultValue={userDataFromStoreEdit.firstName}
                    placeholder="Enter new first name"
                    className="border rounded-3xl px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500
         ml-10 mr-10  h-10 px-6 border border-gray-300  rounded-full"
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
                    className="border rounded-3xl px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500
         ml-10 mr-10  h-10 px-6 border border-gray-300  rounded-full"
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
                    className="border rounded-3xl px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500
                   mt-5 ml-10 mr-10  h-10 px-6 border border-gray-300  rounded-full"
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
                    type="number"
                    id="phone"
                    defaultValue={userDataFromStoreEdit.phone}
                    placeholder="Phone"
                    className="border rounded-3xl px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500
                  mt-5 ml-10 mr-10 h-10 px-6 border border-gray-300 rounded-full"
                    minLength={10}
                    maxLength={10}
                    onInput={(e) => {
                      const ethiopianPattern1 = /^(09)[0-9]{8}$/;
                      //   const ethiopianPattern2 = /^\+251[0-9]{9}$/;// +251 + 9 digits

                      if (!ethiopianPattern1.test(e.target.value)) {
                        e.target.setCustomValidity(
                          "Please enter a valid Ethiopian phone number (09 + 8 digits )"
                        );
                      } else {
                        e.target.setCustomValidity("");
                      }
                    }}
                  />


                </form>
                <div className="border-gray-200  flex justify-center space-between  mt-10">
                  <button
                    id="submit" className="bg-[#2d5986] hover:bg-[#79a6d2] text-white text-center  px-6 py-1 rounded-3xl " onClick={handleSaveProfile} >
                    Save
                  </button>
                  <button
                    className="bg-red-600 hover:bg-red-400 text-white text-center  px-6 py-1 rounded-3xl ml-10"
                    onClick={() => window.history.back()}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;