import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/styles/member.css";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { useSelector } from "react-redux";

function MemberRegisterationPage() {
  const userDataFromStoreEdit = useSelector((state) => state.user.userData);

  const [firstName, setFirstName] = useState(userDataFromStoreEdit.firstName);
  const [lastName, setLastName] = useState(userDataFromStoreEdit.lastName);
  const [adress, setAdress] = useState("");
  const [email, setEmail] = useState(userDataFromStoreEdit.email);
  const [phone, setPhone] = useState(userDataFromStoreEdit.phone);
  const [countryCode, setCountryCode] = useState("et");
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  const validatePhoneNumber = (phone, countryCode) => {
    const phoneNumber = parsePhoneNumberFromString(
      phone,
      countryCode.toUpperCase()
    );
    return phoneNumber && phoneNumber.isValid();
  };

  const validateForm = () => {
    const errors = {};
    if (
      !firstName ||
      !/^[a-zA-Z\s]+$/.test(firstName) ||
      firstName.length < 3
    ) {
      errors.firstName =
        "First name must only contain letters and at least 3 characters";
    }
    if (!lastName || !/^[a-zA-Z\s]+$/.test(lastName)) {
      errors.lastName = "Last name must only contain letters";
    }

    if (!adress || adress.length < 3) {
      errors.adress = "Address must be at least 3 characters long";
    }
    if (
      !email.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
    ) {
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
    setAdress("");
    setEmail("");
    setPhone("");
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
        { firstName, lastName, adress, email, phone, gender }
      );
      if (response.data.message === "Member registered successfully") {
        toast.success("Member registered successfully");
        resetForm();
      } else {
        throw new Error("Unexpected response from server");
      }
    } catch (error) {
      //console.log(error); // Log the error object for debugging purposes
      if (
        error.response &&
        error.response.data &&
        error.response.data.error === "User has already registered"
      ) {
        toast.warn("You have already registered");
        setAdress("");
        setGender("");      } else {
        setErrorMessage("Error for registration, please try again!");
      }
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="justify-center items-center mt-8">
        <h1 className="text-xl font-bold px-10 ml-10 sm:text-base sm:px-0">
          የቤተክርስቲያን የሰበካ ጉባኤ አባልነት ቅጽ
        </h1>
      </div>
      <div className="max-w-md  border border-gray-300 lg:p-6  sm:p-2 rounded-md shadow-md mt-10">
        <div className="flex flex-col items-center justify-center form-field">
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
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName}</p>
          )}
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
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName}</p>
          )}

          
          <input
            type="email"
            placeholder="ኢሜል"
            id="email"
            className="w-full h-10 px-6 text-gray-600 border border-gray-300 rounded-full mt-10"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
          <PhoneInput
            country={"et"}
            value={phone}
            onChange={(phone, country) => {
              setPhone(phone);
              setCountryCode(country.countryCode);
            }}
            placeholder="ስልክ"
            className="lg:w-full h-10 px-6 text-gray-600 border border-gray-300 rounded-full mt-10 mb-5"
            enableAreaCodes={true}
            disableDropdown={false}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
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
          {errors.adress && (
            <p className="text-red-500 text-sm">{errors.adress}</p>
          )}
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
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender}</p>
          )}
          <button
            type="submit"
            className="w-full h-10 bg-dark-blue hover:bg-sky-600 text-white rounded-full mt-10"
            onClick={handleSubmit}
          >
            ይመዝገቡ
          </button>
          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MemberRegisterationPage;
