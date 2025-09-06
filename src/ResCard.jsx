import {IMG_URL} from "./utils/links";
import { useNavigate } from "react-router-dom";
export default function ResCard({res}){
 
  const navigate = useNavigate();
  const handleRestaurantClick = () => {
    const link = res?.cta?.link;

    if (!link) {
      console.error("No link found for restaurant:", res);
      return; // stop execution
    }

    // Ensure it becomes a valid URL
    const params = link.split("?")[1].split("&");
    const paramMap = Object.fromEntries(params.map(p => p.split("=")));
    const restaurantId= paramMap.restaurant_id;
    const query= paramMap.query; 
    navigate(`/restaurants/${restaurantId}/${query}`);
  };
  return(
  <div 
            className=" w-64 m-2 cursor-pointer text-left transform transition-transform duration-300 hover:scale-105"
            onClick={handleRestaurantClick}
          >
            <div className="mb-2 relative">
          
              <img
                src={
                  IMG_URL + res?.info?.cloudinaryImageId
                }
                alt={res?.info?.name}
                className="w-full h-40 rounded-2xl object-cover"
              />
              {/*adding a tranparent overlay div dark at bottom transparent to top*/}
               <div className="absolute bottom-0 left-0 w-full h-16 rounded-b-2xl bg-gradient-to-t from-black/80 to-transparent">
               </div>

              {res?.info?.aggregatedDiscountInfoV3?.header && (
              <div className="absolute bottom-0 left-2 text-white font-bold px-2 rounded-lg text-lg">
                `${res?.info?.aggregatedDiscountInfoV3?.header || ""} ${res?.info?.aggregatedDiscountInfoV3?.subHeader || ""}`
              </div>
              )}
            </div>
            <div className="m-2">
            <div className="font-bold text-lg">{res?.info?.name}</div>
            <div className="text-sm text-gray-600">
              ⭐ {res?.info?.avgRating || "N/A"}
            </div>
            <div className="text-sm text-gray-500">
              {res?.info?.cuisines?.join(", ")}
            </div>
            </div>
          </div>
  )
}