import toast from "react-hot-toast";

// get all coffees from local storage
const getAllFavorite = ()=>{
    const all = localStorage.getItem('favorites');
    if(all){
        return JSON.parse(all)
    }else{
        return []
    }

}

// add a coffee to local storage

const addFavorite = (coffee)=>{
    const storedAllData = getAllFavorite();
    const isExist = storedAllData.find((data)=>data.id===coffee.id);

    console.log(isExist)
    if(isExist){
        toast.error('data already added')
        return;
    }
    storedAllData.push(coffee);
    localStorage.setItem('favorites',JSON.stringify(storedAllData))
    toast.success("Data added successfully")
}

// remove a coffee from local storage

const removeFavorite = (id)=>{
    const storedAllData = getAllFavorite();
    const remaining = storedAllData.filter((coffee)=>coffee.id != id);
    localStorage.setItem('favorites',JSON.stringify(remaining));
    toast.success('Successfully Removed')

}


export {addFavorite,getAllFavorite,removeFavorite}