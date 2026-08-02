import { useEffect, useRef, useState } from "react";
import {
  FaCloud,
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
} from "react-icons/fa";

import { FaCircleHalfStroke } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";


function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [activeSection, setActiveSection] = useState("home");

  const headerRef = useRef(null);


  const { theme, setTheme } = useTheme();


  const renderThemeIcon = () => {

    if(theme === "light"){

      return <FaSun />;

    }

    if(theme === "dark"){

      return <FaMoon />;

    }

    return <FaCircleHalfStroke />;

  };



  const menuItems = [
    {
      name: "Home",
      id: "home",
    },
    {
      name: "Services",
      id: "services",
    },
    {
      name: "Food Stories",
      id: "stories",
    },
    {
      name: "About",
      id: "about",
    },
    {
      name: "Contact",
      id: "contact",
    },
  ];



  // Hide navbar on scroll down / Show on scroll up

  useEffect(() => {

    const handleScroll = () => {

      const currentScrollY = window.scrollY;


      setScrolled(currentScrollY > 30);



      if (
        currentScrollY > lastScrollY &&
        currentScrollY > 120
      ) {

        setHideNavbar(true);

      } else {

        setHideNavbar(false);

      }


      setLastScrollY(currentScrollY);

    };



    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );


  }, [lastScrollY]);






  // Active section

  useEffect(() => {

    const sections = menuItems
      .map(item =>
        document.getElementById(item.id)
      )
      .filter(Boolean);



    const observer = new IntersectionObserver(

      entries => {

        entries.forEach(entry => {

          if(entry.isIntersecting){

            setActiveSection(
              entry.target.id
            );

          }

        });

      },

      {
        threshold:0.5
      }

    );



    sections.forEach(section =>
      observer.observe(section)
    );


    return () => {

      sections.forEach(section =>
        observer.unobserve(section)
      );

    };


  }, []);






  const scrollToSection = (id) => {

    // Home should always mean "top of the page", no matter
    // where the Hero section sits or how tall the navbar is.
    if (id === "home") {

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      setMenuOpen(false);

      return;

    }


    const element =
      document.getElementById(id);


    if(element){

      // Account for the fixed navbar's real height so the
      // target section isn't hidden underneath it.
      const navbarHeight =
        headerRef.current
          ? headerRef.current.offsetHeight
          : 0;

      const extraSpacing = 16; // small breathing room below navbar

      const targetY =
        element.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight -
        extraSpacing;

      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });

    }


    setMenuOpen(false);

  };






  return (

<header

ref={headerRef}

className={`
fixed
top-0
left-0
w-full
z-50
transition-transform
duration-500

${
hideNavbar
?
"-translate-y-full"
:
"translate-y-0"
}

`}

>


<nav

className={`

w-[92%]
lg:w-[90%]

mx-auto
mt-4

shadow-[0_0_25px_rgba(0,0,0,0.12)]

px-5
md:px-8

py-4

rounded-full

flex
items-center
justify-between

backdrop-blur-xl

border

transition-all
duration-500


${
scrolled

?

"bg-white/100 dark:bg-[#12372a]/90 shadow-[0_0_30px_rgba(0,0,0,0.15)]"

:

"bg-[#ffffff]/100 dark:bg-[#12372a]/75 shadow-[0_0_25px_rgba(0,0,0,0.12)]"

}


border-[#eadbc8]/60
dark:border-white/10


`}

>




{/* Logo */}

<button

onClick={() =>
scrollToSection("home")
}

className="
flex
items-center
gap-2

text-2xl
font-bold

text-[#12372a]
dark:text-white
"

>


<FaCloud
className="
text-[#e8751a]
"
/>


FeastCloud


</button>







{/* Desktop Menu */}

<ul

className="
hidden
lg:flex
items-center
gap-8
"

>


{
menuItems.map(item => (

<li key={item.id}>


<button

onClick={() =>
scrollToSection(item.id)
}

className={`

font-medium
transition

${
activeSection === item.id

?

"text-[#e8751a]"

:

"text-gray-700 dark:text-gray-200"

}

hover:text-[#e8751a]

`}

>

{item.name}

</button>


</li>

))

}


</ul>








{/* Desktop Actions */}

<div

className="
hidden
lg:flex
items-center
gap-4
"

>


{/* Theme Button */}

<div className="relative">


<button

onClick={() =>
setThemeOpen(!themeOpen)
}

className="
w-12
h-12

flex
items-center
justify-center

text-2xl

text-[#e8751a]

hover:scale-110

transition

"

>


{renderThemeIcon()}


</button>





{
themeOpen && (

<div

className="
absolute
right-0
mt-3

w-40

p-3

rounded-2xl

bg-white
dark:bg-[#12372a]

shadow-xl

"

>


<button

onClick={() => {
setTheme("light");
setThemeOpen(false);
}}

className="
w-full
flex
items-center
gap-2

px-3
py-2

rounded-lg

hover:bg-[#fff0df]

dark:text-white

"

>

<FaSun
className="
text-[#e8751a]
"
/>

Light

</button>




<button

onClick={() => {
setTheme("dark");
setThemeOpen(false);
}}

className="
w-full
flex
items-center
gap-2

px-3
py-2

rounded-lg

hover:bg-[#fff0df]

dark:text-white

"

>

<FaMoon
className="
text-[#e8751a]
"
/>

Dark

</button>





<button

onClick={() => {
setTheme("system");
setThemeOpen(false);
}}

className="
w-full
flex
items-center
gap-2

px-3
py-2

rounded-lg

hover:bg-[#fff0df]

dark:text-white

"

>


<FaCircleHalfStroke
className="
text-[#e8751a]
"
/>

System


</button>



</div>

)

}


</div>






<button

className="
bg-[#e8751a]

text-white

px-6
py-3

rounded-full

font-semibold

hover:scale-105

transition

"

>

Order Now

</button>


</div>








{/* Mobile Actions: Theme Toggle + Hamburger */}

<div

className="
flex
lg:hidden
items-center
gap-3
"

>


{/* Mobile Theme Button */}

<div className="relative">


<button

onClick={() =>
setThemeOpen(!themeOpen)
}

className="
w-10
h-10

flex
items-center
justify-center

text-2xl

text-[#e8751a]

hover:scale-110

transition

"

>


{renderThemeIcon()}


</button>





{
themeOpen && (

<div

className="
absolute
right-0
mt-3

w-40

p-3

rounded-2xl

bg-white
dark:bg-[#12372a]

shadow-xl

z-50

"

>


<button

onClick={() => {
setTheme("light");
setThemeOpen(false);
}}

className="
w-full
flex
items-center
gap-2

px-3
py-2

rounded-lg

hover:bg-[#fff0df]

dark:text-white

"

>

<FaSun
className="
text-[#e8751a]
"
/>

Light

</button>




<button

onClick={() => {
setTheme("dark");
setThemeOpen(false);
}}

className="
w-full
flex
items-center
gap-2

px-3
py-2

rounded-lg

hover:bg-[#fff0df]

dark:text-white

"

>

<FaMoon
className="
text-[#e8751a]
"
/>

Dark

</button>





<button

onClick={() => {
setTheme("system");
setThemeOpen(false);
}}

className="
w-full
flex
items-center
gap-2

px-3
py-2

rounded-lg

hover:bg-[#fff0df]

dark:text-white

"

>


<FaCircleHalfStroke
className="
text-[#e8751a]
"
/>

System


</button>



</div>

)

}


</div>




{/* Mobile Button */}

<button

onClick={() =>
setMenuOpen(!menuOpen)
}

className="
text-2xl

text-[#12372a]
dark:text-white
"

>


{
menuOpen
?
<FaTimes />
:
<FaBars />
}


</button>


</div>



</nav>









{/* Mobile Menu */}


<AnimatePresence>


{
menuOpen && (

<motion.div

initial={{
opacity:0,
y:-20
}}

animate={{
opacity:1,
y:0
}}

exit={{
opacity:0,
y:-20
}}

className="
lg:hidden

w-[92%]

mx-auto

mt-3

p-6

rounded-3xl

bg-white/90

dark:bg-[#12372a]/95

shadow-xl

"

>


{
menuItems.map(item => (

<button

key={item.id}

onClick={() =>
scrollToSection(item.id)
}

className="
block

w-full

text-left

py-3

text-gray-700

dark:text-white

hover:text-[#e8751a]

"

>

{item.name}


</button>


))

}



{/* Order Now button inside mobile menu */}

<button

onClick={() =>
setMenuOpen(false)
}

className="
mt-4

w-full

bg-[#e8751a]

text-white

px-6
py-3

rounded-full

font-semibold

hover:scale-105

transition

"

>

Order Now

</button>



</motion.div>

)

}


</AnimatePresence>



</header>


  );

}


export default Navbar;