"use client";
import { useState } from "react";
import Password1 from "../../../functions/generatePassword"; // Adjust the path as necessary

const Hero = () => {
  const [inputValue, setInputValue] = useState("");
  const [generatedPassword, setGeneratedPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const passwordGenerator = new Password1(inputValue);
    const newPassword = passwordGenerator.generateHash();
    setGeneratedPassword(newPassword);
    console.log(newPassword);
  };

  const content = {
    subheading: 'Fortify Your Passwords Instantly.',
    btnText: "Generate",
  };

  return (
    <>
      <h1 className="hero-heading fw-light tx-dark">
        <span className="position-relative">Secure</span> Passwords Made <span className="position-relative">Simple</span>
      </h1>
      <p className="text-lg mb-75 pt-60 lg-mb-40 lg-pt-40">
        {content.subheading}
      </p>
      <div
        className="subscribe-form m-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <form onSubmit={handleFormSubmit} className="position-relative">
          <input
            type="password"
            placeholder="Enter your unsecure password"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="tran3s position-absolute fw-500">
            {content.btnText}
          </button>
        </form>
        <p className="m0 pt-10 fw-500 tx-dark fs-15">
          Your password never leaves your computer
        </p>
      </div>
      {generatedPassword && (
        <div className="generated-password">
          <p>Generated Password: {generatedPassword}</p>
        </div>
      )}
    </>
  );
};

export default Hero;