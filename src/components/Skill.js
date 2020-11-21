import React from "react";

const Skill = () => {
  const [header] = React.useState({
    mainHeader: "Study Carrier",
    subHeading: "Performence",
   
    text:
      "I complete my Graduation in Mumbai 2020. studied in Bsc-IT Pass with A Grade",
  });
  const [state] = React.useState([
    {
      id: 1,
      heading: "About Marks",
      msg1: "CBSE: 10th pass with 77.9%" ,
      msg2: "UP BOARD: 12th pass with 72.4% " ,
      msg3: "Diploma: pass with%",
      msg4:"BSC-IT: pass with A Grade"
    },
    
  ]);
  return (
    <div className="prices">
      <div className="container">
        <div className="common">
          <h1 className="heading">{header.mainHeader}</h1>
          <h3 className="mainHeader">{header.subHeading}</h3>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row">
          {state.map((Skill) => (
            <div className="col-12" key={Skill.id}>
              <div className="price">

              
                <ul>
                  <li>{Skill.msg1}</li>
                  <li>{Skill.msg2}</li>
                  <li>{Skill.msg3}</li>
                  <li>{Skill.msg4}</li>
                
                </ul>
               
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
