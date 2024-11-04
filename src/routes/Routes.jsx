import { createBrowserRouter } from "react-router-dom";

import MainnLayout from "../layouts/MainnLayout";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import DashBoard from "../pages/DashBoard";
import Categories from "../components/Categories";
import CoffeeCards from "../components/CoffeeCards";
import CoffeeDetailals from "../pages/CoffeeDetailals";

const router = createBrowserRouter([
    {
      path:'/',
      element:<MainnLayout></MainnLayout>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader:()=>fetch('../categories.json'),
          children:[
            {
              path:'/',
              element:<CoffeeCards></CoffeeCards>,
              loader:()=>fetch('../coffees.json')
            },
            {
              path:'/categories/:category',
              element:<CoffeeCards></CoffeeCards>,
              loader:()=>fetch('../coffees.json')
            }
          ]
        },
        {
          path:'/coffees',
          element:<Coffees></Coffees>,
          loader:()=>fetch('../coffees.json')
        },
        {
          path:'/dashboard',
          element:<DashBoard></DashBoard>
        },
        {
          path:'/coffee/:id',
          element:<CoffeeDetailals></CoffeeDetailals>,
          loader:()=>fetch('../coffees.json')
        }
       

      ]
    }
  ])

  export default router