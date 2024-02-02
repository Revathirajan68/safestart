import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";

import './style.scss'

const Layout = () =>{
    return(
        <main className="main-layout">
            <Sidebar />
            <div className={"main-body fixed"}>
              <Outlet></Outlet>
            </div>
          </main>
    )
}
export default Layout;