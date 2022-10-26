import React from 'react';
import "./styles/topchef.scss"

const TopChef = () => {
  return (
    <div className={"topchef"}>

      <div className={"heading"}>
        <h1>TOP CHEFS</h1>
        <p></p>
      </div>

      <div className={"card"}>
        <div className={"emp_card"}>
          <img src={"./top_chef/emp_1.svg"} alt={"emp_pic"}/>
          <h5>Eileen Johnson</h5>
          <p>Executive Chef, USA</p>
        </div>

        <div className={"emp_card"}>
          <img src={"./top_chef/emp_2.svg"} alt={"emp_pic"}/>
          <h5>Eileen Johnson</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>

        <div className={"emp_card"}>
          <img src={"./top_chef/emp_3.svg"} alt={"emp_pic"}/>
          <h5>Eileen Johnson</h5>
          <p>Executive Chef, USA</p>
        </div>
      </div>

    </div>
  );
};

export default TopChef;