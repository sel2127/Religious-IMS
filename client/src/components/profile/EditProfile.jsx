import React, { useState, useEffect } from "react";
import Breadcrumb from "../../common/Breadcrumb";
import Sidebarr from "./SideBarr";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUserData } from '../../app/actions/updateUserData';
import { ToastContainer, toast } from "react-toastify";

const EditProfile = () => {

  const userDataFromStoreEdit = useSelector((state) => state.user.userData);
  const dispatch = useDispatch(); // Get the dispatch function from react-redux
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState(userDataFromStoreEdit.firstName);
  const [lastName, setLastName] = useState(userDataFromStoreEdit.lastName);
  const [email, setEmail] = useState(userDataFromStoreEdit.email);
  const [phone, setPhone] = useState(userDataFromStoreEdit.phone);

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validateFormFields = () => {
    let isValid = true;

    if (!firstName ||  !/^[a-zA-Z\s]+$/.test(firstName) || firstName.length < 3) {
      setFirstNameError("First name must be at least 3 characters and only letter ");
      isValid = false;
    } else {
      setFirstNameError("");
    }

    if (!lastName ||  !/^[a-zA-Z\s]+$/.test(lastName) || lastName.length < 3) {
      setLastNameError("Last name must be at least 3 characters long and only letter");
      isValid = false;
    } else {
      setLastNameError("");
    }

    if (!email || !email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!phone || !phone.match(/^(09)[0-9]{8}$/)) {
      setPhoneError("Please enter a valid Ethiopian phone number (09 + 8 digits)");
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
      // Extract form data and update it based on your form structure
      const updatedUserData = { firstName, lastName, email, phone };

      dispatch(updateUserData(updatedUserData)); // Dispatch the action with updated data
    
      toast.success("your profile is updated successfully")
      //   setFirstName('');
      // setLastName('');
      // setEmail('');
      // setPhone('');
      //navigate('/profile')
    } catch (error) {
      console.error(error);
      toast.error("Error updating profile. Please try again.")
    }
  };

  useEffect(() => {
    validateFormFields();
  }, [firstName, lastName, email, phone]);

  return (
    <div className="w-full">
      {/* <Breadcrumb/> */}
      <ToastContainer/>
      <div className=" w-full rounded-lg">
        <h1 className="text-center text-3xl font-bold custom-font mb-4">Edit your profile here</h1>

        <div className="flex flex-col lg:flex-row">
          <div>
            <Sidebarr/>
          </div>
          <div className='lg:w-1/2 m-auto'>
            <div className=" bg-gray-200 rounded-xl flex flex-col h-screen mt-10">
              <div className=" h-full overflow-hidden shadow rounded-lg">
                <form className="space-y-4 flex flex-col text-center lg: w-full mt-10">

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
                    className=" px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-10 mr-10 h-10 px-6 border border-gray-300 rounded-full"
                    required
                    onInput={(e) => {
                      if (e.target.value.length < 3) {
                        e.target.setCustomValidity(
                          "fristname must be at least 3 characters long"
                        );
                      } else {
                        e.target.setCustomValidity("");
                      }
                    }}
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
                    className=" px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-10 mr-10 h-10 px-6 border border-gray-300 rounded-full"
                    required
                    onInput={(e) => {
                      if (e.target.value.length < 3) {
                        e.target.setCustomValidity(
                          "lastname must be at least 3 characters long"
                        );
                      } else {
                        e.target.setCustomValidity("");
                      }
                    }}
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
                    className=" px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-5 ml-10 mr-10 h-10 px-6 border border-gray-300 rounded-full"
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
                  <p className="text-red-500">{emailError}</p>

                  <input
                    name="phone"
                    type="number"
                    id="phone"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      validateFormFields();
                    }}
                    placeholder="Phone"
                    className=" px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-5 ml-10 mr-10 h-10 px-6 border border-gray-300 rounded-full"
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
                  <p className="text-red-500">{phoneError}</p>

                </form>
                <div className="border-gray-200 flex justify-center space-between mt-10">
                  <button
                    id="submit" className="bg-blue-500 text-white text-center px-6 py-1 rounded-3xl" onClick={handleSaveProfile} >
                  Save
                  </button>
                  <button
                    className="bg-red-500 text-white text-center px-6 py-1 rounded-3xl ml-10"
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