import React from "react";
import { RouterProvider } from "react-router-dom";

import { routes } from "./routes/routes";

import "./App.css";

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
