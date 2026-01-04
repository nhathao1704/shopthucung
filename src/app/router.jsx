import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import About from "../page/aboutus.jsx";
import Home from "../page/home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  
    children: [
      {
        index: "home",
        element: <Home/>,
      },
      {
        path: "aboutus",
        element: <About />,   
      },
    ],
  },
]);

export default router;
