import React from 'react';
import "./styles/foodguide.scss"

const FoodGuide = () => {
  return (
    <div className={"food_guide"}>

      <div className={"heading"}>
        <h1>TOP CHEFS</h1>
        <p></p>
      </div>

      <div className={"main"}>

        <div className={"row"}>

          <div className={"icon"}>
            <img src={"./food_guide/icon_1.svg"} alt={"icon"}/>
            <h5>VEGETABLES</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard.</p>
          </div>

          <div className={"icon"}>
            <img src={"./food_guide/icon_1.svg"} alt={"icon"}/>
            <h5>WHOLE GRAINS</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          </div>

        </div>

        <div className={"row"}>

          <div className={"icon"}>
            <img src={"./food_guide/icon_1.svg"} alt={"icon"}/>
            <h5>FRUITS</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard.</p>
          </div>

          <div className={"icon"}>
            <img src={"./food_guide/icon_1.svg"} alt={"icon"}/>
            <h5>HEALTHY PROTEIN</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard.</p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default FoodGuide;