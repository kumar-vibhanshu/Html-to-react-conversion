import React from "react";
import { useNavigate, Link } from 'react-router-dom';

class Footer extends React.Component{
    render(){
        return(
            <>
                <footer className="section-sm pb-0 border-top border-default">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-md-3 mb-4">
                            <Link className="mb-4 d-block" to="/">
                                <img className="img-fluid" width="150px" src="assets/images/logo.png" alt="LogBook"/>
                            </Link>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                            </div>

                            <div className="col-lg-2 col-md-3 col-6 mb-4">
                            <h6 className="mb-4">Quick Links</h6>
                            <ul className="list-unstyled footer-list">
                                <li><Link to="about">About</Link></li>
                                <li><Link to="contact">Contact</Link></li>
                                <li><Link to="privacy-policy">Privacy Policy</Link></li>
                                <li><Link to="terms-conditions">Terms Conditions</Link></li>
                            </ul>
                            </div>

                            <div className="col-lg-2 col-md-3 col-6 mb-4">
                            <h6 className="mb-4">Social Links</h6>
                            <ul className="list-unstyled footer-list">
                                <li><Link to="#">facebook</Link></li>
                                <li><Link to="#">twitter</Link></li>
                                <li><Link to="#">linkedin</Link></li>
                                <li><Link to="#">github</Link></li>
                            </ul>
                            </div>

                            <div className="col-md-3 mb-4">
                            <h6 className="mb-4">Subscribe Newsletter</h6>
                            <form className="subscription" action="javascript:void(0)" method="post">
                                <div className="position-relative">
                                    <i className="ti-email email-icon"></i>
                                    <input type="email" className="form-control" placeholder="Your Email Address"/>
                                </div>
                                <button className="btn btn-primary btn-block rounded" type="submit">Subscribe now</button>
                            </form>
                            </div>
                        </div>
                        <div className="scroll-top">
                            <Link to="javascript:void(0);" id="scrollTop"><i className="ti-angle-up"></i></Link>
                        </div>
                        <div className="text-center">
                            <p className="content">&copy; 2022 - Managed By <Link to="" target="_blank">Kumar Vibhanshu</Link></p>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}

export default Footer;