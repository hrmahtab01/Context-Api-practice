import React from "react";
import LoginFrom from "./Components/LoginFrom";
import Other from "./Components/Other";
import UserProviderContext from "./Contexts/UserProviderContext";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";
import SideBar from "./Components/SIdeBar";

const App = () => {
  let route = createBrowserRouter(
    createRoutesFromElements([<Route path="/" element={<LoginFrom />}>
      <Route path="/SideBar" element ={<SideBar/>}/>
    </Route>])
  );
  return <RouterProvider router={route}/>
};

export default App;
