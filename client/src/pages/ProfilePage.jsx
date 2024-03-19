import React, { useState } from "react";
import profileData from "../components/profileData"; // Assuming profile data is stored in a file called profileData.js

const ProfilePage = () => {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [isPasswordValid, setIsPasswordValid] = useState(true);

const validatePassword = () => {
  const newPassword = document.getElementById('newPassword').value;
  const confirmNewPassword = document.getElementById('confirmNewPassword').value;

  if (newPassword !== confirmNewPassword) {
    setIsPasswordValid(false);
    document.getElementById('passwordError').innerText = "Passwords do not match";
  } else {
    setIsPasswordValid(true);
    document.getElementById('passwordError').innerText = "";
  }
};

const handleSubmitPasswordChange = (e) => {
  e.preventDefault();

  // Add your logic for submitting the password change if validation is successful
};

  const handleEditProfileClick = () => {
    setIsEditingProfile(true);
    setIsChangingPassword(false); 
  };

  const handleChangePasswordClick = () => {
    setIsChangingPassword(true);
    setIsEditingProfile(false); 
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="w-full m-auto">
      <div className="bg-gray-100 shadow-lg rounded-lg p-4">
        <div className="flex justify-center">
          <img
            className="h-32 w-32 rounded-full"
            src={imagePreview ? imagePreview : profileData.image}
            alt="Profile"
          />
        </div>
        <div className="text-center ml-4">
          <p className="text-lg font-semibold">{profileData.username}</p>
          <p className="text-lg font-semibold">Phone: {profileData.phone}</p>
          <p className="text-sm text-gray-500">{profileData.email}</p>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={handleEditProfileClick}
            className="bg-blue-500 text-white px-2 py-2 rounded mr-4"
          >
            Edit Profile
          </button>
          <button
            onClick={handleChangePasswordClick}
            className="bg-blue-500 text-white px-2 py-2 rounded mr-4"
          >
            Change Password
          </button>
        </div>
      </div>
      {isEditingProfile && (
        <div className="text-center bg-gray-100 shadow-lg rounded-lg p-4 mt-4">
          <form>
          <input
   type="file"
   accept="image/*"
   onChange={handleFileChange}
   className="w-1/2 p-2 mb-2 border rounded"
/>
            <br />
            <input
  type="text"
  defaultValue={profileData.username}
  placeholder="Enter new username"
  className="w-1/2 p-2 mb-2 border rounded"
  onInput={(e) => {
    if (e.target.value.length < 3) {
      e.target.setCustomValidity("Username must be at least 3 characters long");
    } else {
      e.target.setCustomValidity("");
    }
  }}
/>
            <br />
            <input
  type="number"
  name="phone"
  defaultValue={profileData.phone}
  className="w-1/2 p-2 mb-2 border rounded"
  placeholder="Phone"
  minLength={10}
  maxLength={10}
  required
  onInput={(e) => {
    if (e.target.value.length !== 10) {
      e.target.setCustomValidity("Phone number must be exactly 10 digits");
    } else {
      e.target.setCustomValidity("");
    }
  }}
/>
            <br />
            <input
  type="email"
  name="email"
  defaultValue={profileData.email}
  className="w-1/2 p-2 mb-2 border rounded"
  placeholder="Email"
  onInput={(e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!e.target.value.match(emailRegex)) {
      e.target.setCustomValidity("Please enter a valid email address");
    } else {
      e.target.setCustomValidity("");
    }
  }}
/>
            <br />
            
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
            >
              Save Changes
            </button>
            <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => window.history.back()}
              >
                Cancel
              </button>
          </form>
        </div>
      )}
     {isChangingPassword && (
  <div className="text-center bg-gray-100 shadow-lg rounded-lg p-4 mt-4">
    <form onSubmit={handleSubmitPasswordChange}>
      <input
        type="password"
        placeholder="Current Password"
        className="w-1/2 p-2 mb-2 border rounded"
        required
      />
      <br />
      <input
        type="password"
        placeholder="New Password"
        className="w-1/2 p-2 mb-2 border rounded"
        id="newPassword"
        required
        minLength={6} // Example: Minimum 6 characters for new password
        onChange={validatePassword}
      />
      <br />
      <input
        type="password"
        placeholder="Confirm New Password"
        className="w-1/2 p-2 mb-2 border rounded"
        id="confirmNewPassword"
        required
        onChange={validatePassword}
      />
      <br />
      <span id="passwordError" className="text-red-500"></span>
      <br />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        disabled={isPasswordValid ? false : true}
        onSubmit={handleSubmitPasswordChange}
      >
        Confirm
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => window.history.back()}
      >
        Cancel
      </button>
    </form>
  </div>
)}
    </div>
  );
};



export default ProfilePage