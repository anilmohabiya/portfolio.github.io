import React from "react";

const Prices = () => {
  const [header] = React.useState({
    mainHeader: "Study Carrier",
    subHeading: "Performence",
   
    text:
      "I am Graduatation complete in Mumbai 2020. studied in Bsc-IT Pass with A Grade",
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
          {state.map((prices) => (
            <div className="col-12" key={prices.id}>
              <div className="price">

              
                <ul>
                  <li>{prices.msg1}</li>
                  <li>{prices.msg2}</li>
                  <li>{prices.msg3}</li>
                  <li>{prices.msg4}</li>
                
                </ul>
               
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prices;
