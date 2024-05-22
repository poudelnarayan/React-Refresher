import React from "react";
import GoalList from "./components/GoalList";

import "./App.css";

const App = () => {
  // return React.createElement("h1", "A React App!"); // This is how JSX is compiled
  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <GoalList />
    </div>
  );
};

// class App extends React.Componene {
//   render() {
//     return <h1 title="This works">A React App!</h1>;
//   }
// }

export default App;
