import React from "react";

// accept the page name as prop here
type objectoptional={
  home?:string;
  page?:string;
}
export const Navbar = ({home,page}:objectoptional) => {
  return (
    <div>
      <h2>Product List</h2>
      <a className="home-link" href="/">
        Home
      </a>
      <a className="add-product-link" href="/add-product">
        Add Product
      </a>
      <h3 data-testid="page-name">{/* Show Correct page name here */}
      {home}
      {page}
      </h3>
    </div>
  );
};
