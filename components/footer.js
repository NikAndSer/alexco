import React from 'react';

const Footer = () => {
  return (
    <footer className="footer py-1">
      <div className="container">
        <div className="row mt-3">
          <div className="col-12 text-center fs-5">
            <p>&copy; {new Date().getFullYear()} ALEX GROUP. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
