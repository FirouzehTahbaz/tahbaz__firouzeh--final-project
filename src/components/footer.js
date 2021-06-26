import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const [path, setPath] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/") {
      setPath(true);
    } else {
      setPath(false);
    }
  }, [location]);

  return (
    <>
      {path && (
        <div class="footer">
          <div class="social__wrapper">
            <Link to="/">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </Link>
            <Link to="/">
              <i class="fa fa-facebook-square" aria-hidden="true"></i>
            </Link>
            <Link to="/">
              <i class="fa fa-youtube" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
