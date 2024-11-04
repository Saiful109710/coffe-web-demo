import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { getAllFavorite, removeFavorite } from "../utils";
import CoffeeCard from "../components/CoffeeCard";
import { useLocation } from "react-router-dom";
import { LoaderIcon } from "react-hot-toast";

const DashBoard = () => {
  

  
  const [coffees,setCoffees] = useState([])
  useEffect(()=>{
    const favorites = getAllFavorite()
    setCoffees(favorites);
  },[])

  const handleRemove = (id)=>{
      removeFavorite(id)
      const favorites = getAllFavorite()
      setCoffees(favorites);
  }
  return (
  <>
      <Heading
      title="Welcome to Dashboard"
      subtitle="Manage coffees that you
       have previosly added as your favorite. You van view or
        remove them from here"
    ></Heading>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12'>
            {
                coffees.map((coffee)=><CoffeeCard handleRemove={handleRemove} key={coffee.id} coffee={coffee}></CoffeeCard>)
            }
        </div>
  </>

  );
};

export default DashBoard;
