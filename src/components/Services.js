import React from "react";
import {
  FaGithub,
  FaCamera,
  FaCircleNotch,
 
} from "react-icons/fa";
const Services = () => {
  const [header] = React.useState({
    mainHeader: "SKILL",
    subHeading: "TECHNICAL SKILLS",
    text:
      "I am Better in MERN Devlopment",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      heading: "Web Development",
      text:
        "You Also check my code on Github",
    },
    {
      id: 2,
      icon: <FaCamera className="commonIcons" />,
      heading: "Launguage",
      text:
       "JavaSript Frameworks ,(Node,Express,Reactjs) ,java\
         ,PHP ,Html, Css"
      
    },
    {
      id: 3,
      icon: <FaCircleNotch className="commonIcons" />,
      heading: "DataBase USe",
      text:
        "MongoDB DataBase\
        MYsql Database",
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
