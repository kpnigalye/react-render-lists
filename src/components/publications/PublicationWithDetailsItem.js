import React from "react";

function PublicationWithDetailsItem({ publication }) {
  const { id, title, year, type } = publication;
  return (
    <div
      style={{
        border: "1px solid gray",
        borderRadius: 5,
        padding: 5,
        marginBottom: 5,
        width: "30%",
        marginLeft: 5,
      }}
    >
      <h1>
        <b>Name:</b> {title}
      </h1>
      <div>
        <span>
          <b>Type:</b> {type}
        </span>
        <span>
          <b>Year:</b> {year}
        </span>
        <p>
          <b>Ranking:</b> {id}
        </p>
      </div>
    </div>
  );
}

export default PublicationWithDetailsItem;
