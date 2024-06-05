import React, { useState } from "react";
import Breadcrumb from "../../common/Breadcrumb";
import Sidebarr from "./SideBarr";
import { useSelector, useDispatch } from "react-redux";
import { updatePassword } from "../../app/actions/passwordActions";
import { ToastContainer ,toast} from "react-toastify";
function ChangePassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");


  const userData = useSelector((state) => state.user.userData);
  const userId = userData.id;
  const dispatch = useDispatch();

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      toast.warning("Passwords do not match");
    } else {
      setPasswordError("");
    
      try {
        dispatch(updatePassword( userId, newPassword )); // Include both userId and newPassword directly in the payload
        //console.log("Password update successful!");
        setNewPassword('');
setConfirmPassword('');
        toast.success("Password updated successfully")
        // Maybe redirect to a different page
      } catch (error) {
       // console.error("Error updating password:", error); // Show error message to the user based on the error details
      toast.error('Error updating password')
      }
    }
  };

  return (
    <div className="w-full">
    {/* <Breadcrumb /> */}
    <ToastContainer/>
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
          {/* <input
            type="password"
            id="password"
            placeholder="Current Password"
            className="ml-10 mr-10 border rounded-xl px-6 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 "
            required
            autoComplete="current-password"
          /> */}
           <input
            type="password"
            id="new"
            placeholder="new password(min 8 characters)"
            onChange={handleNewPasswordChange}
            className="ml-10 mr-10 border rounded-xl px-4 py-2  focus:outline-none focus:ring-2 focus:ring-gray-500  "
            required
            autoComplete="current-password"
          />
          <input
            type="password"
            placeholder="Confirm Password (Min 8 Characters)"
            onChange={handleConfirmPasswordChange}
            id="confirm"
            className="ml-10 mr-10 border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500   "
            required
            minLength={8}
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

// import React, { useState } from "react";
// import Breadcrumb from "../../common/Breadcrumb";
// import Sidebarr from "./SideBarr";
// import { useSelector, useDispatch } from "react-redux";
// import { updatePassword } from "../../app/actions/passwordActions";
// import { ToastContainer, toast } from "react-toastify";
// import { FaEyeSlash,FaEye } from "react-icons/fa";

// function ChangePassword() {
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [enteredCurrentPassword, setEnteredCurrentPassword] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const userData = useSelector((state) => state.user.userData);
//   const userId = userData.id;
//   const dispatch = useDispatch();
//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleNewPasswordChange = (e) => {
//     setNewPassword(e.target.value);
//   };

//   const handleConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
//   };

//   const handleCurrentPasswordChange = (e) => {
//     setEnteredCurrentPassword(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setNewPassword(""); // Clear the new password field
//     setConfirmPassword(""); // Clear the confirm password field
//     setEnteredCurrentPassword(""); // Clear the current password field
//     setPasswordError(""); // Clear the password error message
//     setSuccessMessage("")

//     if (enteredCurrentPassword !== userData.password) {
//       setPasswordError("Current password is incorrect");
//       toast.error("Current password is incorrect");
//     } else {
//       if (newPassword !== confirmPassword) {
//         toast.warning("Passwords do not match");
//       } else {
//         setPasswordError("");
//         try {
//           dispatch(updatePassword(userId, newPassword));
//           setSuccessMessage("Password updated successfully!");
//           toast.success("Password updated successfully");
//         } catch (error) {
//           toast.error('Error updating password');
//           setPasswordError("Error updating password");
//         }
//       }
//     }
//   };

//   return (
//     <div className="w-full">
//       <Breadcrumb />
//       <ToastContainer />
//       <h1 className="text-center text-3xl font-bold custom-font mb-4">
//         Change Your Password
//       </h1>

//       <div className="change-password-container">
//         <div className="w-full rounded-lg">
//           <div className="flex flex-col lg:flex-row">
//             {/* sidebar */}
//             <div>
//               <Sidebarr />
//             </div>
//             <div className="lg:w-1/2 m-auto">
//               <div className="bg-gray-200 rounded-xl flex flex-col h-screen mt-10">
//                 <div className="h-full overflow-hidden shadow rounded-lg">
//                   <form
//                     className="space-y-4 flex flex-col text-center lg:w-full mt-10 py-10"
//                     onSubmit={handleSubmit}
//                   >
//                     <input
//                       type={showPassword ? 'text':'password'}
//                       id="password"
//                       placeholder="Current Password"
//                       onChange={handleCurrentPasswordChange}
//                       className="ml-10 mr-10 border rounded-xl px-6 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
//                       required
//                       autoComplete="current-password"
//                     />
//                      <span 
//               className='absolute  right-40  top-100 cursor-pointer '
//               onClick={togglePasswordVisibility}
//             >
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//                     <input
//                       type="password"
//                       id="new"
//                       placeholder="New Password (min 6 characters)"
//                       onChange={handleNewPasswordChange}
//                       className="ml-10 mr-10 border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
//                       required
//                       autoComplete="current-password"
//                     />
//                     <input
//                       type="password"
//                       placeholder="Confirm Password (min 6 characters)"
//                       onChange={handleConfirmPasswordChange}
//                       id="confirm"
//                       className="ml-10 mr-10 border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
//                       required
//                       minLength={6}
//                       autoComplete="confirm-password"
//                     />

//                     {passwordError && (
//                       <p className="text-red-500 text-sm mt-2">{passwordError}</p>
//                     )}
//                     {successMessage && (
//                       <p className="text-green-500 text-sm mt-2">{successMessage}</p>
//                     )}
//                    <div className="flex justify-center items-center mt-10 mb-4">
//                    <button
//                       type="submit"
//                       className="bg-blue-500 text-white text-center px-6 py-2 rounded-3xl mr-4"
//                     >
//                       Confirm
//                     </button>
//                     <button
//              className="bg-red-500 text-white text-center  px-6 py-2 rounded-3xl"
//              onClick={() => window.history.back()}
//            >
//              Cancel
//      </button>
//                    </div>

//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ChangePassword;