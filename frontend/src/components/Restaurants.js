import React, { useState, useEffect } from "react";
import "../styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import restaurants from "./dummyRestaurant"; // Import restaurants data

const Restaurants = () => {
  const [restaurantsToShow, setRestaurantsToShow] = useState([]);

  useEffect(() => {
    setRestaurantsToShow(restaurants);
  }, []); // Update restaurantsToShow on component mount

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of restaurants per slide (3 for responsive view)
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay interval in milliseconds (3 seconds)
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <h1
        className="textdecoration-8 text-5xl"
        style={{ flexGrow: 1, fontFamily: "'Freeman', sans-serif" }}
      >
        Top Restaurant chains Near You
      </h1>
      <br />
      <Slider {...settings} className="restaurant-slider">
        {restaurantsToShow.map((restaurant) => (
          <div key={restaurant.id} className="slick-slide">
            <Card className="rounded shadow-lg" style={{ width: "97%" }}>
              <Box sx={{ display: "flex", height: 250 }}>
                <CardMedia
                  component="img"
                  image={restaurant.imageUrl}
                  alt={restaurant.name}
                  className="object-cover w-full h-full transition duration-200 ease-in-out transform hover:scale-110"
                />
              </Box>
              <CardContent className="flex-grow px-4 py-2 bg-slate-200">
                <Typography variant="h5" component="div" className="font-bold">
                  <div className="text-3xl text-center">{restaurant.name}</div>
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Restaurants;
