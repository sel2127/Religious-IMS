import React, { useState } from "react";
import Breadcrumb from "../../common/Breadcrumb";
import Sidebarr from "./SideBarr";

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
    <div className="w-full">
    <Breadcrumb />
    <h1 className="text-center text-3xl font-bold custom-font mb-4">Change Your Password</h1>

    <div className="change-password-container  ">
    <div className=" w-full rounded-lg">
     
      <div className="flex flex-col lg:flex-row">
        {/* sidebar */}
        <div>
          <Sidebarr />
        </div>
        <div className='lg:w-1/2 m-auto'>

        <div className="  bg-gray-200 rounded-xl  flex flex-col  h-screen mt-10">
        <div className=" h-full overflow-hidden shadow  rounded-lg">

      <form className="space-y-4  flex flex-col  text-center lg: w-full  mt-10  py-10">
          <input
            type="password"
            id="password"
            placeholder="Current Password"
            className="ml-10 mr-10 border rounded-xl px-6 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 "
            required
            autoComplete="current-password"
          />
           <input
            type="password"
            id="new"
            placeholder="new password(min 6 characters)"
            className="ml-10 mr-10 border rounded-xl px-4 py-2  focus:outline-none focus:ring-2 focus:ring-gray-500  "
            required
            autoComplete="current-password"
          />
          <input
            type="password"
            placeholder="Confirm Password (Min 6 Characters)"
            id="confirm"
            className="ml-10 mr-10 border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500   "
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
    </div>
    </div>
    </div>
    </div>
  );
}

export default ChangePassword;
