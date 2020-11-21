import React from "react";
const Banner = () => {
  const [state] = React.useState({
    title: "I am Anil Gupta",
    text:
      "i m Anil Gupta, fresher web developer.​",
    image: "/images/man-00.jpeg",
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <h1>{state.title}</h1>
                <p>{state.text}</p>
               
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={state.image} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
