import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-200 fixed text-black p-3 inset-x-0 shadow-xl bottom-0 overflow-x-hidden shadow-black-xl">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <p className="text-center">
            &copy; {new Date().getFullYear()} Cody Simon All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

