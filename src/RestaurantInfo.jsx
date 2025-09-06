import {getMenuUrl} from "./utils/links"
import { useParams } from "react-router-dom"
import { useEffect } from "react"   
export default function RestaurantInfo({resInfo}){
    const {id, query}= useParams();
    const encodedQuery = encodeURIComponent(query);// converts North India back to North%20India
    const MenuUrl= getMenuUrl(id, encodedQuery);

    const fetchRestaurantInfo= async () => {
        const response= await fetch(MenuUrl);
        console.log(MenuUrl);
        const json= await response.json();
        console.log({json});
    }
    
    useEffect(()=>{
        fetchRestaurantInfo();
    }, []);

    return(
        <div className="m-12">
            <div className="text-left text-2xl font-bold mb-6">
                RestaurantName</div>
            <div className="text-gray-600 font-bold font-mono"> MENU </div>
            <div className=""></div>

        </div>
    )
}