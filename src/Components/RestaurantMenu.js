import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants.js";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import RestaurantCategory from "./RestaurantCategory.js";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState();

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  console.log(name);
  console.log("resInfo", resInfo);

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text lg">
        {cuisines.join(", ")}-{costForTwoMessage}{" "}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          // setShowIndex={() => setShowIndex(index)}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  );

  // return (
  //   <div className="menu">
  //     <h1>{name}</h1>
  //     <p>
  //       {cuisines.join(", ")}-{costForTwoMessage}
  //     </p>
  //     <h2>Menu</h2>
  //     <ul>
  //       {itemCards.map((item) => (
  //         <li key={item.card.info.id}>
  //           {item.card.info.name}-{" Rs."}
  //           {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
};

export default RestaurantMenu;
