import React from "react";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import Gig from "./pages/gig/Gig";
import Gigs from "./pages/gigs/Gigs";
import Orders from "./pages/orders/Orders";
import Add from "./pages/add/Add";
import Home from "./pages/home/Home";
import Mygigs from "./pages/myGigs/Mygigs";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import "./App.css";

function App() {
  const Layout = () => {
    return (
      <>
        <NavBar />
        <Outlet />
        <Footer />
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/mygigs",
          element: <Mygigs />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message",
          element: <Message />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
