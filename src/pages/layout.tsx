import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";

const layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default layout;
