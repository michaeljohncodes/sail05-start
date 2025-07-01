import React from "react";
import { RouterProvider } from "react-router-dom";
import { mainRoute } from "./routes/Route";

const NewApp = () => {
  return (
    <div>
      <RouterProvider router={mainRoute} />
    </div>
  );
};

export default NewApp;
