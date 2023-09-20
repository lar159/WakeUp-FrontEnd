import { useState } from "react";

const JAVAregister = ({eventsBtn}) => {
    const [infForm, setInfForm] = useState({
        nombre: "",
        apellido: "",
        email: "",
        password: ""
    })

    const validacionEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    const [errorMessageNombre, setErrorMessageNombre] = useState()
    const [errorMessageApellido, setErrorMessageApellido] = useState()
    const [errorMessageEmail, setErrorMessageEmail] = useState()
    const [errorMessagePassword, setErrorMessagePassword] = useState()

    const handleClick = (e)=>{
        e.preventDefault();

        let validacionContrasena = ""
        let valida = true

        if(infForm.nombre.length === 0){
            setErrorMessageNombre("The field cannot remain empty.")
        }else if(infForm.nombre.length > 20){
            setErrorMessageNombre("Name too long.")
        }else{
            setErrorMessageNombre("Accepted name.")
        }
        
        if(infForm.apellido.length === 0){
            setErrorMessageApellido("The field cannot remain empty.")
        }else if(infForm.apellido.length > 20){
            setErrorMessageApellido("Last name too long.")
        }else{
            setErrorMessageApellido("Accepted last name")
        }

        if(infForm.email.length === 0){
            setErrorMessageEmail("The field cannot remain empty.")
        }else if(!validacionEmail.test(infForm.email)){
            setErrorMessageEmail("Invalid email.")
        }else{
            setErrorMessageEmail("")
        }

        console.log(infForm.password.length)

        if(infForm.password.length === 0){
            setErrorMessagePassword("The field cannot remain empty.")
        }else{
            if(infForm.password.length < 8){
                validacionContrasena += "- Must have more than 8 characters."
                valida = false
            }
    
            if(!infForm.password.match(/[A-Z]/)){
                validacionContrasena += "- Must have at least one uppercase letter."
                valida = false
            }
    
            if(!infForm.password.match(/[0-9]/)){
                validacionContrasena += "- Must have at least one number."
                valida = false
            }

            if(valida){
                setErrorMessagePassword("Accepted password.")
            }else{
                setErrorMessagePassword(validacionContrasena)
            }
        }
    } 

    return (
        <div className="container-form sign-up">
            <div className="welcome-back">
                <div className="message">
                    <h2 className="text-dark fs-2">Welcome to WakeUp!</h2>
                    <p className="text-dark fs-3"> If you already have an account, log in here.</p>
                    <button className="sign-up-btn btn btn-primary" onClick={()=> eventsBtn()}>Sign in</button>
                </div>
            </div>

            <div className="w-25 p-4 rounded bg-marron">
                <form id="formRegistro">
                    <h2 className="text-light mb-3">Create an account</h2>

                    <div className="row">
                        <div className="mb-3">
                            <label>Name</label>
                            <input type="text" className="form-control" aria-describedby="Nombre" placeholder="Name(s)"  id="nombreUsuario" onChange={(e) =>  setInfForm({...infForm, nombre:e.target.value})}/>
                            <p className="text-warning font-monospace fs-6">{errorMessageNombre}</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="mb-3">
                            <label>Last name</label>
                            <input type="text" className="form-control" aria-describedby="Apellido" placeholder="Last name(s)" id="apellidoUsuario" onChange={(e) =>  setInfForm({...infForm, apellido:e.target.value})}/>
                            <p className="text-warning font-monospace fs-6">{errorMessageApellido}</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="mb-3">
                            <label>Email adress</label>
                            <input type="email" className="form-control" aria-describedby="Email de usuario" placeholder="User's email address" id="emailUsuario" onChange={(e) =>  setInfForm({...infForm, email:e.target.value})}/>
                            <p className="text-warning font-monospace fs-6">{errorMessageEmail}</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="mb-3">
                            <label>Password</label>
                            <input type="password" className="form-control" aria-describedby="Password" placeholder="Password" id="passUsuario" onChange={(e) =>  setInfForm({...infForm, password:e.target.value})}/>
                            <p className="text-warning font-monospace fs-6">{errorMessagePassword}</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className=" mt-3 d-flex justify-content-center">
                            <button className="btn btn-outline-light" type="submit" onClick={handleClick}>Register</button>
                        </div>

                    </div>

                </form>
            </div>
        </div>
    )
}

export default JAVAregister