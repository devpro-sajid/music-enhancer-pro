import React from "react";
import {
  FaClock,
  FaEnvelopeOpen,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMailchimp,
  FaPhoneAlt,
  FaRegClock,
  FaTwitter,
} from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="md:flex justify-center items-center md:space-x-10 md:space-y-0 space-y-10 py-16">
      {/* left side */}
      <div className="md:w-1/2">
        <h2 className="sec-title text-2xl font-bold dark:text-white">
          Leave A Message
        </h2>
        <form className="py-4">
          <div className="sm:flex justify-center items-center sm:space-x-4 space-y-3 sm:space-y-0 pb-3 ">
            <div className="sm:w-1/2">
              <p className="font-bold pb-1 dark:text-white">Name</p>
              <input
                className="bg-dashboard rounded-sm py-2 px-4 outline-1 focus:outline-orange-600 border border-gray-300 text-prime w-full"
                type="text"
                name="name"
                id="nameInput"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="sm:w-1/2">
              <p className="font-bold pb-1 dark:text-white">Email</p>
              <input
                className="bg-dashboard rounded-sm py-2 px-4 outline-1 focus:outline-orange-600 border border-gray-300 text-prime w-full"
                type="email"
                name="email"
                id="emailInput"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          {/* 2nd row */}
          <div className="sm:flex justify-center items-center sm:space-x-4 space-y-3 sm:space-y-0 pb-3">
            <div className="sm:w-1/2">
              <p className="font-bold pb-1 dark:text-white">Subject</p>
              <input
                className="bg-dashboard rounded-sm py-2 px-4 outline-1 focus:outline-orange-600 border border-gray-300 text-prime w-full"
                type="text"
                name="subject"
                id="subjectInput"
                placeholder="Subject"
                required
              />
            </div>
            <div className="sm:w-1/2">
              <p className="font-bold pb-1 dark:text-white">Phone</p>
              <input
                className="bg-dashboard rounded-sm py-2 px-4 outline-1 focus:outline-orange-600 border border-gray-300 text-prime w-full"
                type="tel"
                name="email"
                id="emailInput"
                placeholder="Your Phone"
                required
              />
            </div>
          </div>
          {/* 3rd row */}
          <div className="pb-3">
            <p className="font-bold pb-1 dark:text-white">Message</p>
            <textarea
              id="messageinput"
              rows="4"
              class="bg-dashboard rounded-sm py-2 px-4 outline-1 focus:outline-orange-600 border border-gray-300 text-prime w-full"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-prime w-full py-2 px-3 text-white font-bold sec-desc rounded-sm hover:bg-orange-600 duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
      {/* right side */}
      <div className="md:w-1/2">
        <p className="text-prime mb-2 sec-title-top text-[25px] font-bold">
          Contact Us
        </p>
        <h3 className="lg:text-3xl text-2xl dark:text-white  pb-2 sec-title font-semibold">
          Get Closer with Us
        </h3>
        <p className="mb-2 sec-desc text-gray-500 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore dolore eiusmod tempor incididunt eiusmod
          tempor incididunt labore dolore eiusmod.
        </p>

        {/* icon box */}
        <div className="grid sm:grid-cols-2 gap-6 py-4 mb-2">
          {/* 1st */}
          <div className="flex  group space-x-3">
            {/* icon */}
            <div className="rounded-full bg-prime p-4 group-hover:bg-black dark:group-hover:bg-white w-12 h-12 items-center flex flex-col ">
              <FaLocationArrow className="text-xl text-black group-hover:text-white dark:group-hover:text-black"></FaLocationArrow>
            </div>
            {/* texts */}
            <div>
              <h4 className="sec-title dark:text-white text-xl font-bold">
                Location
              </h4>
              <p className="sec-desc dark:text-white">
                Puputan Renon, 1131 DPS, Denpasar, Bali
              </p>
            </div>
          </div>
          {/* 2nd */}
          <div className="flex  group space-x-3">
            {/* icon */}
            <div className="rounded-full bg-prime p-3 group-hover:bg-black dark:group-hover:bg-white w-12 h-12 items-center flex flex-col ">
              <FaRegClock className="text-2xl text-black group-hover:text-white dark:group-hover:text-black"></FaRegClock>
            </div>
            {/* texts */}
            <div>
              <h4 className="sec-title dark:text-white text-xl font-bold">
                Opening Hours
              </h4>
              <p className="sec-desc dark:text-white pr-2">
                Mon - Sun 09:00 AM - 20:00 PM
              </p>
            </div>
          </div>
          {/* 3rd */}
          <div className="flex  group space-x-3">
            {/* icon */}
            <div className="rounded-full bg-prime p-3 group-hover:bg-black dark:group-hover:bg-white w-12 h-12 items-center flex flex-col ">
              <FaPhoneAlt className="text-2xl text-black group-hover:text-white dark:group-hover:text-black"></FaPhoneAlt>
            </div>
            {/* texts */}
            <div>
              <h4 className="sec-title dark:text-white text-xl font-bold">
                Contact
              </h4>
              <p className="sec-desc dark:text-white pr-2">+8801868061206</p>
            </div>
          </div>
          {/* 4rd */}
          <div className="flex  group space-x-3">
            {/* icon */}
            <div className="rounded-full bg-prime p-3 group-hover:bg-black dark:group-hover:bg-white w-12 h-12 items-center flex flex-col ">
              <FaEnvelopeOpen className="text-2xl text-black group-hover:text-white dark:group-hover:text-black"></FaEnvelopeOpen>
            </div>
            {/* texts */}
            <div>
              <h4 className="sec-title dark:text-white text-xl font-bold">
                Email
              </h4>
              <p className="sec-desc dark:text-white pr-2">
                info@musicenpro.com
              </p>
            </div>
          </div>
        </div>
        {/* icon end */}
        <hr />
        {/* social */}
        <div className="sm:flex justify-between items-center sm:space-y-0 space-y-3 pt-3">
          <h2 className="sec-title text-2xl font-bold dark:text-white">
            Social Media :
          </h2>
          <div className="flex space-x-4">
            <FaFacebook className="text-xl dark:text-white"></FaFacebook>
            <FaInstagram className="text-xl dark:text-white"></FaInstagram>
            <FaTwitter className="text-xl dark:text-white"></FaTwitter>
            <FaLinkedin className="text-xl dark:text-white"></FaLinkedin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
