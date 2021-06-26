import React from "react";
import pdf from "./../resume.pdf";


const Home = () => {
  
    const btnLinkedin = () => {
      window.open(pdf);
    };
  return (
    <>
      <div class="bgimg-1">
        <div class="caption">
          <span class="border">FIROUZEH TAHBAZ</span>
          <div class="intro__paragraph">
            Professional Webmaster and Graphic Designer, <br />
            Firouzeh has twice been awarded by the Ontario Arts Council, <br />
            and has extensive commercial graphic design experience.
          </div>
          <div class="resumeBtn__wrapper">
          <a
              className="button"
              // href={PDF}
              // target="_blank"
              rel="noreferrer"
              onClick={btnLinkedin}
            >
              Download Resume
              </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
