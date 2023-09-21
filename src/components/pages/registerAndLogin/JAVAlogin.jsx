import instance from "../../../api/axios";

const JAVAlogin =({eventsBtn})=> {

    // const login = async () => {

    //     const res = await instance.post("/api/login", user)
    // }
    const handleClick = (e)=>{
        e.preventDefault(); 
    }

    return(
        <div className="container-form sign-in">

            <div className="w-25 p-4 rounded bg-marron">
                <form id="formLogin">
                    <h2 className="text-light mb-3">Log in</h2>

                    <div className="row">
                        <div className="mb-3">
                            <label>Email adress</label>
                            <input type="email" className="form-control" aria-describedby="Email de usuario" placeholder="User's email address" id="emailLogin" />
                            <p id="alertaEmailLogin"></p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="mb-3">
                            <label>Password</label>
                            <input type="password" className="form-control" aria-describedby="Password" placeholder="Password" id="passLogin" />
                            <p id="alertaPasswordLogin"></p>
                        </div>
                    </div>

                    <div className="row">
                        <div className=" mt-3 d-flex justify-content-center">
                            <button className="btn btn-outline-light" type="submit" onClick={handleClick}>Enter</button>
                        </div>
                    </div>

                </form>
            </div>

            <div className="welcome-back">
                <div className="message">
                    <h2 className="text-dark fs-2">Welcome to WakeUp!</h2>
                    <p className="text-dark fs-3">If you don`t have an account yet, register here.</p>
                    <button className="sign-in-btn btn btn-primary" onClick={()=> eventsBtn()}>Register</button>
                </div>
            </div>
        </div>

    )
}

export default JAVAlogin