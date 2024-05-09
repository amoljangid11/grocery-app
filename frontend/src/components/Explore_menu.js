import { useState } from "react";
import restaurantsImages from "./Explore_images";
import "../styles.css";

const ExploreMenu = ({ category, setCategory }) => {
  // State to manage the filtered items based on category
  const [filteredItems, setFilteredItems] = useState(restaurantsImages);

  // Function to handle category selection
  const handleCategorySelect = (selectedCategory) => {
    // If the selected category is "All", show all items
    if (selectedCategory === "All") {
      setFilteredItems(restaurantsImages);
    } else {
      // Otherwise, filter items based on the selected category
      const filtered = restaurantsImages.filter(
        (item) => item.category === selectedCategory
      );
      setFilteredItems(filtered);
    }
    // Set the selected category in parent component state
    setCategory(selectedCategory);
  };

  return (
    <div className="explore-menu mb-6" id="explore-menu">
      <h1>Explore the menu</h1>
      <div className="explore-menu-list">
        {filteredItems.map((item, index) => (
          <div
            onClick={() => handleCategorySelect(item.category)}
            key={index}
            className="explore-menu-list-item"
          >
            <img
              className={category === item.category ? "active" : ""}
              src={item.imageUrl}
              alt={item.name}
            />
            {/* <p>{item.name}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
