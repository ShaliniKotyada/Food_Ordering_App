export default function Shimmer(){

        return(
            <div className="w-full grid grid-cols-4 gap-6 p-6 cursor-pointer text-left ">
              <div className=" w-64 m-2 cursor-pointer text-left transform transition-transform duration-300 hover:scale-105">
                <div className="mb-2 flex">
                 <div className="w-full h-40 rounded-2xl bg-gray-300" /></div>
                <div className="m-2">
                    <div className="w-20 h-3 mb-2 rounded-lg bg-gray-300"></div>
                    <div className="w-10 h-3 mb-2 rounded-lg bg-gray-300"> </div>
                    <div className="w-30 h-3 mb-2 rounded-lg bg-gray-300"> </div>
                </div>
              </div>
            </div>
        );
}