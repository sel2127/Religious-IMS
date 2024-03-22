import React, { useState } from "react";

function ChangePassowrd() {
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPassword = document.getElementById("new").value;
    const confirmNewPassword = document.getElementById("confirm").value;

    if (newPassword !== confirmNewPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
      // here place for submititng the changed passowrd to back
    }
  };

  return (
    <div className="w-full m-auto">
      <div className="mx-auto border border-gray-300 w-1/2 mt-10 rounded rounded-3xl text-gray-600">
        <div className="flex flex-col items-center justify-center px-20 py-10"></div>
        <form className="flex flex-col space-y-4">
          <input
            type="password"
            id="password"
            placeholder="current password"
            className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-10 mr-10 h-10 px-6 border border-gray-300 rounded-full"
            required
            autoComplete="current-password"
          />
          <input
            type="password"
            placeholder="new password (min 6 characters)"
            id="new"
            className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-5 ml-10 mr-10 h-10 px-6 border border-gray-300 rounded-full"
            required
            minLength={6}
            autoComplete="new-password"
          />
          <input
            type="password"
            placeholder="confirm password (min 6 characters)"
            id="confirm"
            className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-5 ml-10 mr-10 h-10 px-6 border border-gray-300 rounded-full"
            required
            minLength={6}
            autoComplete="confirm-password"
          />

          {passwordError && <p className="text-red-500">{passwordError}</p>}

          <div className="border-gray-200 flex justify-center items-center">
            <button
              id="submit"
              type="submit"
              onClick={handleSubmit}
              className="ml-10 bg-blue-500 text-white px-6 py-1 rounded-xl"
            >
              Confirm
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
  );
}

export default ChangePassowrd;