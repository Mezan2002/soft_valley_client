import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
