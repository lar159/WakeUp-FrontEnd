import './NavBar.css'
import logoNav from "../../../assets/Screenshot_149-removebg-preview.png";
import { AiOutlineUser } from 'react-icons/ai'
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/"><img className='logoNav' src={logoNav} alt="Logo" />WakeUp!</Link>
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
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item listNav">
              <NavLink className="nav-link active mx-4" to="/menu">
                Menu
              </NavLink>
            </li>
            <li className="nav-item listNav">
              <NavLink className="nav-link active mx-4" to="/aboutUs">
                About us
              </NavLink>
            </li>
            <li className="nav-item listNav">
              <NavLink className="nav-link active mx-4" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="d-flex justify-content-center align-items-center">
            <Link className="btn btn-outline mx-2 singIn"  to="/login"><AiOutlineUser className='mb-1' /> Access </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
