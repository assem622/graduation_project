import React, { useContext } from 'react';
import Style from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Assets/images/12.png';
import { userContext } from '../../Context/userContext';
export default function Navbar() {

  let {userToken,setUserToken}= useContext(userContext);

  let navigate = useNavigate();

  function Logout(){
    localStorage.removeItem('userToken');
    setUserToken(null);
    navigate('login')
  }

  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-body-tertiary ${Style.customNavbar} fixed-top`} style={{ fontFamily: 'Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif' , lineHeight: '1.2', height: '70px',fontWeight: 'bold'  }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img width={120} src={logo} alt="logo" />
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* //////////////////////////////////////*/}

              <>

                <li className="nav-item">
                <Link className="nav-link" to="/" style={{ textDecoration: 'none' }}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Projects" style={{ textDecoration: 'none' }}>
                  Projects
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/Categories" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ textDecoration: 'none' }}>
                Categories
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="#">aaaa</Link></li>
                  <li><Link className="dropdown-item" to="#">bbbb</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="#">cccc</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="#" style={{ textDecoration: 'none' }}>
                  Recommendation
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="#" style={{ textDecoration: 'none' }}>
                 Account
                </Link>
              </li>
              
              </>

            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            {userToken!== null?  <>              
              <li className="nav-item search-form">
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"/>
              </form>
            </li>
            <li className="nav-item">
                <span onClick={() => Logout()} className="nav-link cursor-pointer" style={{ textDecoration: 'none' }}>
                  Logout
                </span>
              </li> 
              </> : <>

              <li className="nav-item">
                <Link className="nav-link" to="/Login" style={{ textDecoration: 'none' }}>
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Register" style={{ textDecoration: 'none' }}>
                  Register
                </Link>
              </li></> }




            </ul>
          </div>
        </div>
      </nav>
      <br/>
    <br/>
    <br/>
    </>
  );
}
