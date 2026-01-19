import RestaurentCards from "./RestaurentCard";
import { API_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [allRestaurent, setAllRestaurent] = useState([]);
  const [restaurents, setRestaurents] = useState(allRestaurent);
  const [searchText, setsearchText] = useState("");

  const handleSearch = () => {
    const filteredSearchedRes = allRestaurent.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setRestaurents(filteredSearchedRes);
  };

  const handleSearchReset = () => {
    setsearchText("");
    setRestaurents(allRestaurent);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    const fetchedData =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setAllRestaurent(fetchedData);
    setRestaurents(fetchedData);
  };


  return allRestaurent.length === 0 ?  <Shimmer /> : (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        ></input>
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleSearchReset}>Reset Search</button>
      </div>
      <div className="search-container filter-section">
        <button
          onClick={() => {
            const filteredRestaurent = restaurents.filter(
              (res) => res.info.avgRating > 4.4
            );
            setRestaurents(filteredRestaurent);
          }}
        >
          Top Rated Restaurent
        </button>
        <button
          onClick={() => {
            console.log("restaurents", restaurents);
            const filteredRestaurent = restaurents.filter(
              (res) => res.info.sla.deliveryTime < 25
            );
            setRestaurents(filteredRestaurent);
          }}
        >
          Faster delivery
        </button>
        <button
          onClick={() => {
            setRestaurents(allRestaurent);
          }}
        >
          Reset filter
        </button>
      </div>
      <div className="restaurent-card-container">
        {restaurents.map((restra) => (
          <RestaurentCards key={restra.info.id} resData={restra} />
        ))}
      </div>
    </div>
  );
};

export default Body;
