import React from "react";

function AuthorWithDetailsItem({ author }) {
  const { id, name, nationality, birthYear } = author;
  return (
    <>
      <h3>{name}</h3>
      <div>
        <span>
          <b>Nationality:</b> {nationality}
        </span>
        <span>
          <b>Birth Year:</b> {birthYear}
        </span>
        <p>
          <b>Ranking:</b> {id}
        </p>
      </div>
    </>
  );
}

export default AuthorWithDetailsItem;
