import React from "react";
import data from "../components/feedback";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Breadcrumb from "../common/Breadcrumb";
import axios from "axios";
import { useState, useEffect } from "react";
import Ava from "../assets/Images/ava.png";
import { MdDelete, MdTexture } from "react-icons/md";
import { FaEdit, FaReadme } from "react-icons/fa";
import EditFeedbackForm from "../components/EditFeedbackForm";
import { Link, useNavigate } from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



const FeedbackPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [feedbackData, setFeedbackData] = useState([]);
  const [selectedFeedback, setSelectedFeedback] = useState();
const navigate=useNavigate();
  const handleEdit = (id) => {
    const feedback = feedbackData.find((feedback) => feedback.id === id);
    setSelectedFeedback(feedback);
  };
  useEffect(() => {
    const fetchData = async () => {
      {
        try {
          const response = await axios.get(
            "http://localhost:5000/api/feedback/"
          );
          setFeedbackData(response.data);
        } catch (error) {
          console.error("Error fetching selected feedback data: ", error);
        }
      }
    };

    fetchData();
  }, []);
  const handleDelete = async (id) => {
    try {
       await axios.delete(`http://localhost:5000/api/feedback/${id}`);
       setFeedbackData(feedbackData.filter((feedback) => feedback.id !== id));
       
      //  toast.success('Feedback deleted successfully', {
      //     position: toast.POSITION.TOP_LEFT
      //  });
       alert("feedback deleted successfully")
       navigate('/feedback'); 
       closeDialog();
    } catch (error) {
       if (error.response && error.response.status === 403) {
          alert('Unauthorized - User is not the owner of the feedback');
       } else {
          console.error("Error deleting feedback: ", error);
       }
    }
 }
  const closeDialog = () => {
    setIsOpen(false);
  };
  const handleCancelClick = () => {
    closeDialog();
  };
 
  
  return (
    <div className="w-full m-auto ">
      <ToastContainer/>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-8">
        {feedbackData.map((feedback) => (
          <div
            key={feedback.id}
            className="h-auto bg-gray-300 text-black rounded-xl"
          >
            <div className="rounded-t-xl flex justify-start items-center ml-2 mt-5">
              {feedback.imagePath ? (
                <img
                  src={`http://localhost:5000/` + feedback.imagePath}
                  alt="Uploaded Image"
                  className="rounded-full w-32 h-32 "
                />
              ) : (
                <img
                  src={Ava}
                  alt="Default Image"
                  className="rounded-full w-32 h-32"
                />
              )}

              <div className="ml-2">
                <p className="text-base font-semibold">{feedback.name}</p>
                <p className="text-base font-semibold">{feedback.email}</p>
                {/* <p className="text-base">{displayTime(feedback)}</p> */}

              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 p-4">
              <p>{feedback.message}</p>
              <div className="flex gap-8">
              <Link to={`/feedback/${feedback.id}`}>
              <button className="text-white bg-dark-blue text-xl px-6 py-1 rounded-md hover:bg-blue-700 focus:outline-white ring-focus">
              <FaReadme />
            </button>
          </Link>
                <Link to={`/editfeedback/${feedback.id}`}>
                  <button className="text-white bg-dark-blue text-xl px-6 py-1 rounded-md hover:bg-blue-700 focus:outline-white ring-focus">
                    <FaEdit />
                  </button>
                </Link>
                <button
                  onClick={() => setIsOpen(true)}
                  className=" text-white  px-6 py-1   text-xl bg-red-600 hover:bg-red-800 rounded-md focus:outline-white ring-focus"
                >
                  <MdDelete />
                </button>
                {isOpen && (
                  <div className="absolute top-5 right-5 mt-10 justify-center items-center">
                    <div className="bg-white border border-gray-300 p-4 rounded-md shadow">
                      <div className=" flex flex-col   items-center">
                        <div className="">
                          <p className="mt-5  px-6 py-3 text-center items-center">
                           የመረጡትን አስተያየት ለማጥፋት እርግጠኛ ነዎት?
                          </p>
                        </div>
                        <div className="flex justify-center space-between ">
                          <div className=" flex mb-5">
                            <button
                              onClick={handleCancelClick}
                              className="mt-10 px-6 py-2 bg-green-800 text-white mr-2 rounded-3xl"
                            >
                              አይ
                            </button>
                            <button
                              onClick={(e) => handleDelete(feedback.id)}
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
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default FeedbackPage;