import React, { useState } from "react";

const RatingForm: React.FC<{ profileId: number }> = ({ profileId }) => {
  const [rating, setRating] = useState(0);
  //const navigate = useNavigate();

  const handleStarClick = (newRating: number) => {
    setRating(newRating);
  };

  // const handleSubmitRating = async () => {
  //   try {
  //     // Replace with your actual API call and error handling
  //     const response = await fetch(`/api/profiles/${profileId}/rate`, {
  //       method: "POST",
  //       body: JSON.stringify({ rating }),
  //     });

  //     if (response.ok) {
  //       console.log("Rating submitted successfully!");
  //       navigate("/profile/" + profileId); // Navigate back to profile page
  //     } else {
  //       console.error("Error submitting rating:", await response.text());
  //       // Handle error gracefully, e.g., display an error message
  //     }
  //   } catch (error) {
  //     console.error("Error submitting rating:", error);
  //     // Handle error gracefully, e.g., display an error message
  //   }
  // };

  return (
    <div
      dir="rtl"
      className="bg-[#EEEEEE] min-h-screen flex justify-center items-center"
    >
      {/* Page background and centering */}
      <div className="rating-container w-1/3 h-1/3 rounded-lg shadow-md bg-white flex flex-col items-center justify-center">
        {/* Box styles */}
        <h2 className="text-2xl font-medium mb-4 text-[#31363F] flex-row w-full justify-end pr-4 pt-4 ">
          به این دانشجو امتیاز دهید
        </h2>
        {/* Title styling */}
        <div className="rating mt-4 flex justify-center items-center pb-5 w-full">
          {" "}
          {/* Rating container */}
          <label htmlFor="rating-input"></label>
          <input
            type="number"
            min={1}
            max={5}
            step={1}
            className="rating-input w-1/2 h-10 rounded px-2 text-center text-gray-500 border border-gray-300 
          focus:outline-none focus:ring-2 focus:ring-gray-500"
            id="rating-input"
            placeholder="3"
          />
        </div>

        <div className="rating-buttons mt-4 flex justify-center w-full items-center gap-5 pb-4">
          {/* Buttons container */}

          <button
            className="register-button bg-[#76ABAE] text-white py-2 px-4 rounded-lg hover:bg-[#6197A2] w-36" /*onClick={handleSubmitRating}*/
          >
            ثبت
          </button>
          <a href="/StudentProfile">
            <button
              className="cancel-button bg-[#31363F] text-white py-2 px-4 rounded-lg hover:bg-[#29323A] w-36" /*onClick={() => navigate('/profile/' + profileId)}*/
            >
              بازگشت
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RatingForm;
