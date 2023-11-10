import { useState } from "react";
import Form from "./components/form";
import { RouterProvider } from "react-router-dom";
import router from "./routers";
// import './App.css'use
function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <div>Hello world!</div>,
  //   },
  // ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
