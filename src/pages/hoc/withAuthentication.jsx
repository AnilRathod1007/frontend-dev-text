import React from "react";
import PageNotFound from "../../common/PageNotFound";

const withAuthentication = (WrappedComponent) => {
  const WithAuthentication = (props) => {
    const isAuthenticated = true; // Assuming the user is not authenticated

    if (!isAuthenticated) {
      //   console.log("error");
      return <PageNotFound />;
      // Show alert for unauthenticated user
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuthentication;
};

export default withAuthentication;
