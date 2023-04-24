import React from "react";
import { Link } from "react-router-dom";

export const BookCard = ({ id,cover_photo, book_name, author, category, release_year, no_of_chapters }) => {
  return (
    <div className="book-card">


      {/* ``` - Show Image in image tag with class `book-image` - Show Book name
      with class `book-name` - Show Author with class `book-author` - Show
      Category with class `book-category` - Show Release year with class
      `book-year` - Show Number of chapters with class `book-chapter` * Do not
      add any extra text, See the Image provided to know what needs to be
      displayed * ``` */}
      <img  className="book-image" width={"100%"} src={cover_photo} />
      <p className="book-name">{book_name}</p>
      <p className="book-author">{author}</p>
      <p className="book-category">{category}</p>
      <p className="book-year">{release_year}</p>
      <p className="book-chapter">{no_of_chapters}</p>
      <button className="edit-book">
      <Link className="edit-book" to={`/edit-book/${id}`}>Edit</Link>
      </button>
    </div>
  );
};
