import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text:
      "MY self Anil Gupta.I complete my Graduation from Mumbai.",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Anil Gupta" },
    { id: 2, title: "Email:", text: "anilmohabiya1053@gmail.com" },
    { id: 3, title: "Phone:", text: "8779838452" },
   
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="/images/man-00.jpeg" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Fresher IT-boy</h1>
              <div className="about__info-p1">
                
                Intrested in web devlopment Field.and makes carrier on it.
                with lots of creativity DO by myself in many projects.as 
                 I more better in JAvascripts Frameswroks(MERN)
              </div>
              <div className="about__info-p2">
                And want to utilize my strong technical expertise and 
                academic training for betterment of my employer.
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
