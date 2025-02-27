import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <footer className="footer flex flex-col xs:flex-row items-center justify-between p-4 bg-neutral text-neutral-content">
        <aside className="mb-1 xs:mb-0 text-center xs:text-left">
          <p className="text-sm sm:text-base">Copyright © 2025 | Riki-ZF</p>
        </aside>
        <nav className="grid grid-flow-col gap-4">
          <a href="https://github.com/Riki-Zf" aria-label="GitHub" className="transition-transform hover:scale-110">
            <i className="fa-brands fa-github text-xl sm:text-2xl w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center fill-current cursor-pointer"></i>
          </a>
          <a href="https://www.instagram.com/rikyy_zf/" aria-label="Instagram" className="transition-transform hover:scale-110">
            <i className="fa-brands fa-instagram text-xl sm:text-2xl w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center fill-current cursor-pointer"></i>
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
