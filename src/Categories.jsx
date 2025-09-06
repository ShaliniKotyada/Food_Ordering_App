import Shimmer from "./Shimmer";
import {useEffect, useState} from "react"
import {URL, CATEGORY_URL } from "./utils/links"
import { useNavigate} from "react-router-dom"

export default function Categories(){
  const[selectedCategory, setSelectedCategory]= useState({id:"", tag:""});
   const navigate = useNavigate();
  console.log("InCategories")
    const[listOfCategories, setListOfCategories]= useState([]);
    const fetchData= async () =>{
            const response= await fetch(URL);
            const json= await response.json();
            const categories= json?.data?.cards[0]?.card?.card?.imageGridCards?.info;
            setListOfCategories(categories);
    }
    useEffect(()=>{
        fetchData();
    },[]);

    const handleCategory=(category)=>{
        const url= category?.action?.link;
        const urlParams = new URLSearchParams(url.split("?")[1]);
        const tags = urlParams.get("tags");
        const id= urlParams.get("collection_id");
        navigate(`/restaurants/${id}?tag=${tags}`);
      }

return (
    <>
    
    <div className="text-black-50 text-xl font-sans font-extrabold mt-16 ml-6 ">Our Best Food Options</div>
  <div className="w-screen flex flex-wrap  justify-center">
    {listOfCategories?.length === 0 ? (
      // Show shimmer UI when empty
      Array(8).fill("").map((_, index) => (
        <Shimmer key={index} />
      ))
    ) : (                 
      listOfCategories.map((category) => (
        <div onClick={() => handleCategory(category)}
          key={category?.id} 
          className="flex flex-col items-center m-2 w-40 cursor-pointer transform transition-transform duration-300 hover:scale-105"
        >
         
                <div className="flex flex-col items-center m-2 w-40 cursor-pointer transform transition-transform duration-300 hover:scale-105">
                  <img
                    src={CATEGORY_URL + category?.imageId}
                    alt={category?.action?.text || "category"}
                    className="w-56 h-56 object-cover brightness-110 contrast-110"
                  />
                </div>
            
        </div>
      ))
    )}
  </div>
  </>
)

}