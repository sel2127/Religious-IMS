import React, { useState } from "react";
import axios from "axios";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [imagePath, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("image", imagePath);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/feedback",
        formData
      );

      if (response.data.message === "Feedback submitted successfully") {
        setName("");
        setEmail("");
        setMessage("");
        setImage(null);
        alert("Feedback submitted successfully!");
      } else {
        throw new Error("Unexpected response from server");
      }
    } catch (error) {
      setErrorMessage("Error submitting feedback. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full m-auto">
      <div className="mx-auto border border-gray-300 w-1/2 mt-10 rounded rounded-3xl text-gray-600">
        <div className="flex flex-col items-center justify-center px-20 py-10"></div>
        <form onSubmit={handleSubmit} className=" flex flex-col space-y-4   ">
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500
         ml-10 mr-10  h-10 px-6 border border-gray-300  rounded-full"
            required
            autoComplete="name" // Add the autocomplete attribute with value "name" for the Name field
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
            autoComplete="email" // Add the autocomplete attribute with value "email" for the Email field
          />
          <textarea
            rows={5}
            placeholder="Put your feedback "
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 
 ml-10 mr-10"
            required
            autoComplete="off"
          />
          <input
            type="file"
            accept="image/*"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
            className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 
  mt-5 ml-10 mr-10  h-10 px-6 border border-gray-300  rounded-full"
            required
            autoComplete="off"
          />

          <div className="border-gray-200  flex items-center">
            <button
              id="submit"
              type="submit"
              disabled={isLoading}
              className={` w-1/2 m-auto bg-dark-blue text-white rounded-md hover:bg-blue-700 h-10  mb-4 
     ${isLoading ? "cursor-not-allowed opacity-50" : ""}`}
            >
              {isLoading ? "Submitting..." : "Submit Feedback"}
            </button>
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
