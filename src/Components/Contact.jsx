"use client";

import React, { useEffect, useRef, useState } from "react";

/* ---------- Scroll-reveal wrapper ---------- */
/* Fades + slides an element up into view the first time it enters the viewport. */
const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
      transition-all
      duration-700
      ease-out
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      ${className}
      `}
    >
      {children}
    </div>
  );
};

/* ---------- Minimal line icons (generic, non-brand-asset) ---------- */

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" {...props}>
    <path d="M15 8.5h-2a1.5 1.5 0 0 0-1.5 1.5v2h3.4l-.5 3H11.5V21" />
    <path d="M13.5 3.5A8.5 8.5 0 1 0 22 12a8.5 8.5 0 0 0-8.5-8.5Z" />
  </svg>
);

const WhatsappIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" {...props}>
    <path d="M6.4 17.6 4.5 21l3.5-1.9a8.4 8.4 0 1 0-1.6-1.5Z" />
    <path d="M9 9.7c0-.6.5-1 1-1h.5c.3 0 .5.2.6.4l.6 1.6c.1.3 0 .6-.2.8l-.5.5c.5 1 1.3 1.8 2.3 2.3l.5-.5c.2-.2.5-.3.8-.2l1.6.6c.3.1.4.4.4.7v.5c0 .5-.4 1-1 1-3 0-6.6-3.6-6.6-6.7Z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <line x1="7.5" y1="10.5" x2="7.5" y2="16.5" />
    <circle cx="7.5" cy="7.3" r="1" fill="currentColor" stroke="none" />
    <path d="M11.5 16.5v-3.6c0-1.2.9-2 2-2s1.8.8 1.8 2v3.6" />
  </svg>
);

const socialLinks = [
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "WhatsApp", href: "#", Icon: WhatsappIcon },
  { label: "LinkedIn", href: "#", Icon: LinkedinIcon },
];

const HeartIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" {...props}>
    <path d="M12 20.2s-7-4.4-9.3-8.7C1.2 8.6 2.6 5 6 4.4c2-.4 3.7.6 6 3 2.3-2.4 4-3.4 6-3 3.4.6 4.8 4.2 3.3 7.1-2.3 4.3-9.3 8.7-9.3 8.7Z" />
  </svg>
);

/* Like button — soft-peach idle state, deep-green ring, orange when active (same orange as stars/icons) */
const LikeButton = ({ className = "" }) => {
  const [liked, setLiked] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setLiked((v) => !v)}
      aria-pressed={liked}
      aria-label="Like"
      className={`
      inline-flex
      items-center
      gap-2
      h-10
      pl-3
      pr-4
      rounded-full
      border
      transition-all
      duration-300
      ${
        liked
          ? "bg-[#e8751a] border-transparent text-white shadow-lg"
          : "bg-[#fff0df] dark:bg-white/10 border-[#12372a]/10 dark:border-white/10 text-[#12372a] dark:text-white hover:border-[#e8751a]/40"
      }
      hover:scale-105
      ${className}
      `}
    >
      <HeartIcon
        className={`
        w-5
        h-5
        transition-transform
        duration-300
        ${liked ? "scale-110" : ""}
        `}
        fill={liked ? "currentColor" : "none"}
      />
      <span className="text-sm font-semibold">{liked ? "Liked" : "Like"}</span>
    </button>
  );
};

/* Fork/spoon icon for the booking-confirmation toast */
const PlateIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9 15.5A3.5 3.5 0 0 1 9 8.5" />
    <path d="M9 8.5v7" />
    <path d="M15 8.5v7M13.6 8.5v3a1.4 1.4 0 0 0 2.8 0v-3" />
  </svg>
);

/* Generic pill toast — reused for both the booking confirmation and the feedback confirmation */
const Toast = ({ show, title, subtitle, icon: Icon, position = "top-6" }) => (
  <div
    role="status"
    aria-live="polite"
    className={`
    fixed
    z-50
    ${position}
    left-1/2
    -translate-x-1/2
    sm:left-auto
    sm:right-6
    sm:translate-x-0
    transition-all
    duration-500
    ease-out
    ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
    `}
  >
    <div
      className="
      flex
      items-center
      gap-3
      pl-4
      pr-5
      py-4
      rounded-2xl
      bg-[#12372a]
      dark:bg-[#e8751a]
      text-white
      shadow-2xl
      max-w-sm
      "
    >
      <span
        className="
        flex-shrink-0
        w-9
        h-9
        rounded-full
        bg-[#e8751a]
        dark:bg-[#12372a]
        flex
        items-center
        justify-center
        "
      >
        <Icon className="w-5 h-5" />
      </span>
      <div>
        <p className="font-bold text-sm leading-tight">{title}</p>
        <p className="text-xs text-white/80 mt-0.5">{subtitle}</p>
      </div>
    </div>
  </div>
);

/* Star icon for the feedback rating */
const StarIcon = (props) => (
  <svg viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" {...props}>
    <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L12 3.5Z" />
  </svg>
);

/* 5-star rating — orange fill on selected/hovered stars (same orange used on the social icons) */
const StarRating = ({ rating, hovered, onHover, onRate }) => (
  <div className="flex items-center gap-1" onMouseLeave={() => onHover(0)}>
    {[1, 2, 3, 4, 5].map((n) => {
      const filled = n <= (hovered || rating);
      return (
        <button
          key={n}
          type="button"
          aria-label={`Rate ${n} star${n > 1 ? "s" : ""}`}
          onMouseEnter={() => onHover(n)}
          onClick={() => onRate(n)}
          className="p-0.5 transition-transform duration-200 hover:scale-125"
        >
          <StarIcon
            className={`
            w-5
            h-5
            transition-colors
            duration-200
            ${filled ? "text-[#e8751a]" : "text-[#12372a]/25 dark:text-white/25"}
            `}
            fill={filled ? "currentColor" : "none"}
          />
        </button>
      );
    })}
  </div>
);

const Contact = () => {
  const [showToast, setShowToast] = useState(false);
  const toastTimer = useRef(null);

  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [showFeedbackToast, setShowFeedbackToast] = useState(false);
  const feedbackToastTimer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setShowToast(true);

    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setShowToast(false), 4500);

    // TODO: wire up real submission logic (API call / email service) here.
    // e.g. fetch("/api/book", { method: "POST", body: new FormData(e.target) })

    return false;
  };

  const handleGiveFeedback = () => {
    setShowFeedbackToast(true);

    if (feedbackToastTimer.current) window.clearTimeout(feedbackToastTimer.current);
    feedbackToastTimer.current = window.setTimeout(
      () => setShowFeedbackToast(false),
      4000
    );

    // TODO: send { rating } to your feedback endpoint here.
  };

  return (
    <section
      id="contact"
      className="
      py-20
      px-6
      bg-[#fff8ed]
      dark:bg-[#08150f]
      transition-colors
      duration-500
      "
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2
          className="
          text-4xl
          font-bold
          text-[#12372a]
          dark:text-white
          "
        >
          Contact Us
        </h2>
        <p
          className="
          mt-2
          text-sm
          text-gray-600
          dark:text-gray-300
          "
        >
          We'd love to hear from you.
        </p>
      </div>

      <div
        className="
        max-w-7xl
        mx-auto
        grid
        grid-cols-1
        lg:grid-cols-[0.9fr_1.6fr]
        gap-8
        items-stretch
        "
      >
        {/* ============= IMAGE + CARDS COLUMN (visually on the right on desktop) ============= */}
        <div className="flex flex-col gap-6 lg:order-2">
          {/* Wide banner image */}
          <Reveal>
            <div
              className="
              relative
              w-full
              aspect-[16/7]
              rounded-3xl
              overflow-hidden
              shadow-[0_20px_50px_-15px_rgba(18,55,42,0.35)]
              group
              "
            >
              <img
                src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f"
                alt="Food Catering"
                className="
                w-full
                h-full
                object-cover
                transition
                duration-700
                group-hover:scale-105
                "
              />

              <LikeButton className="absolute top-4 right-4 backdrop-blur-md" />
            </div>
          </Reveal>

          {/* Feedback + Social row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Feedback Card */}
            <Reveal delay={100}>
              <div
                className="
                h-full
                p-6
                rounded-3xl
                bg-white/80
                dark:bg-white/10
                backdrop-blur-xl
                border
                border-white/30
                dark:border-white/10
                shadow-xl
                flex
                flex-col
                gap-3
                justify-between
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
                "
              >
                <div className="flex flex-col gap-2">
                  <h3
                    className="
                    text-lg
                    font-bold
                    text-[#12372a]
                    dark:text-white
                    "
                  >
                    Share Your Feedback
                  </h3>
                  <p
                    className="
                    text-sm
                    text-gray-600
                    dark:text-gray-300
                    "
                  >
                    Tell us how we did at your last event — it helps us plate up
                    an even better experience next time.
                  </p>
                  <StarRating
                    rating={rating}
                    hovered={hovered}
                    onHover={setHovered}
                    onRate={setRating}
                  />
                </div>

                <button
                  type="button"
                  onClick={handleGiveFeedback}
                  className="
                  self-start
                  px-5
                  h-10
                  rounded-xl
                  bg-[#12372a]
                  dark:bg-[#e8751a]
                  text-white
                  text-sm
                  font-semibold
                  transition
                  duration-300
                  hover:scale-105
                  hover:shadow-lg
                  hover:ring-4
                  hover:ring-[#fff0df]
                  dark:hover:ring-[#e8751a]/20
                  "
                >
                  Give Feedback
                </button>
              </div>
            </Reveal>

            {/* Social Media Card */}
            <Reveal delay={200}>
              <div
                className="
                h-full
                p-6
                rounded-3xl
                bg-white/80
                dark:bg-white/10
                backdrop-blur-xl
                border
                border-white/30
                dark:border-white/10
                shadow-xl
                flex
                flex-col
                gap-3
                justify-between
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
                "
              >
                <div className="flex flex-col gap-1">
                  <h3
                    className="
                    text-lg
                    font-bold
                    text-[#12372a]
                    dark:text-white
                    "
                  >
                    Follow FeastCloud
                  </h3>
                  <p
                    className="
                    text-sm
                    text-gray-600
                    dark:text-gray-300
                    "
                  >
                    Menus, behind-the-scenes and event highlights.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {socialLinks.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="
                      w-10
                      h-10
                      flex
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#e8751a]
                      text-white
                      shadow-md
                      transition
                      duration-300
                      hover:scale-110
                      hover:brightness-110
                      hover:shadow-lg
                      "
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ============= FORM COLUMN (visually on the left on desktop; form itself unchanged) ============= */}
        <Reveal delay={150} className="h-full lg:order-1">
          <form
onSubmit={handleSubmit}
className="
h-full
p-6
rounded-3xl
bg-white/80
dark:bg-white/10
backdrop-blur-xl
border
border-white/30
dark:border-white/10
shadow-2xl
flex
flex-col
gap-3
"
>



          {/* Heading */}

          <div>

            <h2
              className="
              text-3xl
              font-bold
              text-[#12372a]
              dark:text-white
              "
            >
              Book Catering
            </h2>


            <p
              className="
              mt-2
              text-sm
              text-gray-600
              dark:text-gray-300
              "
            >
              Plan your perfect food experience with FeastCloud.
            </p>

          </div>







          {/* Name */}

          <input
            type="text"
            placeholder="Your Name"
            className="
            h-12
            w-full
            px-4
            rounded-xl
            bg-white
            dark:bg-white/10
            text-gray-700
            dark:text-white
            placeholder-gray-400
            border
            border-gray-200
            dark:border-white/20
            outline-none
            focus:ring-2
            focus:ring-[#e8751a]
            "
          />








          {/* Email */}

          <input
            type="email"
            placeholder="Email Address"
            className="
            h-12
            w-full
            px-4
            rounded-xl
            bg-white
            dark:bg-white/10
            text-gray-700
            dark:text-white
            placeholder-gray-400
            border
            border-gray-200
            dark:border-white/20
            outline-none
            focus:ring-2
            focus:ring-[#e8751a]
            "
          />









          {/* Event Type */}


          <select
            className="
            h-12
            w-full
            px-4
            rounded-xl
            bg-white
            dark:bg-[#12372a]
            text-gray-700
            dark:text-white
            border
            border-gray-200
            dark:border-white/20
            outline-none
            focus:ring-2
            focus:ring-[#e8751a]
            "
          >

            <option>
              Select Event Type
            </option>

            <option>
              Corporate Event
            </option>

            <option>
              Wedding
            </option>

            <option>
              Party
            </option>

            <option>
              Daily Meals
            </option>


          </select>










          {/* Guests */}


          <input
            type="number"
            placeholder="Number of Guests"
            className="
            h-12
            w-full
            px-4
            rounded-xl
            bg-white
            dark:bg-white/10
            text-gray-700
            dark:text-white
            placeholder-gray-400
            border
            border-gray-200
            dark:border-white/20
            outline-none
            focus:ring-2
            focus:ring-[#e8751a]
            "
          />









          {/* Message */}


          <textarea
            placeholder="Message"
            className="
            h-20
            w-full
            px-4
            py-3
            rounded-xl
            resize-none
            bg-white
            dark:bg-white/10
            text-gray-700
            dark:text-white
            placeholder-gray-400
            border
            border-gray-200
            dark:border-white/20
            outline-none
            focus:ring-2
            focus:ring-[#e8751a]
            "
          />









          {/* Button */}


          <button
            type="submit"
            className="
            h-12
            w-full
            rounded-xl
            bg-[#12372a]
            dark:bg-[#e8751a]
            text-white
            font-semibold
            transition
            duration-300
            hover:scale-105
            hover:shadow-xl
            "
          >

            Submit Request

          </button>



        </form>
        </Reveal>
      </div>

      <Toast
        show={showToast}
        title="Order's in the oven! 🍽️"
        subtitle="We're cooking up your confirmation — expect an email shortly."
        icon={PlateIcon}
        position="top-6"
      />

      <Toast
        show={showFeedbackToast}
        title="Thanks for your feedback! 🙌"
        subtitle="We appreciate you helping us plate up something better."
        icon={StarIcon}
        position="top-24"
      />
    </section>
  );
};

export default Contact;