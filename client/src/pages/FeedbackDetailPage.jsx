import axios from "axios";
import React, { useState, useEffect } from "react";
import Ava from "../assets/Images/ava.png";
import { MdDelete } from "react-icons/md";
import {
  FaArrowAltCircleLeft,
  FaBackward,
  FaEdit,
  FaReadme,
} from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast,cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeedbackByName } from "../app/actions/feedbackAction";
import { useTranslation } from "react-i18next";

const FeedbackDetailPage = () => {
  const getUserImageFromLocalStorage = (userId) => {
    const imageData = localStorage.getItem(`user-${userId}-image`);
    return imageData ? JSON.parse(imageData).imageData : null;
  };
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFeedbackId, setSelectedFeedbackId] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const feedbackData = useSelector((state) => state.feedback.feedbackData);
  const error = useSelector((state) => state.feedback.error);
  useEffect(() => {
    dispatch(fetchFeedbackByName(id));
  }, [dispatch, id]);
  if (error) {
    return <div>Error:{error}</div>;
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
      } else {
        console.error(error); // Log other errors to the console for debugging
        toast.error("An error occurred while deleting the feedback");
      }
    }
  };
  const Fade = cssTransition({
    enter: "fade-enter",
    exit: "fade-exit",
  });

  return (
    <div className="w-1/2 mx-auto mt-10">
      <ToastContainer />
      <div className="lg:grid-cols-1">
        {feedbackData.map((feedback) => (
          <div
            key={feedback.feedbackId}
            className="bg-gray-100 text-black rounded-xl py-8"
          >
            <div className="rounded-lg flex flex-col gap-y-2 justify-center items-center">
              {/* <img
                src={
                  getUserImageFromLocalStorage(feedback.userId)
                    ? getUserImageFromLocalStorage(feedback.userId)
                    : Ava
                }
                alt="Profile Image"
                className="rounded-full mt-5 md:w-32 md:h-32 sm:w-20 sm:h-20"
                /> */}
              <div className="">
                <p className="text-base font-bold">
                  {feedback.firstName} {feedback.lastName}
                </p>
                {/* <p className="text-base md:font-semibold">{feedback.email}</p> */}
              </div>
              <div className="">
                <p className="">{feedback.message}</p>
              </div>
              <div className="flex flex-row gap-8 mt-6">
                <Link to={`/editfeedback/${feedback.feedbackId}`}>
                <button className="text-white bg-[#2d5986] hover:bg-[#79a6d2] text-xl w-8 h-8 flex justify-center items-center rounded-full focus:outline-white ring-focus">
                <FaEdit />
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(feedback.feedbackId)}
                  className="text-white bg-red-400 hover:bg-red-600 text-xl w-8 h-8 flex justify-center items-center rounded-full focus:outline-white ring-focus">
                  <MdDelete />
                </button>
                <Link to="/feedback">
                  <button 
                className="text-white bg-[#2d5986] hover:bg-[#79a6d2] text-xl w-8 h-8 flex justify-center items-center rounded-full focus:outline-white ring-focus">
                    <FaArrowAltCircleLeft />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className=" bg-gray-500 border  p-4 rounded-md shadow">
          
            <div className="flex flex-col items-center ">
              <div>
                <p className="mt-5 px-6 py-3 text-center  top-5 right-5 justify-end">
                {t('con_feed')}
                </p>
              </div>
              <div className="flex justify-center space-between">
                <div className="flex mb-5">
                  <button
                    onClick={closeDialog}
                    className="mt-10 px-6 py-2 bg-green-800 text-white mr-2 rounded-3xl"
                  >
                    {t('no')}
                  </button>
                  <button
                    onClick={() => handleConfirmDelete(selectedFeedbackId)}
                    className="mt-10 ml-10 px-6 py-2 bg-red-700 text-white rounded-3xl"
                  >
                     {t('yes')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackDetailPage;