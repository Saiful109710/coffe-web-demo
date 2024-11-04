import React from "react";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";
import { Outlet, useLoaderData, useParams } from "react-router-dom";

const Home = () => {
  const categories = useLoaderData();
  
  
  return (
    <div>
      {/* Banner */}
      <Banner></Banner>
      {/* Heading */}
      <Heading
        title={"Browse Coffees By Category"}
        subtitle={`Choose your desired coffee category to browse through specific
          coffees that fit in your taste`}
      ></Heading>
      {/* Categories tab section */}
      <Categories categories={categories}></Categories>
      {/* Dynamic Nested Component */}
        <Outlet/>
    </div>
  );
};

export default Home;
