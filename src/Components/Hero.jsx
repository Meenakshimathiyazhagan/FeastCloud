import { motion } from "framer-motion";

// Parent container: staggers each child's entrance animation
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

// Shared fade-up entrance for text/content blocks
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

// Headline: reveals word-by-word instead of as one block
const headlineContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const wordVariants = {
  hidden: {
    opacity: 0,
    y: "100%",
  },
  show: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Image: curtain-style clip-path reveal, opening left to right
const imageRevealVariants = {
  hidden: {
    clipPath: "inset(0 100% 0 0)",
  },
  show: {
    clipPath: "inset(0 0% 0 0)",
    transition: {
      duration: 1,
      ease: [0.65, 0, 0.35, 1],
      delay: 0.2,
    },
  },
};

const imageScaleVariants = {
  hidden: {
    scale: 1.15,
  },
  show: {
    scale: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

// Badges: spring in with a slight rotation for a "settling into place" feel
const badgeSpring = (fromRotate, delay) => ({
  hidden: {
    opacity: 0,
    scale: 0.6,
    rotate: fromRotate,
  },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 18,
      delay,
    },
  },
});

// Continuous ambient float for the badge cards, layered on top of the spring-in
const floatLoop = {
  y: [0, -8, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Slow ambient drift for the background gradient orbs
const orbDrift = (duration, xRange, yRange) => ({
  x: xRange,
  y: yRange,
  transition: {
    duration,
    repeat: Infinity,
    ease: "easeInOut",
  },
});

const headlineLines = [
  "Fresh Meals.",
  "Big Celebrations.",
  "Delivered Perfectly.",
];


function Hero() {
  return (
    <section

      id="home"

      className="
      relative
      min-h-screen
      grid
      grid-cols-1
      lg:grid-cols-2
      items-center
      gap-14
      px-6
      sm:px-10
      lg:px-[8%]
      pt-32
      pb-20
      bg-[#fff8ed]
      dark:bg-[#08150f]
      transition-colors
      duration-500
      overflow-hidden
      "
    >

      {/* Ambient background orbs */}

      <motion.div
        aria-hidden="true"
        animate={orbDrift(9, [0, 40, 0], [0, 30, 0])}
        className="
        pointer-events-none
        absolute
        -top-24
        -left-24
        w-[420px]
        h-[420px]
        rounded-full
        bg-[#e8751a]/20
        dark:bg-[#e8751a]/10
        blur-3xl
        "
      />

      <motion.div
        aria-hidden="true"
        animate={orbDrift(11, [0, -30, 0], [0, 40, 0])}
        className="
        pointer-events-none
        absolute
        top-1/3
        -right-32
        w-[480px]
        h-[480px]
        rounded-full
        bg-[#12372a]/10
        dark:bg-[#e8751a]/10
        blur-3xl
        "
      />


      {/* Left Content */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10"
      >

        <motion.h1
          variants={headlineContainer}
          className="
          text-4xl
          sm:text-5xl
          lg:text-6xl
          font-extrabold
          leading-tight
          text-[#12372a]
          dark:text-white
          "
        >

          {headlineLines.map((line, i) => (

            <span
              key={i}
              className="block overflow-hidden"
            >

              <motion.span
                variants={wordVariants}
                className="inline-block"
              >

                {line}

              </motion.span>

            </span>

          ))}

        </motion.h1>



        <motion.p
          variants={fadeUp}
          className="
          mt-6
          max-w-xl
          text-lg
          leading-8
          text-gray-600
          dark:text-gray-300
          "
        >

          Premium cloud kitchen services delivering fresh meals,
          corporate catering, event food solutions and bulk orders.

        </motion.p>




        {/* Buttons */}

        <motion.div
          variants={fadeUp}
          className="
          mt-8
          flex
          flex-wrap
          gap-4
          "
        >

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 12px 30px rgba(232,117,26,0.45)",
            }}
            whileTap={{ scale: 0.97 }}
            className="
            bg-[#e8751a]
            text-white
            px-8
            py-4
            rounded-full
            font-semibold
            transition-shadow
            duration-300
            "
          >
            Order Now
          </motion.button>



          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 12px 30px rgba(18,55,42,0.35)",
            }}
            whileTap={{ scale: 0.97 }}
            className="
            bg-[#12372a]
            dark:bg-[#e8751a]
            text-white
            px-8
            py-4
            rounded-full
            font-semibold
            transition-shadow
            duration-300
            "
          >
            Book Catering
          </motion.button>


        </motion.div>





        {/* Rating Card */}


        <motion.div
          variants={fadeUp}
          whileHover={{ y: -4 }}
          className="
          mt-10
          inline-block
          bg-white/90
          dark:bg-white/10
          backdrop-blur-xl
          border
          border-white/30
          dark:border-white/10
          rounded-2xl
          p-5
          shadow-xl
          text-gray-700
          dark:text-white
          transition-shadow
          "
        >

          <motion.span
            animate={{ rotate: [0, 15, -10, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
            className="inline-block"
          >
            ⭐
          </motion.span>
          {" "}4.9 Customer Rating

          <br />

          🍽️ 10K+ Meals Delivered


        </motion.div>



      </motion.div>







      {/* Right Image */}


      <div
        className="
        relative
        z-10
        "
      >

        <motion.div
          variants={imageRevealVariants}
          initial="hidden"
          animate="show"
          className="
          rounded-[40px]
          overflow-hidden
          shadow-2xl
          "
        >

          <motion.img
            variants={imageScaleVariants}
            initial="hidden"
            animate="show"
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="Food"
            className="
            w-full
            h-[350px]
            sm:h-[450px]
            lg:h-[550px]
            object-cover
            transition-transform
            duration-500
            hover:scale-[1.05]
            "
          />

        </motion.div>




        {/* Delivery Card */}


        <motion.div
          variants={badgeSpring(-8, 1)}
          initial="hidden"
          animate="show"
          whileHover={{ scale: 1.06 }}
          className="
          absolute
          top-6
          right-4
          sm:top-10
          sm:right-5
          bg-white/90
          dark:bg-[#12372a]
          backdrop-blur-xl
          px-5
          py-4
          rounded-2xl
          shadow-xl
          text-[#12372a]
          dark:text-white
          font-semibold
          "
        >

          <motion.div animate={floatLoop}>

            🚚 Fast Delivery

          </motion.div>

        </motion.div>




        {/* Floating Food Badge */}


        <motion.div
          variants={badgeSpring(8, 1.3)}
          initial="hidden"
          animate="show"
          whileHover={{ scale: 1.06 }}
          className="
          absolute
          bottom-6
          left-4
          bg-white/90
          dark:bg-[#12372a]
          backdrop-blur-xl
          px-5
          py-4
          rounded-2xl
          shadow-xl
          text-[#12372a]
          dark:text-white
          "
        >

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >

            🍴 Fresh & Premium Food

          </motion.div>

        </motion.div>



      </div>



    </section>
  );
}


export default Hero;