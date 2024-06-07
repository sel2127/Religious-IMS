import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer,cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-input-2/lib/style.css";
import "../assets/styles/member.css";
import PhoneInput from "react-phone-input-2";
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { setUserData } from '../app/actions/userAction';
import { useDispatch,useSelector } from "react-redux";

function MemberRegistrationPage() {
  const userDataFromStoreEdit = useSelector((state) => state.user.userData);

  const [firstName, setFirstName] = useState(userDataFromStoreEdit.firstName);
  const [lastName, setLastName] = useState(userDataFromStoreEdit.lastName);
  const [bapiname, setBapiname] = useState("");
  const [fathername, setFathername] = useState("");
  const [adress, setAdress] = useState("");
  const [email, setEmail] = useState(userDataFromStoreEdit.email);
  const [phone, setPhone] = useState(userDataFromStoreEdit.phone);
  const [countryCode, setCountryCode] = useState("et");
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  const validatePhoneNumber = (phone, countryCode) => {
    const phoneNumber = parsePhoneNumberFromString(phone, countryCode.toUpperCase());
    return phoneNumber && phoneNumber.isValid();
  };

  const validateForm = () => {
    const errors = {};
    if (!firstName || !/^[a-zA-Z\s]+$/.test(firstName) || firstName.length < 3) {
      errors.firstName = "First name must only contain letters and at least 3 characters";
    }
    if (!lastName || !/^[a-zA-Z\s]+$/.test(lastName)) {
      errors.lastName = "Last name must only contain letters";
    }
    if (!bapiname || !/^[a-zA-Z\s]+$/.test(bapiname)) {
      errors.bapiname = "Bapiname must only contain letters";
    }
    if (!fathername || !/^[a-zA-Z\s]+$/.test(fathername)) {
      errors.fathername = "Fathername must only contain letters";
    }
    if (!adress || adress.length < 3) {
      errors.adress = "Address must be at least 3 characters long";
    }
    if (!email.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)) {
      errors.email = "Please enter a valid email address";
    }
    if (!phone || !validatePhoneNumber(phone, countryCode)) {
      errors.phone = "Please enter a valid phone number";
    }
    if (!gender) {
      errors.gender = "Please select a gender";
    }

    setErrors(errors);
    return Object.keys(errors).length > 0;
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setBapiname("");
    setFathername("");
    setAdress("");
    setEmail("");
    setPhone("");
    setCountryCode("et");
    setGender("");
    setErrors({});
    setErrorMessage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    // Validate form
    if (validateForm()) {
      return;
    }
  
    // Send data to backend API
    try {
      const response = await axios.post(
        "http://localhost:5000/api/member/create",
        { firstName, lastName, bapiname, fathername, adress, email, phone, gender }
      );
      if (response.data.message === 'Member registered successfully') {
        toast.success('Member registered successfully');
        resetForm();
      } else {
        throw new Error("Unexpected response from server");
      }
    } 
    catch (error) {
      //console.log(error); // Log the error object for debugging purposes
      if (error.response && error.response.data && error.response.data.error === 'User has already registered') {
        toast.warn('You have already registered');
        resetForm();
      } else {
        toast.error("Error for registration, please try again!");
      }
    }
  };
  const userData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();

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
  useEffect(()=>{
    fetchData(dispatch);
  })
  // const Fade = cssTransition({
  //   enter: "fade-enter",
  //   exit: "fade-exit",
  // });

  return (
    <div className="container ">
<ToastContainer
        position="top-right"
        closeOnClick
      />      <div className="justify-center items-center mt-8">
        <h1 className="text-xl font-bold px-10 ml-10 sm:text-base sm:px-0">የቤተክርስቲያን የሰበካ ጉባኤ አባልነት ቅጽ</h1>
      </div>
      <div className="mx-auto border border-gray-300 w-1/2 mt-10 rounded rounded-3x1 text-gray-600">
        <div className="flex flex-col items-center justify-center  px-20 py-10 form-field">
          <input
            type="text"
            id="fristname"
            name="fristname"
            placeholder="የእርስዎ ስም"
            className="w-full h-10 px-6 text-gray-600 border border-gray-300 rounded-full mt-10"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="የአባት ስም"
            className="w-full h-10 px-6 text-gray-600 border border-gray-300 rounded-full mt-10"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
         
          <input
            type="email"
            placeholder="ኢሜል"
            id="email"
            className="w-full h-10 px-6 text-gray-600 border border-gray-300 rounded-full mt-10"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          <PhoneInput
            country={"et"}
            value={phone}
            onChange={(phone, country) => {
              setPhone(phone);
              setCountryCode(country.countryCode);
            }}
            placeholder="ስልክ"
            inputClass="lg:w-full h-10 px-6 text-gray-600 border border-gray-300 rounded-full mt-10 mb-5"
            className="lg:w-full h-10 px-6 text-gray-600 border border-gray-300 rounded-full mt-10 mb-5"

            enableAreaCodes={true}
            disableDropdown={false}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          <input
            type="text"
            id="bapiname"
            name="bapiname"
            placeholder="የክርስትና ስም"
            className="w-full h-10 px-6 text-gray-600 border border-gray-300 rounded-full mt-10"
            value={bapiname}
            onChange={(e) => setBapiname(e.target.value)}
            required
          />
          {errors.bapiname && <p className="text-red-500 text-sm">{errors.bapiname}</p>}
          <input
            type="text"
            id="fathername"
            name="fathername"
            placeholder="የንስሃ አባት ስም"
            className="w-full h-10 px-6 text-gray-600 border border-gray-300 rounded-full mt-10"
            value={fathername}
            onChange={(e) => setFathername(e.target.value)}
            required
          />
          {errors.fathername && <p className="text-red-500 text-sm">{errors.fathername}</p>}
          <input
            type="text"
            id="adress"
            name="adress"
            placeholder="የመኖሪያ አድራሻ"
            className="w-full h-10 px-6 text-gray-600 border border-gray-300 rounded-full mt-10"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
            required
          />
          {errors.adress && <p className="text-red-500 text-sm">{errors.adress}</p>}
          
         
          <select
            className="w-full h-10 px-6 text-gray-600 border border-gray-300 rounded-full mt-10"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">እባኮትን ፆታዎን ይምረጡ</option>
            <option value="male">ወንድ</option>
            <option value="female">ሴት</option>
          </select>
          {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
          <button
            type="submit"
            className="w-full h-10 bg-blue-500 text-white rounded-full mt-10"
            onClick={handleSubmit}
          >
            ይመዝገቡ
          </button>
          {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default MemberRegistrationPage;