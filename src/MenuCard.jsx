
export default function MenuCard(){
    return(
        <div class="w-4/6 bg-gray-500 mx-auto mt-6 flex justify-between">
            <div className="p-2">
                <div >Dish Name</div>
                <div>Dish Price</div>
                <div>Rating</div>
                <div>Decsription</div>
                
            </div>
            <div className="relative w-24 h-24 border-white bg-white mt-2 mr-2 overflow-hidden">
                <img className="w-full" src="" alt="img"/>
                <button className="absolute bg-black text-white bottom-1 left-1/2 transform -translate-x-1/2 w-16 rounded-lg">ADD</button>
            </div>
        </div>
    )
}