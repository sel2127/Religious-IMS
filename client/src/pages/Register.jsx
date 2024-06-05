import React from "react";

const Register = () => {
  return (
    <div>

      <div className="mx-auto border border-gray-300 w-1/2 mt-10 rounded rounded-3x1 text-gray-600">
        <div className="flex flex-col items-center justify-center px-20 py-10">
       
          <input
            type="text"
            id="fristname"
            name="fristname"
            placeholder="የእርስዎ ስም"
            className=" mt-10 w-full  border border-gray-300  rounded-full"
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
            id="lastname"
            name="lastname"
            // defaultValue={profileData.username}
            placeholder="የአባት ስም"
            className=" mt-10 w-full h-10 px-6 border border-gray-300  rounded-full"
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
            placeholder="ኢሜል"
            id="email"
            // defaultValue={profileData.email}
            className=" mt-10 w-full h-10 px-6 border border-gray-300  rounded-full"
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
          />{" "}
          <input
            name="phone"
            type="number"
            id="phone"
            // defaultValue={profileData.phone}
            placeholder="ስልክ"
            className=" mt-10 w-full h-10 px-6 border border-gray-300  rounded-full"
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
          <input
            type="password"
            id="password"
            placeholder="ይለፍ ቃል"
            className=" mt-6 w-full h-10 px-6 border border-gray-300  rounded-full"
          />
          <input
            type="password"
            id="confirmpassword"
            placeholder="ይለፍ ቃል አረጋግጥ"
            className=" mt-6 w-full h-10 px-6 border border-gray-300  rounded-full"
          />
          <div className="mr-auto underline decoration-dotted mt-4 cursor-pointer hover:text-[#79a6d2]">
            <a href="/login">አካውንት አለዎት?</a>
          </div>
          <div className=" mt-6 w-1/2 bg-dark-blue border border-gray-200 rounded-full h-10 flex items-center">
            <button  type='submit' className="w-full mx-auto text-base font-bold text-white">
              ተመዝገብ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
