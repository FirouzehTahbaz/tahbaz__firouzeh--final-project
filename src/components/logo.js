import React, { useEffect, useState } from "react";
import Logo2 from "../assets/image/logo2.png";
import { useLocation } from "react-router-dom";

const Logo = () => {
  const [path, setPath] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/") {
      setPath(true);
    } else {
      setPath(false);
    }
  }, [location]);

  console.log(location.pathname);
  return (
    <>
      {path && (
        <div
          class="header"
          style={location.pathname === "/login" ? { display: "none" } : null}
        >
          <img src={Logo2} alt="logo" />
        </div>
      )}
    </>
  );
};

export default Logo;
