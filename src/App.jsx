import {useState} from 'react'
import reactLogo from '../public/assets/react.svg'
import './App.scss'
import Header from "./components/Header.jsx";
import FoodCard from "./components/FoodCard.jsx";
import SmallFoodCard from "./components/SmallFoodCard.jsx";
import Para from "./components/Para.jsx";
import TopChef from "./components/TopChef.jsx";
import FoodGuide from "./components/FoodGuide.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Header/>

      <div className={"food_card_section"}>

        <div className={"heading"}>
          <h1>V A R I E T I E S</h1>
          <p></p>
        </div>

        <div className={"cards"}>
          <div className={"one_card"}>
            <FoodCard
              description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."}
              title={"Pizza is a savory dish of Italian origin"}
              backgroundColor={"#342679"}
            />
          </div>
          <div className={"four_card"}>
            <div className="box"><SmallFoodCard
              description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
              title={"Crispy French Fries"}
            /></div>

            <div className="box"><SmallFoodCard
              description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
              title={"Macroon"}
            /></div>

            <div className="box"><SmallFoodCard
              description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
              title={"Doughnut"}
            /></div>

            <div className="box"><SmallFoodCard
              description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
              title={"Paneer Tikka"}
            /></div>

          </div>
        </div>
      </div>

      <Para/>
      <TopChef/>
      <FoodGuide/>
    </div>
  )
}

export default App
