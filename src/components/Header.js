import React from "react";
import { useNavigate, Link } from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <>
                <header className="sticky-top bg-white border-bottom border-default">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-white">
                            <Link className="navbar-brand" to="/">
                                <img className="img-fluid" width="150px" src="assets/images/logo.png" alt="LogBook"/>
                            </Link>
                            <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navigation">
                                <i className="ti-menu"></i>
                            </button>

                            <div className="collapse navbar-collapse text-center" id="navigation">
                                <ul className="navbar-nav ml-auto">
                                
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link" to="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">Pages <i className="ti-angle-down ml-1"></i>
                                    </Link>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" to="/author">Author</Link>
                                        <Link className="dropdown-item" to="/post-details-1">Post Details 1</Link>
                                        <Link className="dropdown-item" to="/post-details-2">Post Details 2</Link>
                                        <Link className="dropdown-item" to="/post-elements">Post Elements</Link>
                                        <Link className="dropdown-item" to="/privacy-policy">Privacy Policy</Link>
                                        <Link className="dropdown-item" to="/terms-conditions">Terms Conditions</Link>
                                    </div>
                                </li>
                                </ul>
                                
                                <select className="m-2 border-0" id="select-language">
                                    <option id="en" value="/about/" selected>En</option>
                                    <option id="fr" value="/fr/about/">Fr</option>
                                </select>

                                <div className="search px-4">
                                    <button id="searchOpen" className="search-btn"><i className="ti-search"></i></button>
                                    <div className="search-wrapper">
                                        <form action="javascript:void(0)" className="h-100">
                                            <input className="search-box pl-4" id="search-query" name="s" type="search" placeholder="Type &amp; Hit Enter..." />
                                        </form>
                                        <button id="searchClose" className="search-close"><i className="ti-close text-dark"></i></button>
                                    </div>
                                </div>

                            </div>
                        </nav>
                    </div>
                </header>
            </>
        )
    }
}

export default Header;