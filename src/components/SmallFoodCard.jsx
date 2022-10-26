import React from 'react';
import "./styles/smallfoodcard.scss"

const SmallFoodCard = ({title, description}) => {
  return (
    <div className={"main_card_"}>

      <div className={"card_details"}>
        <h1>{title}</h1>
        <p>{description}</p>

        <div>
          <button>
            Explore
            <img src={"./card/chevron-right_black.svg"} alt={"right"}/>
          </button>
          <button>
            <img src={"./card/star_.svg"} alt={"right"}/>
            Rated
          </button>
        </div>

      </div>
    </div>
  );
};

export default SmallFoodCard;