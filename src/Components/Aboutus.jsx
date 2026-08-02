import React from "react";
import { motion } from "framer-motion";


const stats = [
  {
    number: "10K+",
    label: "Meals",
  },
  {
    number: "200+",
    label: "Events",
  },
  {
    number: "50+",
    label: "Partners",
  },
];


// Image slides + fades in from the left as it enters the viewport
const imageVariants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// Right column staggers heading, paragraph, and stats grid in sequence
const contentVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Stat cards stagger in with a slight pop
const statsGridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const statCardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};


const Aboutus = () => {

  return (

    <section
      id="about"
      className="
      py-20
      px-6
      bg-white
      dark:bg-[#08150f]
      transition-colors
      duration-500
      "
    >




      <div
        className="
        max-w-7xl
        mx-auto
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-12
        items-center
        "
      >





        {/* Left Image */}


        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="
          overflow-hidden
          rounded-3xl
          shadow-2xl
          "
        >

          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="FeastCloud Kitchen"
            className="
            w-full
            h-[350px]
            md:h-[450px]
            object-cover
            transition
            duration-500
            hover:scale-105
            "
          />


        </motion.div>









        {/* Right Content */}


        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >



          <motion.h2
            variants={fadeUp}
            className="
            text-4xl
            md:text-5xl
            font-bold
            text-[#12372a]
            dark:text-white
            mb-6
            "
          >

            About FeastCloud

          </motion.h2>








          <motion.p
            variants={fadeUp}
            className="
            text-lg
            leading-relaxed
            text-gray-600
            dark:text-gray-300
            mb-10
            "
          >

            We combine technology and culinary expertise
            to deliver premium food experiences.

          </motion.p>









          {/* Stats Cards */}


          <motion.div
            variants={statsGridVariants}
            className="
            grid
            grid-cols-1
            sm:grid-cols-3
            gap-5
            "
          >


            {
              stats.map((stat,index)=>(


                <motion.div
                  key={index}
                  variants={statCardVariants}
                  whileHover={{ y: -8 }}
                  className="
                  bg-[#fff8ed]
                  dark:bg-white/10
                  backdrop-blur-xl
                  border
                  border-white/20
                  rounded-2xl
                  p-5
                  text-center
                  shadow-lg
                  transition-shadow
                  duration-300
                  hover:shadow-xl
                  "
                >




                  <h3
                    className="
                    text-3xl
                    font-bold
                    text-[#12372a]
                    dark:text-[#e8751a]
                    "
                  >

                    {stat.number}

                  </h3>






                  <p
                    className="
                    mt-2
                    text-gray-600
                    dark:text-gray-300
                    "
                  >

                    {stat.label}

                  </p>





                </motion.div>


              ))
            }



          </motion.div>





        </motion.div>





      </div>




    </section>

  );

};


export default Aboutus;