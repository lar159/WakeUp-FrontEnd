const JAVAlogin = () => {


    return (
        <div className="container-form sign-in">

            <div className="w-25 p-4 rounded bg-marron">
                <form id="formLogin">
                    <h2 className="text-light mb-3">Iniciar Sesion</h2>

                    <div className="row">
                        <div className="mb-3">
                            <label>Dirección de email</label>
                            <input type="email" className="form-control" aria-describedby="Email de usuario" placeholder="Email" id="emailLogin" />
                            <p id="alertaEmailLogin"></p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="mb-3">
                            <label>Contraseña</label>
                            <input type="password" className="form-control" aria-describedby="Password" placeholder="Contraseña" id="passLogin" />
                            <p id="alertaPasswordLogin"></p>
                        </div>
                    </div>

                    <div className="row">
                        <div className=" mt-3 d-flex justify-content-center">
                            <button className="btn btn-outline-light" type="submit">Ingresar</button>
                        </div>
                    </div>

                </form>
            </div>

            <div className="welcome-back">
                <div className="message">
                    <h2 className="text-dark">¡Bienvenido nuevamente!</h2>
                    <p className="text-dark">Si aún no tenés una cuenta, registrate acá</p>
                    <button className="sign-in-btn btn btn-primary">Registrarse</button>
                </div>
            </div>
        </div>

    )
}

export default JAVAlogin