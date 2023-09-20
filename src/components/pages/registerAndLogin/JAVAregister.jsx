import { useState } from "react";

const JAVAregister = () => {
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
    // let validacionContrasena = ""

    const handleClick = (e)=>{
        e.preventDefault();

        let validacionContrasena = ""
        let valida = true

        if(infForm.nombre.length === 0){
            setErrorMessageNombre("El campo no puede permanecer vacío.")
        }else if(infForm.nombre.length > 20){
            setErrorMessageNombre("Nombre/s muy largo.")
        }else{
            setErrorMessageNombre("Nombre/s válido.")
        }
        
        if(infForm.apellido.length === 0){
            setErrorMessageApellido("El campo no puede permanecer vacío.")
        }else if(infForm.apellido.length > 20){
            setErrorMessageApellido("Apellido/s muy largo.")
        }else{
            setErrorMessageApellido("Apellido/s válido.")
        }

        if(infForm.email.length === 0){
            setErrorMessageEmail("El campo no puede permanecer vacío.")
        }else if(!validacionEmail.test(infForm.email)){
            setErrorMessageEmail("Email no válido.")
        }else{
            setErrorMessageEmail("")
        }

        if(infForm.password.length === 0){
            setErrorMessagePassword("El campo no puede permanecer vacío.")
        }else{
            if(infForm.password.length < 8){
                validacionContrasena += "- Debe tener más de 8 caracteres. <br/>"
                valida = false
                // validoEnContrasena = false
            }
    
            if(!infForm.password.match(/[A-Z]/)){
                validacionContrasena += "- Debe tener al menos una letra mayúscula. <br/>"
                valida = false
                // validoEnContrasena = false
            }
    
            if(!infForm.password.match(/[0-9]/)){
                validacionContrasena += "- Debe tener al menos un número. <br/>"
                valida = false
                // validoEnContrasena = false
            }

            if(valida){
                setErrorMessagePassword("Contraseña válida.")
            }else{
                setErrorMessagePassword(validacionContrasena)
            }
        }
    } 

    return (
        <div className="container-form sign-up">
            <div className="welcome-back">
                <div className="message">
                    <h2 className="text-dark">¡Bienvenido a WakeUp!</h2>
                    <p className="text-dark"> Si ya tenés una cuenta, iniciá sesión acá</p>
                    <button className="sign-up-btn btn btn-primary">Iniciar Sesion</button>
                </div>
            </div>

            <div className="w-25 p-4 rounded bg-marron">
                <form id="formRegistro">
                    <h2 className="text-light mb-3">Crear una cuenta</h2>

                    <div className="row">
                        <div className="mb-3">
                            <label>Nombre</label>
                            <input type="text" className="form-control" aria-describedby="Nombre" placeholder="Nombre/s"  id="nombreUsuario" onChange={(e) =>  setInfForm({...infForm, nombre:e.target.value})}/>
                            <p>{errorMessageNombre}</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="mb-3">
                            <label>Apellido</label>
                            <input type="text" className="form-control" aria-describedby="Apellido" placeholder="Apellido/s" id="apellidoUsuario" onChange={(e) =>  setInfForm({...infForm, apellido:e.target.value})}/>
                            <p>{errorMessageApellido}</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="mb-3">
                            <label>Dirección de email</label>
                            <input type="email" className="form-control" aria-describedby="Email de usuario" placeholder="Email" id="emailUsuario" onChange={(e) =>  setInfForm({...infForm, email:e.target.value})}/>
                            <p>{errorMessageEmail}</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="mb-3">
                            <label>Contraseña</label>
                            <input type="password" className="form-control" aria-describedby="Password" placeholder="Contraseña" id="passUsuario" onChange={(e) =>  setInfForm({...infForm, password:e.target.value})}/>
                            <p>{errorMessagePassword}</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className=" mt-3 d-flex justify-content-center">
                            <button className="btn btn-outline-light" type="submit" onClick={handleClick}>Registrarse</button>
                        </div>

                    </div>

                </form>
            </div>
        </div>
    )
}

export default JAVAregister