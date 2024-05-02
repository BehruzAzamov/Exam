import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">
        We'd love to hear from you! Whether you have a question, feedback, or
        just want to say hello, feel free to reach out to us using the form
        below.
      </p>
      <form className="mb-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            className="w-full px-3 py-2 border rounded-md"
            rows="4"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Send
        </button>
      </form>
      <p>
        You can also send a message via Telegram. Reach out to us on{' '}
        <a href="https://t.me/Azamov_Behruz_JS" className="text-blue-500">
          Telegram
        </a>
      </p>
      <p>
        For any other inquiries, please feel free to send an email to{' '}
        <a href="mailto:behruz.azamov2013@gmail.com" className="text-blue-500">
          behruz.azamov2013@gmail.com
        </a>
      </p>
    </div>
  );
};

export default Contact;