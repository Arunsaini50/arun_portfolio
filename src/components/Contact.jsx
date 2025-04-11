import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ogpz8t7', 'template_qmvkr4k', form.current, 'apeuP8kOG5MHyl7b2')
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully! 🎉");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4 py-16">
      <div className="max-w-3xl w-full bg-gray-800 bg-opacity-60 p-8 rounded-2xl shadow-xl">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10">Contact Me</h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input type="text" name="user_name" required className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white" />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input type="email" name="user_email" required className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white" />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea name="message" rows="5" required className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white"></textarea>
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
