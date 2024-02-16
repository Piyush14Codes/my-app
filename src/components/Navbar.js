import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className="btn-group me-2" role="group" aria-label="First group">
        <button type="button" className="btn btn-primary btn-danger mx-1" onClick = {props.toggleColorRed}></button>
        <button type="button" className="btn btn-primary btn-warning mx-1" onClick = {props.toggleColorYellow}></button>
        <button type="button" className="btn btn-primary btn-success mx-1" onClick = {props.toggleColorGreen}></button>
      </div>
      <div className={`form-check form-switch text-${props.mode === 'light'? 'dark': 'light'}`}>
      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light'? 'Dark': 'Light'} Mode</label>
    </div>
    </div>
  </div>
</nav>
  )
}
Navbar.propTypes = {
    tile: PropTypes.string,
    aboutText: PropTypes.string
};
Navbar.defaultProps = {
    title: "Logo",
    aboutText: "About"
};