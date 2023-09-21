import instance from "../../../api/axios";
import {useState} from "react"

const JAVAlogin = ({ eventsBtn }) => {
  const [infFormLogin, setInfFormLogin] = useState({
    email: "",
    password: "",
  });

  const [errorMessageEmailLogin, setErrorMessageEmailLogin] = useState();
  const [errorMessagePasswordLogin, setErrorMessagePasswordLogin] = useState();

  const handleClick = (e) => {
    e.preventDefault();

    if (infFormLogin.email.length === 0) {
      setErrorMessageEmailLogin("The field cannot remain empty.");
    } else {
      setErrorMessageEmailLogin("");
    }

    if (infFormLogin.password.length === 0) {
      setErrorMessagePasswordLogin("The field cannot remain empty.");
    } else {
      setErrorMessagePasswordLogin("");
    }
  };

  return (
    <div className="container-form sign-in">
      <div className="w-25 p-4 rounded bg-marron">
        <form id="formLogin">
          <h2 className="text-light mb-3">Log in</h2>

          <div className="row">
            <div className="mb-3">
              <label>Email adress</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="Email de usuario"
                placeholder="User's email address"
                id="emailLogin"
                onChange={(e) =>
                  setInfFormLogin({ ...infFormLogin, email: e.target.value })
                }
              />
              <p className="text-warning font-monospace fs-6">
                {errorMessageEmailLogin}
              </p>
            </div>
          </div>

          <div className="row">
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                aria-describedby="Password"
                placeholder="Password"
                id="passLogin"
                onChange={(e) =>
                  setInfFormLogin({ ...infFormLogin, password: e.target.value })
                }
              />
              <p className="text-warning font-monospace fs-6">
                {errorMessagePasswordLogin}
              </p>
            </div>
          </div>

          <div className="row">
            <div className=" mt-3 d-flex justify-content-center">
              <button
                className="btn btn-outline-light"
                type="submit"
                onClick={handleClick}
              >
                Enter
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="welcome-back">
        <div className="message">
          <h2 className="text-dark fs-2">Welcome to WakeUp!</h2>
          <p className="text-dark fs-3">
            If you don`t have an account yet, register here.
          </p>
          <button
            className="sign-in-btn btn btn-primary"
            onClick={() => eventsBtn()}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default JAVAlogin;
