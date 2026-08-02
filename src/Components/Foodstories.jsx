import React from "react";
import { motion } from "framer-motion";


const stories = [
  {
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
    category: "Corporate Catering",
    title: "Corporate Lunch Service",
    description: "Fresh meals for workplace teams.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554",
    category: "Daily Meals",
    title: "Hostel Meal Program",
    description: "Nutritious student meal plans.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
    category: "Events",
    title: "Event Catering",
    description: "Luxury food experience.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
    category: "Healthy Meals",
    title: "Meal Subscription",
    description: "Balanced everyday meals.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af",
    category: "Business",
    title: "Office Food Solutions",
    description: "Reliable corporate food service.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    category: "Campaign",
    title: "Special Menu Campaign",
    description: "Creative seasonal menus.",
  },
];


// Heading fades up as it enters the viewport
const headingVariants = {
  hidden: {
    opacity: 0,
    y: 20,
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

// Card grid staggers its children in as the section scrolls into view
const gridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.97,
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


const FoodStories = () => {

  return (

    <section
      id="stories"
      className="
      py-20
      px-6
      bg-[#fff8ed]
      dark:bg-[#08150f]
      transition-colors
      duration-500
      "
    >




      {/* Heading */}

      <motion.h2
        variants={headingVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        className="
        text-4xl
        md:text-5xl
        font-bold
        text-center
        text-[#12372a]
        dark:text-white
        mb-12
        "
      >

        Our Food Stories

      </motion.h2>







      {/* Cards Grid */}

      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="
        max-w-7xl
        mx-auto
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-8
        "
      >



        {
          stories.map((story,index)=>(



            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="
              group
              overflow-hidden
              rounded-2xl
              bg-white/80
              dark:bg-white/10
              backdrop-blur-xl
              border
              border-white/30
              dark:border-white/10
              shadow-md
              transition-shadow
              duration-300
              hover:shadow-xl
              "
            >






              {/* Image */}

              <div
                className="
                overflow-hidden
                "
              >

                <img
                  src={story.image}
                  alt={story.title}
                  className="
                  w-full
                  h-[190px]
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-105
                  "
                />

              </div>








              {/* Category */}

              <span
                className="
                inline-block
                mt-6
                ml-8
                bg-[#fff0df]
                dark:bg-[#e8751a]/20
                text-[#e8751a]
                py-1
                px-3
                rounded-full
                text-xs
                font-medium
                "
              >

                {story.category}

              </span>









              {/* Title */}

              <h3
                className="
                px-8
                mt-4
                text-xl
                font-bold
                text-[#12372a]
                dark:text-white
                "
              >

                {story.title}

              </h3>









              {/* Description */}

              <p
                className="
                px-8
                pt-2
                pb-8
                text-[15px]
                text-gray-600
                dark:text-gray-300
                leading-6
                "
              >

                {story.description}

              </p>




            </motion.div>



          ))
        }



      </motion.div>




    </section>

  );

};


export default FoodStories;