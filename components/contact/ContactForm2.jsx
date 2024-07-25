"use client"; // This must be at the top of the file

import React, { useState } from "react";

const ContactForm2 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formElement = document.createElement("form");
    formElement.action = "https://api.web3forms.com/submit";
    formElement.method = "POST";

    const accessKeyInput = document.createElement("input");
    accessKeyInput.type = "hidden";
    accessKeyInput.name = "access_key";
    accessKeyInput.value = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    const nameInput = document.createElement("input");
    nameInput.type = "hidden";
    nameInput.name = "name";
    nameInput.value = formData.name;

    const emailInput = document.createElement("input");
    emailInput.type = "hidden";
    emailInput.name = "email";
    emailInput.value = formData.email;

    const messageInput = document.createElement("textarea");
    messageInput.name = "message";
    messageInput.style.display = "none";
    messageInput.value = formData.message;

    const redirectInput = document.createElement("input");
    redirectInput.type = "hidden";
    redirectInput.name = "redirect";
    redirectInput.value = "https://web3forms.com/success";

    formElement.appendChild(accessKeyInput);
    formElement.appendChild(nameInput);
    formElement.appendChild(emailInput);
    formElement.appendChild(messageInput);
    formElement.appendChild(redirectInput);

    document.body.appendChild(formElement);
    formElement.submit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="messages" />
      <div className="row controls">
        <div className="col-12">
          <div className="input-group-meta form-group mb-35">
            <label className="d-block">Name*</label>
            <input
              type="text"
              placeholder="Alan Turing"
              name="name"
              required="required"
              value={formData.name}
              onChange={handleChange}
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta form-group mb-40">
            <label className="d-block">Email*</label>
            <input
              type="email"
              placeholder="example@contact.com"
              name="email"
              required="required"
              value={formData.email}
              onChange={handleChange}
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta form-group mb-30">
            <textarea
              placeholder="Your message*"
              name="message"
              required="required"
              value={formData.message}
              onChange={handleChange}
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-12">
          <button className="btn-one fw-500 w-100 text-uppercase fs-14 d-block">
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm2;
