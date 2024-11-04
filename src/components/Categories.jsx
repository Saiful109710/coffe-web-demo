import React from "react";
import { Link, NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div role="tablist" className="tabs tabs-lifted">
      {categories.map((category) => (
        <NavLink
          key={category.id}
          to={`/categories/${category.category}`}
          role="tab"
          className={({isActive})=>`tab ${isActive?'tab-active':''}`}
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
