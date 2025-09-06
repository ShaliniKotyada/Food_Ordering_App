import { useEffect,useState } from "react"
import Shimmer from "./Shimmer";
import { getCategoryUrl } from "./utils/links"
import ResCard from "./ResCard"
import { useParams, useSearchParams} from "react-router-dom";
export default function Restaurants(){
  // console.log("InRestaurants");
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [showTopRated, setShowTopRated] = useState(false);
    const [metadata, setMetadata] = useState({});
     console.log("brfore",showTopRated)

    const {id}= useParams();
    const [searchParams] = useSearchParams();
    const tag = searchParams.get("tag");
  

    const fetchData = async () => {
      const url= getCategoryUrl(id,tag);
      const response = await fetch(url);
      const json = await response.json();
     
      const info=json?.data.cards[0].card.card;
      setMetadata(info);
      // extract restaurants
     const restaurants =
          json?.data?.cards?.map((c) => c.card?.card)?.filter(
            (c) =>
              c["@type"] ===
             "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
            )|| [];

        // append new restaurants
         setListOfRestaurants(restaurants);
         setFilteredRestaurants(restaurants);
        // console.log(restaurants);
         }

     useEffect(() => {
       fetchData();
     },[]);

     useEffect(() => {
      const filteredRestaurants = showTopRated
      ? listOfRestaurants.filter((res) => res?.info?.avgRating > 4.2) : listOfRestaurants;

      setFilteredRestaurants(filteredRestaurants);
        }, [showTopRated, listOfRestaurants]);
     
     const handleTopRated = ()=>{
       setShowTopRated(!showTopRated); 
     }

    return(
      <div>
        <div className="text-left ml-8 mt-16">
            <div className="font-bold text-3xl mb-2 ">
              {metadata.title}
            </div>
            <div className="text-lg mb-6">
              {metadata.description}
            </div>
      
          <label className="relative inline-flex items-center cursor-pointer mb-4">
          <input type="checkbox" checked={showTopRated} onChange={handleTopRated}
              className="sr-only peer"/>
           {/* Background bar */}
          <div className="w-10 h-6 bg-gray-300 rounded-full peer peer-checked:bg-orange-500 transition-colors"></div>
           {/* Circle knob */}
            <div className="absolute left-0.5 top-0.6 w-4 h-4 bg-white rounded-full shadow-md
               peer-checked:translate-x-5 transform transition-transform"></div>
            {/* Label */}
          <span className="ml-3 text-gray-700 font-medium">  Top Rated </span>
          </label>
          <div className="font-bold text-xl mb-2">
              {metadata.count} to explore
            </div>
          </div>
          
        <div className="w-full grid grid-cols-4 gap-6 p-6 cursor-pointer text-left ">
          {filteredRestaurants.length === 0 ? (
            // random 8 cards of shimmer UI
       Array(8).fill("").map((_, index) => (
      <Shimmer key={index} />
    ))
      ) : (
        filteredRestaurants.map((res) => (
          <ResCard key={res?.info?.id} res={res} />
        ))
      )}
    </div>
    </div>
    )
}

    
  