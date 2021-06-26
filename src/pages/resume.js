import React from "react";
import pdf from "./../resume.pdf";

const Resume = () => {
  const btnLinkedin = () => {
    window.open(pdf);
  };
  return (
    <>
      <div className="row">
        <div className="leftcolumn__resume">
          <blockquote />
          <h2>Firouzeh Tahbaz Resume</h2>
          <div className="button__wrapper">
            <a
              className="button"
              // href={PDF}
              // target="_blank"
              rel="noreferrer"
              onClick={btnLinkedin}
            >
              Download Resume
            </a>
            <a
              className="button"
              href="https://www.linkedin.com/in/firouzeh-tahbaz/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <b>Working experience:</b>
          <ul>
            <li>
              <h4>
                WEBMASTER & GRAPHIC DESIGNER
                <br />
                VENTURE FOOD TRUCKS | Jan 2013 - Present
              </h4>
            </li>
            Building customized websites
            <br />
            Designing visually attractive and interactive pages
            <br />
            Daily maintenance of code, debugging issues
            <br />
            Presenting findings clearly and concisely to key decision-makers
            <br />
            Resolving different browsers issues
            <br />
            A/B testing of different website elements or functionalities
            <br />
            Managing website and digital marketing
            <br />
            Developing SEO strategies and campaign implementation and monitoring
            <br />
            Performing site analysis, keyword research, mapping and assess Link
            building opportunities
            <br />
            Performing competitor SEO research
            <br />
            Preparing analytics and ranking reports
            <br />
            Creating the brand image
            <br />
            Designing food trucks’ wraps and technical floor plans
            <br />
            Monitoring all aspects of websites’ performance
            <br />
            <li>
              <h4>
                GRAPHIC DESIGNER
                <br />
                ESELL4U | Apr 2007 - Aug 2010
              </h4>
            </li>
            Chiefly responsible for the online appearance
            <br />
            Data management
            <br />
            Designed the brand image and all marketing materials
            <br />
          </ul>
        </div>

        <div className="rightcolumn__resume">
          <ul>
            <li>
              <h4>
                ADVERTISING SPECIALIST
                <br />
                MDG KINGSTON | May 2000 - Feb 2007
              </h4>
            </li>
            Created advertising campaigns
            <br />
            Coordinated Branch advertising with head office
            <br />
            Estimated budget for each advertising campaign
            <br />
            Designed the marketing material
            <br />
            <li>
              <h4>
                GRAPHIC DESIGNER
                <br />
                KENNETH CAPLAN AND ASSOCIATE | June 1995 - Jan 2000
              </h4>
            </li>
            Executed the projects from concept to preflight for press
            <br />
            Designed marketing materials for a wide range of clients
            <br />
            Troubleshooting and maintenance
            <br />
          </ul>
          <b>Education: </b>
          <ul>
            <li>
              <h4>
                ARTIST EDUCATOR CERTIFICATE
                <br />
                ROYAL CONSERVATORY OF MUSIC | Mar 2013
              </h4>
            </li>
            <li>
              <h4>
                MASTER DEGREE IN ARCHITECTURE
                <br />
                UNIVERSITY OF TEHRAN | Feb 1989
              </h4>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Resume;
