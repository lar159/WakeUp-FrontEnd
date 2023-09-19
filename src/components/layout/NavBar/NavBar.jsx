import './NavBar.css'
import logoNav from "../../../assets/Screenshot_149-removebg-preview.png";
import { AiOutlineUserAdd, AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const handleButtonClick = () => {

  };
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" href="/home"><img className='logoNav' src={logoNav} alt="Logo" />WakeUp!</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center align-items-center" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item mx-3 listNav">
              <Link className="nav-link active" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item listNav">
              <Link className="nav-link active mx-4" href="/menu">
                Menu
              </Link>
            </li>
            <li className="nav-item listNav">
              <Link className="nav-link active mx-4" href="#">
                About us
              </Link>
            </li>
            <li className="nav-item listNav">
              <Link className="nav-link active mx-4" href="#">
                Contact
              </Link>
            </li>
          </ul>
          <div className="d-flex justify-content-center align-items-center">
            <button className="btn btn-outline mx-2 singIn" type="button" onClick={handleButtonClick}><AiOutlineUser /> Sing In</button>
            <button className="btn btn-outline singUp" type="button" onClick={handleButtonClick}><AiOutlineUserAdd /> Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
