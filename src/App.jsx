// import { useState } from "react";
// import "./App.css";
// import Counter from "./pages/counter/Counter";
// import BooksList from "./pages/bookList/BooksList";
// import { EnhancedComponent } from "./pages/hoc/withEnhancedFunctionality";
// import Tasks from "./pages/practice/Tasks";

// function App() {
//   return (
//     <>
//       {/* <Counter /> */}
//       {/* <EnhancedComponent text="Hello HOC" /> */}
//       <BooksList />
//       {/* <Tasks /> */}
//     </>
//   );
// }

// export default App;

import ProtectedComponent from "./pages/hoc/ProtectedComponent";
import withAuthentication from "./pages/hoc/withAuthentication";
const App = () => {
  return (
    <div className="App">
      <ProtectedComponent />
    </div>
  );
};

export default withAuthentication(App);
