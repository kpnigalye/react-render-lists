import React from "react";

function BookWithDetailsItem({ book }) {
  const { title, author, genre, publicationYear } = book;
  return (
    <>
      <h1>
        Title: {title}, written by {author}
      </h1>
      <div>
        <span>Genre: {genre}</span>
        <span>Published in: {publicationYear}</span>
      </div>
    </>
  );
}

export default BookWithDetailsItem;
