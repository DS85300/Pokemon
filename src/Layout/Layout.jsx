import { Outlet } from "react-router"
import { Link } from "react-router";
import Navbar from "../components/Navbar";


const Layout =()=> {

    return (
<div>
        <Navbar />
      
       <main className="routes"> 
        <Outlet />
        </main>
      </div>
    );
};

export default Layout;
