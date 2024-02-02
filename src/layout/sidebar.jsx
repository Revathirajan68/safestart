import { useSelector } from "react-redux";

import './style.scss';
import { useNavigate } from "react-router-dom";
import { SidebarMenu } from "../assets/json/formjson";
import { clearAllData } from "../redux/loginReducer";

const Sidebar = () => {
    const loginDetail = useSelector((state) => state.login.loginData)
    const navigate = useNavigate()
    const sidebarMenu = SidebarMenu
    const pathName = location.pathname.split("/")[1];
    const handleMenuClick =(path,key) =>{
        if(key === "logout"){
            clearAllData()
            sessionStorage.clear();
        }
        navigate(path)
    }
    return (
        <div className="sidebar-container">
            <div className="sidebar-header">
                <div className="avatar">{loginDetail?.username?.charAt(0)}</div>
                <h2 className="user-name">{loginDetail?.username}</h2>
            </div>
            <div className="sidebar-body">
                {sidebarMenu?.map((item, index) => {
                    const { title, key, navigateTo } = item
                    return (
                        <div key={`${index}${key}`} className={`nav-menu ${pathName === key ? "active" : ""}` } onClick={() => handleMenuClick(navigateTo,key)}>
                            {/* <NavLink to={navigateTo} activeclassname="active"> */}
                                <div>{title}</div>
                            {/* </NavLink> */}
                        </div>
                    )
                })}
            </div>
        </div>
    ); loginDetail
}
export default Sidebar;