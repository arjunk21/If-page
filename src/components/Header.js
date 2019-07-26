import React from 'react'
import { Link } from 'gatsby'

import classes from './header.module.css'

const Header = () => (
  <React.Fragment>
    <div className={classes.topbar}>
      <div className={classes.topbarInside}>
        Have Questions? <i>Call or Text 7 Days a Week!</i> <a href="tel:3027545880">(302)-754-5880</a>
      </div>
    </div>
    <header className="w-100">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand" to="/">
            <img className="m-0" src="/logo.png" alt="logo" height="30" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavTop"
            aria-controls="navbarNavTop"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavTop">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://leadfollow.io/blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://calendly.com/leadfollow-discovery/discovery">
                  Schedule Call
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus">
                  Contact Us
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav justify-content-end ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="https://app.leadfollow.io/auth/signup">
                  Signup
                </a>
              </li>
            </ul>
            <a className="btn btn-primary ml-md-3" href="https://app.leadfollow.io/auth/login">
              Log In
            </a>
          </div>
        </nav>
      </div>
    </header>
  </React.Fragment>
)

export default Header
