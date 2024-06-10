import React, { useState, useEffect } from "react";
import Sidebarr from "./SideBarr";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUserData } from '../../app/actions/updateUserData';
import { ToastContainer, toast } from "react-toastify";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { parsePhoneNumberFromString } from 'libphonenumber-js';

const EditProfile = () => {
  const userDataFromStoreEdit = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState(userDataFromStoreEdit.firstName);
  const [lastName, setLastName] = useState(userDataFromStoreEdit.lastName);
  const [email, setEmail] = useState(userDataFromStoreEdit.email);
  const [phone, setPhone] = useState(userDataFromStoreEdit.phone);
  const [countryCode, setCountryCode] = useState("et");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validatePhoneNumber = (phone, countryCode) => {
    const phoneNumber = parsePhoneNumberFromString(phone, countryCode.toUpperCase());
    return phoneNumber && phoneNumber.isValid();
  };

  const validateFormFields = () => {
    let isValid = true;

    if (!firstName || !/^[a-zA-Z\s]+$/.test(firstName) || firstName.length < 3) {
      setFirstNameError("First name must be at least 3 characters and only letters.");
      isValid = false;
    } else {
      setFirstNameError("");
    }

    if (!lastName || !/^[a-zA-Z\s]+$/.test(lastName) || lastName.length < 3) {
      setLastNameError("Last name must be at least 3 characters and only letters.");
      isValid = false;
    } else {
      setLastNameError("");
    }

    if (!email || !email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!phone || !validatePhoneNumber(phone, countryCode)) {
      setPhoneError("Please enter a valid phone number.");
      isValid = false;
    } else {
      setPhoneError("");
    }
   

    return isValid;
  };

  const handleSaveProfile = (event) => {
    event.preventDefault();
    
    if (!validateFormFields()) {
      return;
    }

    try {
      const updatedUserData = { firstName, lastName, email, phone };
      dispatch(updateUserData(updatedUserData));
      toast.success("Your profile is updated successfully.");

    } catch (error) {
      console.error(error);
      toast.error("Error updating profile. Please try again.");
    }
  };

  useEffect(() => {
    validateFormFields();
  }, [firstName, lastName, email, phone]);


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
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                      validateFormFields();
                    }}
                    placeholder="Enter new first name"
                    className=" py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-10 mr-10 h-10 px-6 border border-gray-300 rounded-full"
                    required
                    autoComplete="name"
                  />
                  <p className="text-red-500">{firstNameError}</p>

                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                      validateFormFields();
                    }}
                    placeholder="Enter new last name"
                    className=" py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-10 mr-10 h-10 px-6 border border-gray-300 rounded-full"
                    required
                    autoComplete="name"
                  />
                  <p className="text-red-500">{lastNameError}</p>

                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      validateFormFields();
                    }}
                    className=" py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-5 ml-10 mr-10 h-10 px-6 border border-gray-300 rounded-full"
                    required
                    autoComplete="email" 
                  />
                  <p className="text-red-500">{emailError}</p>

                  <PhoneInput
                    name="phone"
                    type="number"
                    id="phone"
                    country={"et"}
                    value={phone}
                    onChange={(phone, country) => {
                      setPhone(phone);
                      setCountryCode(country.countryCode);
                      validateFormFields();
                    }}
                    placeholder="Phone"
                    className="py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-5 ml-10 mr-10 h-10 px-6 border border-gray-300 rounded-full"
                  />
                  <p className="text-red-500">{phoneError}</p>



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