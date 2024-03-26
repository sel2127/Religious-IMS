import React from "react";
import profileData from "../profileData";
import Breadcrumb from "../../common/Breadcrumb";
const EditProfile = () => {
  return (
    <div className="">
      <Breadcrumb/>
      <h1 className="text-center text-3xl font-bold custom-font mb-4">Edit  Your profile here</h1>

      <div className="mx-auto border border-gray-300 w-full mt-10 rounded rounded-3xl text-gray-600">
        <div className="bg-white shadow rounded-lg p-4 md:p-6">
        <form className="space-y-4  flex flex-col  text-center w-full md:w-3/4">

          <input
            type="text"
            id="name"
            defaultValue={profileData.username}
            placeholder="Enter new username"
            className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500
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
            defaultValue={profileData.email}
            className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500
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
            defaultValue={profileData.phone}
            placeholder="Phone"
            className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500
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

          <div className="border-gray-200  flex justify-center items-center">
            <button
              id="submit"
              type="submit"
              className="ml-10 bg-blue-500 text-white px-6 py-1 rounded-xl"
            >
              Save
            </button>
            <button
              className="ml-10 bg-red-500 text-white px-6 py-1 rounded-xl"
              onClick={() => window.history.back()}
            >
              Cancel
            </button>
          </div>
        </form>
        </div>

      </div>
    </div>
  );
};

export default EditProfile;
