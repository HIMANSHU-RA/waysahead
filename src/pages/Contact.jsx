import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the form submission logic (e.g., send data to an API or email).
    console.log("Form Submitted", formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
        Get in Touch
      </h1>

      {/* Contact Form */}
      <form
        className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-lg mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 border rounded-md"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-lg mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 border rounded-md"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-lg mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full p-3 border rounded-md"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-3 rounded-lg shadow-md hover:bg-blue-800 transition"
        >
          Submit
        </button>
      </form>

      {/* Company Information */}
      <div className="mt-12 text-lg text-gray-700">
        <h2 className="text-3xl font-semibold text-blue-900 mb-4">Our Office</h2>
        <p>123 Business St, Innovation City, 45678</p>
        <p>Email: <a href="mailto:contact@waysaheadglobal.com" className="text-blue-900">contact@waysaheadglobal.com</a></p>
        <p>Phone: +1 234 567 890</p>
      </div>

      {/* Optional: Google Maps Embed */}
      <div className="mt-12 w-full h-64">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.227018021761!2d-122.08555668468188!3d37.42199977982333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbbf09b37924d%3A0x32a922a3fa28590e!2sGoogleplex!5e0!3m2!1sen!2sus!4v1617890262164!5m2!1sen!2sus"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
