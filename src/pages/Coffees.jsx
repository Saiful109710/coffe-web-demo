import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from '../components/CoffeeCard';

const Coffees = () => {
  const data = useLoaderData();
  const [coffees,setCoffees]= useState(data);

  const handleSortData = (sortBy)=>{
      if(sortBy==='popularity'){
        const sortedData = [...data].sort((a,b)=>a.popularity-b.popularity) ;

        setCoffees(sortedData)

      }else if(sortBy==='rating'){
        const sortedData = [...data].sort((a,b)=>a.rating-b.rating);
        setCoffees(sortedData)
      }
  }
  return (
     <>
     <div className='flex justify-between items-center'>
      <div>
        <h1>Sort Coffee&apos;s by Popularity & Rating-&gt;</h1>
      </div>
      <div className='space-x-3'>
        <button onClick={()=>handleSortData('popularity')} className='btn btn-warning'>Sort By Popularity</button>
        <button onClick={()=>handleSortData('rating')} className='btn btn-warning'>Sort By Rating</button>
      </div>
     </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12'>
            {
                coffees.map((coffee)=><CoffeeCard key={coffee.id} coffee={coffee}></CoffeeCard>)
            }
        </div></>
  )
}

export default Coffees
