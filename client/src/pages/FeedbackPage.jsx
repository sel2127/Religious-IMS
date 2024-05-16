import axios from "axios";
import React, { useState, useEffect } from "react";
import Ava from "../assets/Images/ava.png";
import { FaReadme } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteFeedback, fetchFeedback } from "../app/actions/feedbackAction";

const FeedbackPage = () => {
  const getUserImageFromLocalStorage = (userId) => {
    const imageData = localStorage.getItem(`user-${userId}-image`);
    return imageData ? JSON.parse(imageData).imageData : null;
  };
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFeedbackId, setSelectedFeedbackId] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const feedbackData = useSelector((state) => state.feedback.feedbackData);
  const error = useSelector((state) => state.feedback.error);


  useEffect(() => {
    dispatch(fetchFeedback());
  }, [dispatch]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleDelete = (id) => {
    setSelectedFeedbackId(id);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setSelectedFeedbackId(null);
    setIsOpen(false);
  };

  const handleConfirmDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/feedback/${id}`);
      toast.success("Feedback deleted successfully");
      navigate("/feedback");
      closeDialog();
    } catch (error) {
      if (error.response && error.response.status === 403) {
        toast.error("Unauthorized - you are not the owner of the feedback", {
          autoClose: 5000,
        });
      }
      navigate("/feedback");
    }
  };

 

  return (
    <div className="w-full m-auto">
      <ToastContainer />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-8">
        {
  feedbackData && feedbackData.length === 0 ? (
    <div className="text-center text-gray-500">No feedbacks found.</div>
          ) : (
            feedbackData.map((feedback) => (
              <div
                key={feedback.feedbackId}
                className="h-auto bg-gray-200 text-black rounded-md"
              >
                <div className="rounded-t-xl flex justify-start items-center ml-2 mt-5">
                  <img
                    src={
                      getUserImageFromLocalStorage(feedback.userId)
                        ? getUserImageFromLocalStorage(feedback.userId)
                        : Ava
                    }
                    alt="Profile Image"
                    className="rounded-full w-32 h-32"
                  />
                  <div className="ml-2">
                    <p className="text-base font-semibold">{feedback.writer}</p>
                    <p className="text-base font-semibold">{feedback.email}</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 p-4">
                  <p>{feedback.message}</p>
                  <div className="flex gap-8">
                    <Link to={`/feedback/${feedback.userId}`}>
                      <button className="text-white bg-dark-blue text-xl px-6 py-1 rounded-md hover:bg-blue-700 focus:outline-white ring-focus">
                        <FaReadme />
                      </button>
                    </Link>
                   
                  </div>
                </div>
              </div>
            ))          )
          }
      </div>

      {isOpen && (
        <div className="absolute top-5 right-5 mt-10 justify-center items-center">
          <div className="bg-white border border-gray-300 p-4 rounded-md shadow">
            <div className="flex flex-col items-center">
              <div>
                <p className="mt-5 px-6 py-3 text-center items-center">
                  የመረጡትን አስተያየት ለማጥፋት እርግጠኛ ነዎት?
                </p>
              </div>
              <div className="flex justify-center space-between">
                <div className="flex mb-5">
                  <button
                    onClick={closeDialog}
                    className="mt-10 px-6 py-2 bg-green-800 text-white mr-2 rounded-3xl"
                  >
                    አይ
                  </button>
                  <button
                    onClick={() => handleConfirmDelete(selectedFeedbackId)}
                    className="mt-10 ml-10 px-6 py-2 bg-red-700 text-white rounded-3xl"
                  >
                    አወ
                  </button>
                </div>
              </div>
            </div>
            <div className="overlay" onClick={closeDialog}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackPage;