import { useState } from "react";
import CardComponent from "../components/Card/Card";
import Layout from "../layouts/layout";

import tea1 from "../assets/img/food/tea1.jpg";
import tea2 from "../assets/img/food/tea2.jpg";
import tea3 from "../assets/img/food/tea3.jpg";
import tea4 from "../assets/img/food/tea4.jpg";
import tea5 from "../assets/img/food/tea5.jpg";
import tea6 from "../assets/img/food/tea6.jpg";

import bos1 from "../assets/img/movies/bos1.jpg";
import bos2 from "../assets/img/movies/bos2.jpg";
import bos3 from "../assets/img/movies/bos3.jpg";
import bos4 from "../assets/img/movies/bos4.jpg";
import bos5 from "../assets/img/movies/bos5.jpg";
import bos6 from "../assets/img/movies/bos6.jpg";

import img1 from "../assets/img/cat-jump.gif";
import HeartButton from "../components/HeartButton/HeartButton";
import { pink } from "../components/interfaces/HeartButton.interface";
import HeartSlider from "../components/Heart/Heart";
import { useNavigate } from "react-router";

const Date = () => {
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "food"
  );
  const navigate = useNavigate();

  const handleCardClick = (index: number) => {
    if (selectedCards.includes(index)) {
      setSelectedCards(
        selectedCards.filter((cardIndex) => cardIndex !== index)
      );
    } else {
      setSelectedCards([...selectedCards, index]);
    }
  };

  const getTitle = () => {
    switch (selectedCategory) {
      case "food":
        return "Choose Coffee Shop around this town";
      case "movie":
        return "Choose a flavor you like";
      default:
    }
  };

  const nextQuestion = () => {
    if (selectedCategory === "rate") {
      navigate("/thankyou");
    } else {
      if (selectedCategory === "movie") {
        setSelectedCategory("rate");
      } else {
        setSelectedCategory("movie");
      }
    }
    setSelectedCards([]);
  };

  const foodData = [
    {
      title: "Boss Coffee",
      image: tea1,
    },
    {
      title: "Mudnest Cafe",
      image: tea2,
    },
    {
      title: "Big Brew",
      image: tea3,
    },
    {
      title: "I love Milk Tea",
      image: tea4,
    },
    {
      title: "Yellow Tree",
      image: tea5,
    },
    {
      title: "Potato Corner",
      image: tea6,
    },
  ];

  const movieData = [
    {
      title: "Mocha Froccino",
      image: bos1,
    },
    {
      title: "Cold White Brew",
      image: bos2,
    },
    {
      title: "Iced Creamy Latte",
      image: bos3,
    },
    {
      title: "Cookies n' Cream",
      image: bos4,
    },
    {
      title: "Caramel Macchiato",
      image: bos5,
    },
    {
      title: "Matcha Green Tea",
      image: bos6,
    },
  ];

  return (
    <Layout>
      <h1 style={{ color: pink }}>{getTitle()}</h1>
      <main className="d-flex flex-wrap justify-content-center mt-3">
        {selectedCategory === "food" &&
          foodData.map((card, index) => (
            <div key={index} className="m-2">
              <CardComponent
                title={card.title}
                image={card.image}
                isSelected={selectedCards.includes(index)}
                onClick={() => handleCardClick(index)}
              />
            </div>
          ))}
        {selectedCategory === "movie" &&
          movieData.map((card, index) => (
            <div key={index} className="m-2">
              <CardComponent
                title={card.title}
                image={card.image}
                isSelected={selectedCards.includes(index)}
                onClick={() => handleCardClick(index)}
              />
            </div>
          ))}
        {selectedCategory === "rate" && (
          <>
            <div className="d-flex flex-column justify-content-center">
              <img
                className="m-auto"
                src={img1}
                alt="Image 1"
                style={{
                  width: "300px",
                  marginBottom: "20px",
                  borderRadius: "15px",
                }}
              />
              <h1 style={{ color: pink }} className="py-3">
                Rate how exited are you
              </h1>
            </div>
            <HeartSlider></HeartSlider>
          </>
        )}
      </main>
      <HeartButton
        style={{
          width: "100%",
          maxWidth: "300px",
          margin: "0 auto",
          marginTop: "2rem",
        }}
        text="Continue ⊂(・ヮ・⊂)"
        onClick={nextQuestion}
      />
    </Layout>
  );
};

export default Date;
