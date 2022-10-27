import React from "react";

import { useNavigate, Link } from 'react-router-dom';import Carousel from 'react-bootstrap/Carousel';
class Home extends React.Component{
    render(){
        return(
            <>
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8  mb-5 mb-lg-0">
                                <article className="row mb-5">
                                    <div className="col-12">
                                        
                                        <Carousel className="post-slider">
                                            <Carousel.Item>
                                                <img loading="lazy" src="assets/images/post/post-6.jpg" className="img-fluid" alt="post-thumb"/>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img loading="lazy" src="assets/images/post/post-1.jpg" className="img-fluid" alt="post-thumb"/>    
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img loading="lazy" src="assets/images/post/post-3.jpg" className="img-fluid" alt="post-thumb"/>
                                            </Carousel.Item>
                                        </Carousel>
                                    </div>
                                    <div className="col-12 mx-auto">
                                        <h3><a className="post-title" href="post-elements.html">Elements That You Can Use To Create A New Post On This Template.</a></h3>
                                        <ul className="list-inline post-meta mb-4">
                                            <li className="list-inline-item"><i className="ti-user mr-2"></i>
                                                <a href="author.html">John Doe</a>
                                            </li>
                                            <li className="list-inline-item">Date : March 15, 2020</li>
                                            <li className="list-inline-item">Categories : <a href="#!" className="ml-1">Photography </a>
                                            </li>
                                            <li className="list-inline-item">Tags : <a href="#!" className="ml-1">Photo </a> ,<a href="#!" className="ml-1">Image </a>
                                            </li>
                                        </ul>
                                        <p>Heading example Here is example of hedings. You can use this heading by following markdownify rules. For example: use # for heading 1 and use ###### for heading 6. Heading 1 Heading 2 Heading 3 Heading 4 Heading 5 Heading 6 Emphasis Emphasis, aka italics, with asterisks or underscores.</p> <a href="post-elements.html" className="btn btn-outline-primary">Continue Reading</a>
                                    </div>
                                </article>
                                <article className="row mb-5">
                                    <div className="col-12">
                                        <div className="post-slider">
                                            <img loading="lazy" src="assets/images/post/post-1.jpg" className="img-fluid" alt="post-thumb"/>
                                        </div>
                                    </div>
                                    <div className="col-12 mx-auto">
                                        <h3><a className="post-title" href="post-details-1.html">Cheerful Loving Couple Bakers Drinking Coffee</a></h3>
                                        <ul className="list-inline post-meta mb-4">
                                            <li className="list-inline-item"><i className="ti-user mr-2"></i><a href="author.html">John Doe</a>
                                            </li>
                                            <li className="list-inline-item">Date : March 14, 2020</li>
                                            <li className="list-inline-item">Categories : <a href="#!" className="ml-1">Photography </a>
                                            </li>
                                            <li className="list-inline-item">Tags : <a href="#!" className="ml-1">Photo </a> ,<a href="#!" className="ml-1">Image </a>
                                            </li>
                                        </ul>
                                        <p>It’s no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out.</p> <a href="post-details-1.html" className="btn btn-outline-primary">Continue Reading</a>
                                    </div>
                                </article>
                                <article className="row mb-5">
                                    <div className="col-12">
                                        
                                        <Carousel className="post-slider">
                                            <Carousel.Item>
                                                <img loading="lazy" src="assets/images/post/post-2.jpg" className="img-fluid" alt="post-thumb"/>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img loading="lazy" src="assets/images/post/post-4.jpg" className="img-fluid" alt="post-thumb"/>
                                            </Carousel.Item>
                                        </Carousel>
                                    </div>
                                    <div className="col-12 mx-auto">
                                        <h3><a className="post-title" href="post-details-2.html">Cheerful Loving Couple Bakers Drinking Coffee</a></h3>
                                        <ul className="list-inline post-meta mb-4">
                                            <li className="list-inline-item"><i className="ti-user mr-2"></i><a href="author.html">John Doe</a>
                                            </li>
                                            <li className="list-inline-item">Date : March 14, 2020</li>
                                            <li className="list-inline-item">Categories : <a href="#!" className="ml-1">Photobooth </a>
                                            </li>
                                            <li className="list-inline-item">Tags : <a href="#!" className="ml-1">Booth </a> ,<a href="#!" className="ml-1">Image </a>
                                            </li>
                                        </ul>
                                        <p>It’s no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out.</p> <a href="post-details-2.html" className="btn btn-outline-primary">Continue Reading</a>
                                    </div>
                                </article>
                                <article className="row mb-5">
                                    <div className="col-12">
                                        <div className="post-slider">
                                            <img loading="lazy" src="assets/images/post/post-3.jpg" className="img-fluid" alt="post-thumb"/>
                                        </div>
                                    </div>
                                    <div className="col-12 mx-auto">
                                        <h3><a className="post-title" href="post-details-2.html">Cheerful Loving Couple Bakers Drinking Coffee</a></h3>
                                        <ul className="list-inline post-meta mb-4">
                                            <li className="list-inline-item"><i className="ti-user mr-2"></i><a href="author.html">John Doe</a>
                                            </li>
                                            <li className="list-inline-item">Date : March 14, 2020</li>
                                            <li className="list-inline-item">Categories : <a href="#!" className="ml-1">Videography </a>
                                            </li>
                                            <li className="list-inline-item">Tags : <a href="#!" className="ml-1">Video </a> ,<a href="#!" className="ml-1">Image </a>
                                            </li>
                                        </ul>
                                        <p>It’s no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out.</p> <a href="post-details-2.html" className="btn btn-outline-primary">Continue Reading</a>
                                    </div>
                                </article>
                                <article className="row mb-5">
                                    <div className="col-12">
                                        <div className="post-slider">
                                            <img loading="lazy" src="assets/images/post/post-4.jpg" className="img-fluid" alt="post-thumb"/>
                                            <img loading="lazy" src="assets/images/post/post-1.jpg" className="img-fluid" alt="post-thumb"/>
                                        </div>
                                    </div>
                                    <div className="col-12 mx-auto">
                                        <h3><a className="post-title" href="post-details-1.html">Cheerful Loving Couple Bakers Drinking Coffee</a></h3>
                                        <ul className="list-inline post-meta mb-4">
                                            <li className="list-inline-item"><i className="ti-user mr-2"></i><a href="author.html">John Doe</a>
                                            </li>
                                            <li className="list-inline-item">Date : March 14, 2020</li>
                                            <li className="list-inline-item">Categories : <a href="#!" className="ml-1">Four seasone </a>
                                            </li>
                                            <li className="list-inline-item">Tags : <a href="#!" className="ml-1">Seasone </a>
                                                ,<a href="#!" className="ml-1">New </a>
                                            </li>
                                        </ul>
                                        <p>It’s no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out.</p> <a href="post-details-1.html" className="btn btn-outline-primary">Continue Reading</a>
                                    </div>
                                </article>
                                <article className="row mb-5">
                                    <div className="col-12">
                                        <div className="post-slider">
                                            <img loading="lazy" src="assets/images/post/post-5.jpg" className="img-fluid" alt="post-thumb"/>
                                        </div>
                                    </div>
                                    <div className="col-12 mx-auto">
                                        <h3><a className="post-title" href="post-details-1.html">Cheerful Loving Couple Bakers Drinking Coffee</a></h3>
                                        <ul className="list-inline post-meta mb-4">
                                            <li className="list-inline-item"><i className="ti-user mr-2"></i><a href="author.html">John Doe</a>
                                            </li>
                                            <li className="list-inline-item">Date : March 14, 2020</li>
                                            <li className="list-inline-item">Categories : <a href="#!" className="ml-1">Newyork city </a>
                                            </li>
                                            <li className="list-inline-item">Tags : <a href="#!" className="ml-1">City </a> ,<a href="#!" className="ml-1">Photo </a>
                                            </li>
                                        </ul>
                                        <p>It’s no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out.</p> <a href="post-details-1.html" className="btn btn-outline-primary">Continue Reading</a>
                                    </div>
                                </article>
                                <article className="row mb-5">
                                    <div className="col-12 mx-auto">
                                        <h3><a className="post-title" href="post-details-2.html">Cheerful Loving Couple Bakers Drinking Coffee</a></h3>
                                        <ul className="list-inline post-meta mb-4">
                                            <li className="list-inline-item"><i className="ti-user mr-2"></i><a href="author.html">John Doe</a>
                                            </li>
                                            <li className="list-inline-item">Date : March 14, 2020</li>
                                            <li className="list-inline-item">Categories : <a href="#!" className="ml-1">Newyork city </a>
                                            </li>
                                            <li className="list-inline-item">Tags : <a href="#!" className="ml-1">City </a> ,<a href="#!" className="ml-1">Photo </a>
                                            </li>
                                        </ul>
                                        <p>It’s no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out.</p> <a href="post-details-2.html" className="btn btn-outline-primary">Continue Reading</a>
                                    </div>
                                </article>
                            </div>
                            <aside className="col-lg-4">
                                
                                <div className="widget">
                                    <h5 className="widget-title"><span>Search</span></h5>
                                    <form action="/logbook-hugo/search" className="widget-search">
                                        <input id="search-query" name="s" type="search" placeholder="Type &amp; Hit Enter..."/>
                                        <button type="submit"><i className="ti-search"></i>
                                        </button>
                                    </form>
                                </div>
                                
                                <div className="widget">
                                    <h5 className="widget-title"><span>Categories</span></h5>
                                    <ul className="list-unstyled widget-list">
                                        <li><a href="#!" className="d-flex">Four seasone
                                            <small className="ml-auto">(1)</small></a>
                                        </li>
                                        <li><a href="#!" className="d-flex">Newyork city
                                            <small className="ml-auto">(2)</small></a>
                                        </li>
                                        <li><a href="#!" className="d-flex">Photobooth
                                            <small className="ml-auto">(1)</small></a>
                                        </li>
                                        <li><a href="#!" className="d-flex">Photography
                                            <small className="ml-auto">(2)</small></a>
                                        </li>
                                        <li><a href="#!" className="d-flex">Videography
                                            <small className="ml-auto">(1)</small></a>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="widget">
                                    <h5 className="widget-title"><span>Tags</span></h5>
                                    <ul className="list-inline widget-list-inline">
                                        <li className="list-inline-item"><a href="#!">Booth</a>
                                        </li>
                                        <li className="list-inline-item"><a href="#!">City</a>
                                        </li>
                                        <li className="list-inline-item"><a href="#!">Image</a>
                                        </li>
                                        <li className="list-inline-item"><a href="#!">New</a>
                                        </li>
                                        <li className="list-inline-item"><a href="#!">Photo</a>
                                        </li>
                                        <li className="list-inline-item"><a href="#!">Seasone</a>
                                        </li>
                                        <li className="list-inline-item"><a href="#!">Video</a>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="widget">
                                    <h5 className="widget-title"><span>Latest Article</span></h5>
                                    
                                    <ul className="list-unstyled widget-list">
                                        <li className="media widget-post align-items-center">
                                            <a href="post-elements.html">
                                            <img loading="lazy" className="mr-3" src="assets/images/post/post-6.jpg"/>
                                            </a>
                                            <div className="media-body">
                                            <h5 className="h6 mb-0"><a href="post-elements.html">Elements That You Can Use To Create A New Post On
                                                    This Template.</a></h5>
                                            <small>March 15, 2020</small>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className="list-unstyled widget-list">
                                        <li className="media widget-post align-items-center">
                                            <a href="post-details-1.html">
                                            <img loading="lazy" className="mr-3" src="assets/images/post/post-1.jpg"/>
                                            </a>
                                            <div className="media-body">
                                            <h5 className="h6 mb-0"><a href="post-details-1.html">Cheerful Loving Couple Bakers Drinking Coffee</a>
                                            </h5>
                                            <small>March 14, 2020</small>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className="list-unstyled widget-list">
                                        <li className="media widget-post align-items-center">
                                            <a href="post-details-2.html">
                                            <img loading="lazy" className="mr-3" src="assets/images/post/post-2.jpg"/>
                                            </a>
                                            <div className="media-body">
                                            <h5 className="h6 mb-0"><a href="post-details-2.html">Cheerful Loving Couple Bakers Drinking Coffee</a>
                                            </h5>
                                            <small>March 14, 2020</small>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Home;