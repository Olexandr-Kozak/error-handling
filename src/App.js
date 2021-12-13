import './App.css';
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import React from "react";
import Wigget from "./components/Wigget/Wigget";
import Page1 from "./components/Page1/Page1";
import Page2 from "./components/Page2/Page2";

function App() {
  return (
    <div className="App">
      <ErrorBoundary><Page1/></ErrorBoundary>
      <ErrorBoundary><Page2/></ErrorBoundary>
      <ErrorBoundary><Wigget/></ErrorBoundary>
    </div>
  );
}

export default App;
