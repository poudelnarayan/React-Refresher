import React from "react";
import GoalList from "./components/GoalList/GoalList";

import "./App.css";

const App = () => {
  const courseGoals = [
    { id: "cg1", text: "Finish the course" },
    { id: "cg2", text: "Learn all about the course main topic" },
    { id: "cg3", text: "Help other students in the course Q&A" },
  ];
  // return React.createElement("h1", "A React App!"); // This is how JSX is compiled
  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <GoalList goals = {courseGoals} />
    </div>
  );
};

// class App extends React.Componene {
//   render() {
//     return <h1 title="This works">A React App!</h1>;
//   }
// }

export default App;
