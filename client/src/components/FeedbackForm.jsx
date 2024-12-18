import React, { useState } from "react";
import axios from "axios";
import Sidebarr from "./profile/SideBarr";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FeedbackForm = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    const formData = { message };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/feedback/create",
        formData,
        { withCredentials: true }
      );

      if (response.data.message === "Feedback submitted successfully") {
        setMessage("");
        toast.success("Feedback submitted successfully!");
        navigate("/feedback");
      } else {
        throw new Error("Unexpected response from server");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.error === "User has already submitted feedback"
      ) {
        toast.warn("You have already submitted feedback");
        // navigate('/feedback')
      } else {
        setErrorMessage("Error submitting feedback. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="">
      <ToastContainer />
      <div className="rounded-lg">
        <div className="flex flex-col lg:flex-row">
          {/* sidebar */}
          <div>
            <Sidebarr />
          </div>
          <div className="lg:w-full ml-5 mt-10 m-auto">
            <div className="bg-gray-200 rounded-xl flex flex-col h-auto">
              <div className="flex flex-col items-center justify-center px-10 py-5 sm:px-20 sm:py-10">
                {/* Content here */}
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col space-y-4 px-4 lg:px-10"
              >
                <textarea
                  rows={7}
                  placeholder="አስተያየትዎን እዚህ ላይ ይጻፋ ... "
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  minLength={5}
                  required
                  autoComplete="off"
                />

                <div className="border-gray-200 flex items-center">
                  <button
                    id="submit"
                    type="submit"
                    disabled={isLoading}
                    className={`w-1/2 sm:w-full bg-blue-500 text-white rounded-md hover:bg-blue-700 h-10 mb-4 ${
                      isLoading ? "cursor-not-allowed opacity-50" : ""
                    }`}
                  >
                    {isLoading ? "Submitting..." : "አስተያየትዎን ይላኩ"}
                  </button>
                </div>
                {errorMessage && (
                  <p className="text-red-500 text-sm">{errorMessage}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;