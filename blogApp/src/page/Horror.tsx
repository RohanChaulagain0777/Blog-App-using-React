import { Api_key } from "@/Api"
import { useState, useEffect } from "react"

const Horror = () => {

  const [horrorGames, setHorrorGame] = useState<any[]>([]);

  useEffect(() =>{
    const fetchData = async () =>{
      try{
        const response = await fetch(`https://api.rawg.io/api/games?key=${Api_key}&tags=horror`);
        const data = await response.json();

        setHorrorGame(data.results);
      }catch(error){
        console.error("Error fetching horror games", error);
      }
    }
    fetchData();
  },[])


  return (
     <div className="flex justify-center items-center gap-2 flex-col">
      <h1 className="font-extrabold text-5xl text-center my-10">HORROR</h1>
    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mx-5">
        
         {horrorGames.slice(0, 10).map((game) => (
          <div
            key={game.id}   
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >   
            <img
              src={game.background_image}
              alt={game.name}
               className="h-48 w-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="p-4 text-white">
              <span className="text-yellow-400 font-semibold">
                ⭐ {game.rating}
              </span>
              <h2 className="text-lg font-bold mt-2">{game.name}</h2>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  )
}

export default Horror
