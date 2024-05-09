import React from "react";
import restaurants from "./dummyFoodData";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Restaurants from "./Restaurants";
import ExploreMenu from "./Explore_menu";

// Create custom theme with specified font family
const customTheme = createTheme({
  typography: {
    fontFamily: "'Freeman', sans-serif", // Use Freeman font family
  },
  palette: {
    primary: {
      main: "#ed6911", // Custom color for material ui button
    },
  },
});

const RestaurantList = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <>
        <div>
          <ExploreMenu />
          <Restaurants />
        </div>
        <br />
        <br />
        <h1
          className="textdecoration-8 text-5xl"
          style={{ flexGrow: 1, fontFamily: "'Freeman', sans-serif" }}
        >
          Top dishes near you
        </h1>
        <br />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {restaurants.map((restaurant) => (
            <Card
              key={restaurant.id}
              sx={{ maxHeight: 370 }}
              className="rounded shadow-lg"
            >
              <Box sx={{ display: "flex", height: "50%", width: "100%" }}>
                <CardMedia
                  component="img"
                  image={restaurant.imageUrl}
                  alt={restaurant.name}
                  className="object-cover transition duration-300 ease-in-out transform hover:scale-110"
                />
              </Box>

              <CardContent className="px-auto py-auto mt-2">
                <div className="flex justify-between items-center mb-2">
                  {/* Use Typography component to apply Freeman font to restaurant name */}
                  <Typography
                    variant="h5"
                    component="div"
                    className="font-bold"
                  >
                    {restaurant.name}
                  </Typography>
                  <Button variant="outlined" size="" color="primary">
                    Add
                  </Button>
                </div>

                <div
                  className="flex justify-between items-center"
                  style={{
                    flexGrow: 1,
                    fontFamily: "'Freeman', sans-serif",
                    letterSpacing: "1px",
                  }}
                >
                  <Typography className="text-blue-500">
                    {restaurant.cuisine}
                  </Typography>

                  <p className="flex items-center">{restaurant.price}</p>
                </div>

                <div className="flex text-left mt-2 text-green-700">
                  {restaurant.rating}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </>
    </ThemeProvider>
  );
};

export default RestaurantList;
