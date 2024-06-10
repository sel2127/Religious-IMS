import React, { useState } from "react";
import Sidebarr from "./SideBarr";
import { useSelector, useDispatch } from "react-redux";
import { updatePassword } from "../../app/actions/passwordActions";
import { ToastContainer ,toast,cssTransition} from "react-toastify";
import { useTranslation } from "react-i18next";

function ChangePassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const[password,setPassword]=useState("")


  const userData = useSelector((state) => state.user.userData);
  const userId = userData.id;
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.warning("Passwords do not match and put more than 8 character");
      setPasswordError(`"${t('en_l')}"`);
    } else {
      setPasswordError("");
      if (!password) {
        setPassword("Password should be at least 8 characters long.");
      } else if (password.length < 8) {
       setPassword("Password should be at least 8 characters long.");
      }
    
      try {
        dispatch(updatePassword( userId, newPassword )); // Include both userId and newPassword directly in the payload
        console.log("Password update successful!");
        toast.success("Password update successful!");

        // Maybe redirect to a different page
      } catch (error) {
        console.error("Error updating password:", error); // Show error message to the user based on the error details
      }
    }
  };

  const Fade = cssTransition({
    enter: "fade-enter",
    exit: "fade-exit",
  });
  return (
    <div className="w-full">
    <ToastContainer/>

<div className="w-full change-password-container bg-gray-100 py-10">
      <div className=" w-full rounded-lg">
        <div className="flex flex-col lg:flex-row md:flex-row">
            {/* sidebar */}
            <div>
              <Sidebarr />
            </div>
            <div className="lg:w-1/2 m-auto">
              <div className="bg-white rounded-xl flex flex-col ">
                <div className=" min-h-full overflow-hidden shadow py-10 rounded-lg">
                  <form
                    className="space-y-4 flex flex-col text-center lg: w-full "
                    type="post"
                  >
                    <input
                      type="password"
                      id="password"
                      placeholder={` ${t('curr')} `}
                      className="ml-10 mr-10 border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 "
                      required
                      autoComplete="current-password"
                    />
                    <input
                      type="password"
                      id="new"
                      value={newPassword}
                      onChange={handleNewPasswordChange}
                      placeholder={` ${t('new')} `}
                      className="ml-10 mr-10 border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500  "
                      required
                      minLength={8}
                      autoComplete="current-password"
                    />
                     {password && (
                      <p className="text-red-500 text-sm mt-2">
                        {password}
                      </p>
                    )}
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                      placeholder={` ${t('con_pass')} `}
                      id="confirm"
                      className="ml-10 mr-10 border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500   "
                      required
                      minLength={8}
                      autoComplete="confirm-password"
                    />

                    {passwordError && (
                      <p className="text-red-500 text-sm mt-2">
                        {passwordError}
                      </p>
                    )}
                  </form>
                  <div className="flex justify-center items-center mt-10 mb-4">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="bg-[#2d5986] hover:bg-[#79a6d2] text-white text-center  px-6 py-2 rounded-3xl mr-4"
                    >
                      {t('con')}
                    </button>
                    <button
                      className="bg-red-600 hover:bg-red-400 text-white text-center  px-6 py-2 rounded-3xl"
                      onClick={() => window.history.back()}
                    >
                    {t('can')}
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
