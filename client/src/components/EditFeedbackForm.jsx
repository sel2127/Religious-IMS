import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditFeedbackForm = () => {
  const { id } = useParams();
  //const [name, setName] = useState("");
  //const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  //const [imagePath, setImagePath] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [selected, setSelectedImage] = useState([]);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const userId = Cookies.get("userId");
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/feedback/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
       // setName(res.data.name);
        //setEmail(res.data.email);
        setMessage(res.data.message);
        //setImagePath(res.data.imagePath);
        //setSelectedImage(res.data.imagePath);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    const formData = new FormData();
   // formData.append("name", name);
    //formData.append("email", email);
    formData.append("message", message);

    // if (imagePath) {
    //   formData.append("image", imagePath);
    // }
    // formData.append("userId", userId);

    try {
      const response = await axios.put(
        `http://localhost:5000/api/feedback/update/${id}`,
        formData,
        { withCredentials: true },
        
      );

      toast.success("Feedback updated successfully", {
        //position:toast.POSITION.TOP_CENTER
      });
      alert("Feedback updated successfully")

      navigate("/feedback");
    } catch (error) {
      if (error.response && error.response.status === 403) {
        toast.error("Unauthorized - you are not the owner of the feedback");
      }
      console.error("Error updating feedback:", error);
      toast.error(
        "An error occurred while updating feedback. Please try again."
      );

      setErrorMessage("Error updating feedback. Please try again.");
    } 
  };

  return (
    <div className="">
      <ToastContainer />

      <div className=" rounded-lg">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 m-auto">
            <div className="  bg-gray-200 rounded-xl  flex flex-col  h-screen mt-10">
              <div className="flex flex-col items-center justify-center px-20 py-10"></div>
              <form
                onSubmit={handleSubmit}
                className=" flex flex-col space-y-4  mt-10  "
              >
                {/* <input
                  type="text"
                  id="name"
                  placeholder="ስም"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500
         ml-10 mr-10  h-10 px-6 border border-gray-300  rounded-full"
                  required
                  autoComplete="name"
                />
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500
  mt-5 ml-10 mr-10  h-10 px-6 border border-gray-300  rounded-full"
                  required
                  autoComplete="email"
                /> */}
                <textarea
                  rows={8}
                  placeholder="አስተያየትዎን እዚህ ላይ ይጻፉ.... "
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="border  rounded-md mt-10 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 
 ml-10 mr-10"
                  required
                  autoComplete="off"
                />
                {/* <input
                  type="file"
                  accept="image/*"
                  id="image"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    setImagePath(file);
                    setSelectedImage(file.name); // Set the name of the selected image file
                  }}
                  className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-5 ml-10 mr-10 h-10 px-6 border border-gray-300 rounded-full"
                  //required
                  autoComplete="off"
                />

                {selected && <p>የመረጡት ምስል: {selected}</p>} */}

                <div className="border-gray-200  flex flex-col items-center mt-10">
                  <button
                    id="submit"
                    type="submit"
                    disabled={isLoading}
                    className={` w-1/2 m-auto bg-blue-500 text-white rounded-md hover:bg-blue-700 h-10  mb-4 
     ${isLoading ? "cursor-not-allowed opacity-50" : ""}`}
                  >
                    {isLoading ? "Submitting..." : "አስተያየትዎን ያዘምኑ"}
                  </button>
                  <Link
              className="bg-red-500 w-1/2 m-auto  text-white text-center  rounded-md hover:bg-pink-700 h-10  mb-4"
              onClick={() => window.history.back()}
            >
              አይ
            </Link>                
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

export default EditFeedbackForm;
