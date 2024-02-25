"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [validName, setValidName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validMessage, setValidMessage] = useState(true);
  const [validForm, setValidForm] = useState(false);

  const contactMessage = {
    from_name: name,
    reply_to: email,
    message,
  };

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const sendEmail = (e) => {
    e.preventDefault();

    const errorCheck = {
      name: validName,
      email: validEmail,
      message: validMessage,
      form: validForm,
    };

    if (name === "") {
      setValidName(false);
      errorCheck.name = false;
    }

    if (!emailRegex.test(email)) {
      setValidEmail(false);
      errorCheck.email = false;
    }

    if (message === "") {
      setValidMessage(false);
      errorCheck.message = false;
    }

    if (!errorCheck.message || !errorCheck.email || !errorCheck.name) {
      setValidForm(false);
      return;
    }

    if (errorCheck.message && errorCheck.email && errorCheck.name) {
      setValidForm(true);
      errorCheck.form = true;

      if (errorCheck.form) {
        emailjs
          .send(
            "service_7h9cfpg",
            "template_6agexpm",
            contactMessage,
            "A50rxTr5mug440osn"
          )
          .then((response) => {
            console.log("SUCCESS!", response.status, response.text);
          })
          .catch((error) => {
            console.log("FAILED...", error);
          });
      }
    }
  };

  return (
    <main className="flex flex-col items-center h-auto mt-8">
      <div className="w-200 text-center">
        {`If you like what you've seen and feel the need to reach out, fill out
        the form below and I'll get back to you as soon as I can!`}
      </div>
      <div className="text-center mb-2 w-200"></div>
      <input
        className={
          validName
            ? "m-2 w-48 h-8 py-5 px-3 rounded-lg shadow-dark"
            : "m-2 w-48 h-8 py-5 px-3 rounded-lg border-2 border-red-500 shadow-dark"
        }
        type="text"
        placeholder="Name"
        name="from_name"
        onChange={(e) => {
          setName(e.target.value);
          setValidName(true);
        }}
      />
      <input
        className={
          validName
            ? "m-2 w-48 h-8 py-5 px-3 rounded-lg border-2 shadow-dark"
            : "m-2 w-48 h-8 py-5 px-3 rounded-lg border-2 shadow-dark border-red-500"
        }
        type="email"
        placeholder="Contact Email"
        name="reply_to"
        onChange={(e) => {
          setEmail(e.target.value);
          setValidEmail(true);
        }}
      />
      <textarea
        className={
          validMessage
            ? "m-2 w-96 h-48 px-3 py-5 rounded-lg border-2 shadow-dark"
            : "m-2 w-96 h-48 px-3 py-5 rounded-lg border-2 shadow-dark border-red-500"
        }
        placeholder="Your Question for me goes right here."
        name="message"
        onChange={(e) => {
          setMessage(e.target.value);
          setValidMessage(true);
        }}
      />
      <button
        className="m-2 bg-blueGray p-2 rounded-lg shadow-dark"
        type="button"
        onClick={sendEmail}
      >
        Submit
      </button>
      {validForm ? (
        <div className="w-200 text-center m-2">
          {`Thanks for the message. I'll get back to you as soon as I can!`}
        </div>
      ) : (
        <div></div>
      )}
    </main>
  );
}
