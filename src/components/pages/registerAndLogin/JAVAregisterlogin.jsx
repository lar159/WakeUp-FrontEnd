import { useState } from "react"
import Register from "./JAVAregister.jsx"
import Login from "./JAVAlogin.jsx"
import "./CSSregLogin.css" 

const JAVAregisterlogin =(events) => {
    const [registerOrLogin, setRegisterOrLogin] = useState(false)
    // console.log(events)

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