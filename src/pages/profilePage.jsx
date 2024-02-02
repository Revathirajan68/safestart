import { useSelector } from "react-redux";

import './style.scss'
const Profile = () =>{
    const loginDetail = useSelector((state) => state.login.loginData)
    return(
       <div className="profile-section">
        <h1>Hello {loginDetail.username}!</h1>
       </div>
    )
}
export default Profile;