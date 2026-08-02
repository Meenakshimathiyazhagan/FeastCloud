import React from "react";
import { FaCloud } from "react-icons/fa";


const Footer = () => {

  return (

    <footer
      className="
      py-12
      px-6
      bg-[#0b2419]
      dark:bg-[#020604]
      border-t
      border-[#e8751a]/30
      text-white
      transition-colors
      duration-500
      "
    >


      <div
        className="
        max-w-7xl
        mx-auto
        text-center
        " 
      >





        {/* Logo */}

        <div
          className="
          flex
          justify-center
          items-center
          gap-3
          text-3xl
          font-bold
          mb-5
          "
        >

          <FaCloud
            className="
            text-[#e8751a]
            text-4xl
            "
          />

          <span>
            FeastCloud
          </span>

        </div>







        {/* Description */}

        <p
          className="
          text-gray-300
          text-base
          md:text-lg
          max-w-xl
          mx-auto
          leading-relaxed
          "
        >

          Premium cloud kitchen & catering solutions
          delivering fresh meals and unforgettable food experiences.

        </p>








        {/* Navigation Links */}

        <div
          className="
          mt-8
          flex
          flex-wrap
          justify-center
          gap-6
          md:gap-10
          text-sm
          text-gray-300
          "
        >


          <a
            href="#"
            className="
            hover:text-[#e8751a]
            transition
            duration-300
            hover:-translate-y-1
            "
          >
            Home
          </a>



          <a
            href="#services"
            className="
            hover:text-[#e8751a]
            transition
            duration-300
            hover:-translate-y-1
            "
          >
            Services
          </a>




          <a
            href="#stories"
            className="
            hover:text-[#e8751a]
            transition
            duration-300
            hover:-translate-y-1
            "
          >
            Food Stories
          </a>




          <a
            href="#about"
            className="
            hover:text-[#e8751a]
            transition
            duration-300
            hover:-translate-y-1
            "
          >
            About
          </a>




          <a
            href="#contact"
            className="
            hover:text-[#e8751a]
            transition
            duration-300
            hover:-translate-y-1
            "
          >
            Contact
          </a>


        </div>









        {/* Copyright */}


        <div
          className="
          mt-10
          pt-6
          border-t
          border-white/10
          text-sm
          text-gray-400
          "
        >

          © 2026 FeastCloud. All rights reserved.

        </div>





      </div>


    </footer>

  );

};


export default Footer;