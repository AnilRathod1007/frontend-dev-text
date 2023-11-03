import React from "react";
import withAuthentication from "./withAuthentication";
import BooksList from "../bookList/BooksList";

const ProtectedComponent = () => {
  return (
    <div>
      <BooksList />
    </div>
  );
};

export default withAuthentication(ProtectedComponent);
