import React, { useState } from "react";
import Breadcrumb from "../../common/Breadcrumb";

function ChangePassword() {
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPassword = document.getElementById("new").value;
    const confirmNewPassword = document.getElementById("confirm").value;

    if (newPassword !== confirmNewPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
      // Implement logic for submitting changed password
    }
  };

  return (
    <div className="change-password-container ">
      <Breadcrumb />
      <h1 className="text-center text-3xl font-bold custom-font mb-4">Change Your Password</h1>
      <div className="mx-auto border border-gray-300 lg:w-1/2 mt-10 rounded rounded-3xl text-gray-600">
      <div className="bg-white shadow rounded-lg p-4 md:p-6">

      <form className="space-y-4  flex flex-col  text-center lg: w-full  mt-10">
          <input
            type="password"
            id="password"
            placeholder="Current Password"
            className="border rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full "
            required
            autoComplete="current-password"
          />
           <input
            type="password"
            id="new"
            placeholder="new password(min 6 characters)"
            className="border rounded-3xl px-4 py-2 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full "
            required
            autoComplete="current-password"
          />
          <input
            type="password"
            placeholder="Confirm Password (Min 6 Characters)"
            id="confirm"
            className="border rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4 w-full "
            required
            minLength={6}
            autoComplete="confirm-password"
          />

          {passwordError && <p className="text-red-500 text-sm mt-2">{passwordError}</p>}

         
        </form>
        <div className="flex justify-center items-center mt-10 mb-4">
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-500 text-white text-center  px-6 py-2 rounded-3xl mr-4"
            >
              Confirm
            </button>
            <button
              className="bg-red-500 text-white text-center  px-6 py-2 rounded-3xl"
              onClick={() => window.history.back()}
            >
              Cancel
            </button>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default ChangePassword;
