import { motion } from "framer-motion";
import { FaUtensils, FaBuilding, FaBox } from "react-icons/fa";
import { FaChampagneGlasses } from "react-icons/fa6";


const services = [
  {
    icon: <FaUtensils />,
    title: "Daily Meal Plans",
    description:
      "Healthy fresh meals prepared daily for families and individuals.",
  },
  {
    icon: <FaBuilding />,
    title: "Corporate Catering",
    description:
      "Professional food solutions for offices and companies.",
  },
  {
    icon: <FaChampagneGlasses />,
    title: "Event Catering",
    description:
      "Memorable food experiences for celebrations.",
  },
  {
    icon: <FaBox />,
    title: "Bulk Food Orders",
    description:
      "Large scale food preparation for organizations.",
  },
];


// Heading fades up on its own as it enters the viewport
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
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};


const Services = () => {

  return (

    <section
      id="services"
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
        Our Food Solutions
      </motion.h2>





      {/* Cards */}

      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="
        max-w-7xl
        mx-auto
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-8
        "
      >


        {
          services.map((service,index)=>(


            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -12 }}
              className="
              group
              bg-white/80
              dark:bg-white/10
              backdrop-blur-xl
              border
              border-white/30
              dark:border-white/10
              rounded-3xl
              p-8
              text-center
              shadow-lg
              transition-shadow
              duration-300
              hover:shadow-2xl
              "
            >




              {/* Icon */}

              <motion.div
                whileHover={{ scale: 1.15, rotate: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="
                flex
                justify-center
                items-center
                text-5xl
                text-[#e8751a]
                mb-6
                "
              >

                {service.icon}

              </motion.div>







              {/* Title */}

              <h3
                className="
                text-2xl
                font-bold
                text-[#12372a]
                dark:text-white
                mb-4
                "
              >

                {service.title}

              </h3>







              {/* Description */}

              <p
                className="
                text-gray-600
                dark:text-gray-300
                leading-7
                "
              >

                {service.description}

              </p>




            </motion.div>


          ))
        }


      </motion.div>



    </section>

  );

};


export default Services;