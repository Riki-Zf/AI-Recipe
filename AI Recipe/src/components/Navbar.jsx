import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Ubah tema saat state berubah
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle antara "light" dan "dark"
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex justify-center w-full px-4">
      <div className="navbar bg-base-100 flex justify-center w-full max-w-4xl gap-6 p-4 md:p-4 lg:p-4">
        <div className="flex-1 gap-0 items-center">
          <a className="logo normal-case sm:text-sm md:text-base lg:text-xl">AI Recipe</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              {/* Toggle Theme */}
              <button onClick={toggleTheme} className="text-xl">
                {/* Icon Light Mode (Muncul saat dark mode aktif) */}
                <i className={`fa-regular fa-sun ${theme === "light" ? "hidden" : "block"}`}></i>

                {/* Icon Dark Mode (Muncul saat light mode aktif) */}
                <i className={`fa-regular fa-moon ${theme === "dark" ? "hidden" : "block"}`}></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
