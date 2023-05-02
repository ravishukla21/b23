import React from "react";
interface nav{
  home?:string;
  page?:string;
}
export const Navbar = ({home,page}:nav) =>   {
  return (
    <div>
      <h2>Library Management</h2>
      <a className="home-link" href="/">
        Home
      </a>
      <a className="add-book-link" href="/add-book">
        Add New Book
      </a>
      <h3 data-testid="page-name">{page}{home}</h3>
    </div>
  );
};
