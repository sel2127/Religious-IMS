import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer,cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-input-2/lib/style.css";
import "../assets/styles/member.css";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const validatePhoneNumber = (phone, countryCode) => {
    const phoneNumber = parsePhoneNumberFromString(
      phone,
      countryCode.toUpperCase()
    );
    return phoneNumber && phoneNumber.isValid();
  };

  const validateForm = () => {
    const errors = {};
    if (!firstName || !/^[a-zA-Z\s]+$/.test(firstName) || firstName.length < 3) {
      errors.firstName = `"${t('fi')}"`;
    }
    if (!lastName || !/^[a-zA-Z\s]+$/.test(lastName)) {
      errors.lastName = "Last name must only contain letters";
    }
    if (!adress || adress.length < 3) {
      errors.adress = "Address must be at least 3 characters long";
    }
    if (!email.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)) {
      errors.email = `"${t('en_e2')}"`;
    }
    if (!phone || !validatePhoneNumber(phone, countryCode)) {
      errors.phone = `"${t('en_p2')}"`;
    }
    if (!gender) {
      errors.gender = `"${t('gender')}"`;
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
        {t('mem_form')}
        </h1>
      </div>
      <div className="mx-auto border border-gray-300 w-1/2 mt-10 rounded rounded-3x1 text-gray-600">
        <div className="flex flex-col items-center justify-center  px-20 py-10 form-field">
          <input
            type="text"
            id="fristname"
            name="fristname"
            placeholder={` ${t('first_name')} `}
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
            placeholder={` ${t('last_name')} `}
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
            placeholder={` ${t('email')} `}
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
            placeholder={` ${t('phone_number')} `}
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
            placeholder={` ${t('liv')} `}
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
            <option value="">{t('gender')}</option>
            <option value="male">{t('male')}</option>
            <option value="female">{t('female')}</option>
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

export default MemberRegisterationPage;
