import React, { useEffect, useState } from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import CoffeeCard from './CoffeeCard';

const CoffeeCards = () => {
    const navigate = useNavigate()
    const {category} = useParams();
    const coffeesData =useLoaderData();
    const [coffees,setCoffees] = useState([]);
    useEffect(()=>{
       if(category){
        const updateCoffeeData = [...coffeesData].filter((coffee)=>coffee.category===category);
        setCoffees(updateCoffeeData)
       }else{
            setCoffees(coffeesData.slice(0,6))
       }
    },[coffeesData,category])
  return (
    <>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12'>
            {
                coffees.map((coffee)=><CoffeeCard key={coffee.id} coffee={coffee}></CoffeeCard>)
            }
        </div>
        <button onClick={()=>navigate('/coffees')} className='btn btn-warning'>View All</button>
    </>
  )
}

export default CoffeeCards
