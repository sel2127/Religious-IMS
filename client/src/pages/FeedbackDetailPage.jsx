// FeedbackDetailPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { MdDelete, MdTexture } from "react-icons/md";
import { FaEdit, FaReadme } from "react-icons/fa";
import { Link } from "react-router-dom";

const FeedbackDetailPage = () => {
  const { id } = useParams();
  const [feedback, setFeedback] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/feedback/${id}`
        );
        setFeedback(response.data);
      } catch (error) {
        console.error("Error fetching feedback:", error);
      }
    };

    fetchFeedback();
  }, [id]);

  if (!feedback) {
    return <div>Loading...</div>;
  }
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/feedback/${id}`);
      setFeedback(feedback.filter((feedback) => feedback.id !== id));
      alert("Feedback deleted successfully");
      console.log("Item deleted");
      closeDialog();
    } catch (error) {
      console.error("Error deleting feedback: ", error);
      return "Error deleting feedback";
    }
  };
  const closeDialog = () => {
    setIsOpen(false);
  };
  const handleCancelClick = () => {
    closeDialog();
  };
  return (
    <div className="w-full m-auto ">
      <div className="grid grid-cols lg:grid-cols-1 mt-8 w-1/2 ">
        <div
          key={feedback.id}
          className="h-auto bg-gray-300 text-black rounded-xl"
        >
          <div className="rounded-t-xl flex justify-start items-center ml-2 mt-5">
            <img
              src={`http://localhost:5000/` + feedback.imagePath}
              alt="Uploaded Image"
              className="rounded-full w-32 h-32 "
            />

            <div className="ml-2">
              <p className="text-base font-semibold">{feedback.name}</p>
              <p className="text-base font-semibold">{feedback.email}</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 p-4">
            <p>{feedback.message}</p>
            <div className="flex gap-8">
              <Link to={`/feedback/${feedback.id}`}>
                <button className="text-white bg-indigo-500 text-xl px-6 py-1 rounded-xl hover:bg-blue-700">
                  <FaReadme />
                </button>
              </Link>
              <Link to={`/editfeedback/${feedback.id}`}>
                <button className="text-white bg-indigo-500 text-xl px-6 py-1 rounded-xl hover:bg-blue-700">
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
                <div className="absolute top-5 right-5 mt-10 ">
                  <div className="bg-white border border-gray-300 p-4 rounded-md shadow">
                    <div className=" flex flex-col  items-center">
                      <div className="">
                        <p className="mt-5  px-6 py-3 text-center items-center">
                          Are you sure you want to delete this item?
                        </p>
                      </div>
                      <div className="flex justify-center space-between ">
                        <div className=" flex mb-5">
                          <button
                            onClick={handleCancelClick}
                            className="mt-10 px-6 py-2 bg-pink-200 mr-2 rounded-3xl"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => handleDelete(feedback.id)}
                            className="mt-10 ml-10 px-6 py-2 bg-red-600 rounded-3xl"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="overlay" onClick={closeDialog}></div>
                  </div>
                </div>
              )}
            </div>
            <Link to="/feedback">
              <button className="mt-10 ml-10 px-6 py-2 bg-red-600 rounded-3xl text-center">
                go back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackDetailPage;
