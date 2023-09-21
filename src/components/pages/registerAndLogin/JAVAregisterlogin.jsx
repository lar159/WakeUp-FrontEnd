import { useState } from "react"
import Register from "./JAVAregister"
import Login from "./JAVAlogin"
import "./CSSregLogin.css" 

const JAVAregisterlogin =() => {
    const [registerOrLogin, setRegisterOrLogin] = useState(false)

    const eventsBtn =()=> {

        setRegisterOrLogin(!registerOrLogin)
    } 

    return(
        <div className="body-registerlogin">
            {registerOrLogin === false ? <Login eventsBtn={eventsBtn}/> : <Register eventsBtn={eventsBtn}/>}
        </div>
    )
}

export default JAVAregisterlogin