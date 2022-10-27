import React from "react";

import { useNavigate, Link } from 'react-router-dom';

class Contact extends React.Component{
    render(){
        return(
            <>
                <section className="section-sm">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="title-bordered mb-5 d-flex align-items-center">
                                    <h1 className="h4">Talk To Me Anytime :)</h1>
                                    <ul className="list-inline social-icons ml-auto mr-3 d-none d-sm-block">
                                        <li className="list-inline-item"><Link to="/"><i className="ti-facebook"></i></Link>
                                        </li>
                                        <li className="list-inline-item"><Link to="/"><i className="ti-twitter-alt"></i></Link>
                                        </li>
                                        <li className="list-inline-item"><Link to="/"><i className="ti-linkedin"></i></Link>
                                        </li>
                                        <li className="list-inline-item"><Link to="/"><i className="ti-github"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="content mb-5">
                                    <h1 id="ask-us-anything-br-or-just-say-hi">Ask Us Anything <br/> Or just Say Hi,</h1>
                                    <p>Rather than just filling out a form, Sleeknote also offers help to the user
                                        <br/>with links directing them to find additional information or take popular actions.</p>
                                    <h4 className="mt-5">Hate Forms? Write Us Email</h4>
                                    <p><i className="ti-email mr-2 text-primary"></i><Link to="mailto:georgia.young@example.com">georgia.young@example.com</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <form method="POST" action="#">
                                    <div className="form-group">
                                        <label for="name">Your Name (Required)</label>
                                        <input type="text" name="name" id="name" className="form-control" required/>
                                    </div>
                                    <div className="form-group">
                                        <label for="email">Your Email Address (Required)</label>
                                        <input type="email" name="email" id="email" className="form-control" required/>
                                    </div>
                                    <div className="form-group">
                                        <label for="message">Your Message Here</label>
                                        <textarea name="message" id="message" className="form-control"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Send Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Contact;