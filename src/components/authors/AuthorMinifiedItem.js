import React from "react";

function AuthorMinifiedItem({ author }) {
  return (
    <>
      <p>
        Name: {author.name}, Nation: {author.nationality}{" "}
      </p>
    </>
  );
}

export default AuthorMinifiedItem;
