import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/styles/member.css";

function MemberRegisterationPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bapiname, setBapiname] = useState("");
  const [fathername, setFathername] = useState("");
  const [adress, setAdress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);


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
    if (!phone || !/^(09)[0-9]{8}$/.test(phone)) {
      errors.phone = "Please enter a valid Ethiopian phone number";
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
    setGender("");
    setErrors({});
    setErrorMessage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  setErrorMessage(null)
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
        //resetForm();
      } else {
        setErrorMessage("Error for registration, please try again!");
      }
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="justify-center items-center mt-8">
      <h1 className="text-xl font-bold px-10 ml-10 sm:text-base sm:px-0">የቤተክርስቲያን የሰበካ ጉባኤ አባልነት ቅጽ</h1>

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
          <input
            name="phone"
            type="number"
            id="phone"
            placeholder="ስልክ"
            className="w-full h-10 px-6 text-gray-600 border border-gray-300 rounded-full mt-10"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          <div className="flex flex-col justify-start">
            <div>
              <h6 className="text-base justify-start">ጾታ</h6>
              <label htmlFor="male" className="mr-2">
                ወንድ
              </label>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              />
              </div>
              <div className="">
                <label htmlFor="female" className="mr-3">
                  ሴት
                </label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
              </div>
          </div>
          {errorMessage && (
                  <p className="text-red-500 text-sm">{errorMessage}</p>
                )}
          <div className="mt-6 w-full bg-dark-blue border border-gray-200 rounded-full h-10 flex items-center">
              <button onClick={handleSubmit} type='submit' className='w-full mx-auto text-base font-bold text-white'>
              ተመዝገብ
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberRegisterationPage;