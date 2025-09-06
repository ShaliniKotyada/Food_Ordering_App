import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Restaurants from "./Restaurants";
import Categories from "./Categories";
import RestaurantInfo from "./RestaurantInfo";

import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// This is your App component
function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

// Define routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Categories />,
      },
      {
        path: "/restaurants/:id",
        element: <Restaurants />,
      },
      {
        path: "/restaurants/:id/:query",
        element: <RestaurantInfo />,
      },
    ],
  },
]);

// Export RouterProvider instead of App
export default App;
export { appRouter };

