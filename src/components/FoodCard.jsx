import React from 'react';
import './styles/foodcard.scss'


const FoodCard = ({title, description, backgroundColor}) => {
  return (
    <div className={"main_card"}>

      <div style={{backgroundColor: `${backgroundColor}`}} className={"card_details"}>
        <h1>{title}</h1>
        <p>{description}</p>

        <div>
          <button>
            Explore
            <img src={"./card/chevron-right.svg"} alt={"right"}/>
          </button>
          <button>
            <img src={"./card/star.svg"} alt={"right"}/>
            Rated
          </button>
        </div>

      </div>
    </div>
  );
};

export default FoodCard;