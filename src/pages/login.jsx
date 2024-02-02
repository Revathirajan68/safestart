import { useState } from "react";
// webpacks 
import { useDispatch } from "react-redux";



// components and json
import FormModal from "../components/hoc/modal";
import Input from "../components/hoc/input";
import { LoginFromInputs } from "../assets/json/formjson";
import { updateLoginData } from "../redux/loginReducer";


// images
import Loginbg from '../assets/images/loginbg.jpg'

// styles
import './style.scss'
import { Col, Row } from "react-bootstrap";
import Button from "../components/hoc/button";



const Login = () => {
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState({
        username: "",
        password: "",
        token:true
    })
    const formInputs = LoginFromInputs;
  
    const handleInputChange = (value, key) => {
        setFormValues({
            ...formValues,
            [key]: value
         
        })
    }
    const handleLogin = () =>{
        setButtonLoading(true)
        dispatch(updateLoginData(formValues));
        setButtonLoading(false)
    }
    const getChildren = () => {
        return (
            <Row className="login-modal-content">
                <Col md={6}>
                    <img src={Loginbg} alt="login-bg-image" />
                </Col>
                <Col md={6} className="right-col">
                    <h1 className="login-heading">Login</h1>
                    {formInputs.map((data, index) => {
                        const { title, key, required, type } = data
                        return (
                            <Input
                                label={title}
                                type={type}
                                key={`${index}${key}`}
                                required={required}
                                value={formValues[key]}
                                onChange={(e) => handleInputChange(e.target.value, key)}
                            />
                        )
                    })}
                <Button disabled={formValues.password === "" || formValues.username === ""} className={"btn-primary"} onClick={handleLogin}>Log in</Button>
                </Col>
            </Row>
        )
    }
    return (
        <div className="login-container">
            <FormModal
                show
                size={"lg"}
                children={getChildren()}
                modalClassName={"login-modal"}
            />
        </div>
    );
}
export default Login;