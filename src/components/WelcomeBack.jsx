import React from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomeBack() {
  const navigate = useNavigate(); // Create a navigate function

  const handleSignUpClick = () => {
    navigate("/signup"); // Navigate to the signup route when the button is clicked
  };
  return (
    <div className="w-[384px] h-[455px] bg-gradient-to-br from-pink-500 to-red-500  flex-col items-center justify-center text-white   sm:flex hidden">
      <h1 className="  mb-6 font-[600] text-[35px]">WELCOME BACK!</h1>
      <p className="Railway mb-10 w-[198px] h-[27px] text-[18px]">Don't have an account?</p>
      <button
        onClick={handleSignUpClick} 
      className="bg-gradient-to-br from-pink-500 to-red-500 text-white font-bold py-2 px-4 rounded-full  border-2 border-solid border-white">
        SIGN UP
      </button>
    </div>
  );
}

export { WelcomeBack};