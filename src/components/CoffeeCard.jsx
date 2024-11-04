import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaTrashAlt } from "react-icons/fa";
import { removeFavorite } from '../utils';


const CoffeeCard = ({coffee,handleRemove}) => {
    const {pathname} = useLocation();
   const  {name,image,category,type,origin,id,rating,popularity} = coffee || {}
  return (
    <div className='flex relative'>
        <Link to={`/coffee/${id}`}
        className='transition hover:scale-105 shadow-xl rounded-xl overflow-hidden'>
           <figure className='w-full h-48 overflow-hidden'>
            <img src={image} alt="" className='' />
            
            </figure> 
            <div className='p-5'>
                <h1 className='text-xl'>Name: {name}</h1>
                <p>Category: {category}</p>
                <p>Type: {type}</p>
                <p>origin: {origin}</p>
                <p>Rating: {rating}</p>
                <p>Popular: {popularity}</p>
            </div>
        
        </Link>  
        {
            pathname==='/dashboard' && <div onClick={()=>handleRemove(coffee.id)} className='absolute p-3 bg-warning rounded-full cursor-pointer -top-5 -right-5'><FaTrashAlt size={20}/></div>
        }      
    </div>
  )
}

export default CoffeeCard
