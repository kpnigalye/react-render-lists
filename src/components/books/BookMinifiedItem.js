import React from "react";

function BookMinifiedItem({ book }) {
  const { title, author, publicationYear } = book;
  return (
    <>
      <h3>
        Title: {title} ({publicationYear})
      </h3>
      <div>
        <span>Author: {author}</span>
      </div>
    </>
  );
}

export default BookMinifiedItem;
