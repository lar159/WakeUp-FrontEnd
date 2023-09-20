import { useState } from "react"
import Register from "./JAVAregister.jsx"
import Login from "./JAVAlogin.jsx"
import "./CSSregLogin.css" 

const JAVAregisterlogin =() => {
    const [registerOrLogin, setRegisterOrLogin] = useState(false)

    const eventsBtn =(e)=> {
        e.preventDefault();

        setRegisterOrLogin(!registerOrLogin)
    } 

    return(
        <div className="body-registerlogin"><Login /></div>
        // <div className="body-registerlogin">
        //     {registerOrLogin === false ? <div><button className="sign-up-btn btn btn-primary" onClick={eventsBtn}>Iniciar Sesion</button><Register/></div> : <div><button className="sign-up-btn btn btn-primary" onClick={eventsBtn}>Registrar</button><Login/></div>}
        // </div>
    )
}

export default JAVAregisterlogin