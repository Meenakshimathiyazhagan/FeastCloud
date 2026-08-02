import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "system";
  });


  useEffect(() => {

    const root = document.documentElement;

    const mediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );


    const applyTheme = () => {

      const isDark =
        theme === "dark" ||
        (theme === "system" && mediaQuery.matches);


      root.classList.toggle("dark", isDark);

    };


    applyTheme();


    const handleChange = () => {

      if(theme === "system"){
        applyTheme();
      }

    };


    mediaQuery.addEventListener(
      "change",
      handleChange
    );


    localStorage.setItem(
      "theme",
      theme
    );


    return () => {

      mediaQuery.removeEventListener(
        "change",
        handleChange
      );

    };


  }, [theme]);



  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );



  return (

    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>

  );

};



export const useTheme = () => useContext(ThemeContext);