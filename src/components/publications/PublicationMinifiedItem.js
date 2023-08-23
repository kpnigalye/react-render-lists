import React from "react";

function PublicationMinifiedItem({ publication }) {
  return (
    <>
      <p>
        Title: {publication.title}, Year: {publication.year}
      </p>
    </>
  );
}

export default PublicationMinifiedItem;
