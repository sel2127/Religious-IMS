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
      <div className=" bg-white shadow rounded-lg p-4 md:p-6 ">
      <form className="space-y-4  justify-center items-center text-center w-full md:w-3/4">
          <input
            type="password"
            id="password"
            placeholder="Current Password"
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-3/4"
            required
            autoComplete="current-password"
          />
          <input
            type="password"
            placeholder="New Password (Min 6 Characters)"
            id="new"
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4 w-full md:w-3/4"
            required
            minLength={6}
            autoComplete="new-password"
          />
          <input
            type="password"
            placeholder="Confirm Password (Min 6 Characters)"
            id="confirm"
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4 w-full md:w-3/4"
            required
            minLength={6}
            autoComplete="confirm-password"
          />

          {passwordError && <p className="text-red-500 text-sm mt-2">{passwordError}</p>}

          <div className="flex justify-center items-center mt-4">
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-6 py-2 rounded-xl mr-4"
            >
              Confirm
            </button>
            <button
              className="bg-red-500 text-white px-6 py-2 rounded-xl"
              onClick={() => window.history.back()}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
