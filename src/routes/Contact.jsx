import React from "react";
import NavPage from "../components/NavPage";
import { Link } from "react-router-dom";
import { Linkedin, X, Facebook, Youtube, Instagram } from "lucide-react";

export default function Contact() {
    return(
        <>
            <NavPage page='Contact-Us'/>
            <div className="contact-page">
                <div className="contact-wrapper">
                    <div className="image-wrapper">
                        <div className="image">
                            </div><img src="/src/assets/contact-image.png" alt="" />
                        </div>
                    <div className="contact-content">
                        <h2>Contact Us</h2>
                        <div className="divisor-bar-contact"></div>
                        <div className="content-text">
                            <p>
                                Send us your comments or questions using the form below. Be sure to add support@etf.com
                                to your email contacts so you receive our response.
                            </p>
                        </div>
                    </div>
                <div className="contact-content-mobile">
                    <h2>Contact Us</h2>
                    <span>Send us your comments or questions 
                    using the form below. Be sure to add support@coins.com to 
                    your email contacts so you receive our response.</span>
                </div>
                </div>
                <div className="resources-wrapper">
                    <div className="resources-content-left">
                        <h2>Resources</h2>
                        <div className="resources-text">
                            <p>Our team is here to help! Reach out today to
                                learn more.</p>
                        </div>
                    </div>
                    <div className="resources-content-right">
                       <button><Link to='/'>Advertise</Link> </button> 
                       <button><Link to='/'>Careers</Link> </button> 
                       <button><Link to='/about-Us'>About Us</Link> </button> 
                    </div>
                </div>
                <div className="form-wrapper">
                    <h3 className="title-wrapper">General Inquires</h3>
                    <form action="/contact-us">
                        <div className="full-name">
                            <input type="text" placeholder="FIRST NAME*" />
                            <input type="text" placeholder="LAST NAME*"/>
                        </div>
                        <div className="email">
                            <input type="email" placeholder="EMAIL*" />
                        </div>
                        <div className="select-topic">
                            <select name="" id="" >
                                <option value="" selected>- Select -</option>
                                <option value="Editorial">Editorial</option>
                                <option value="Feedback">Feedback</option>
                                <option value="Technical Support">Technical Support</option>
                                <option value="Do not sell my personal information">Do not sell my personal information</option>
                                <option value="Delete my profile">Delete my profile</option>
                            </select>
                        </div>
                        <div className="message">
                            <textarea name="" id="" cols="60" rows="5" placeholder="MESSAGE*"></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="infos-wrapper">
                    <div className="infos-top">
                        <div className="address-wrapper">
                            <h3 className="title-wrapper">Address</h3>
                            <div className="address-content">
                                <p>12 E. 49th St, 2nd Floor, New York, N.Y. 10017</p>
                            </div>
                        </div>
                        <div className="follow-wrapper">
                            <h3 className="title-wrapper">Follow Us</h3>
                            <div className="follow-content">
                                <a href="">
                                <Linkedin />
                                </a>
                                <a href="">
                                <X />
                                </a>
                                <a href="">
                                <Facebook />
                                </a>
                                <a href="">
                                <Youtube />
                                </a>
                                <a href="">
                                <Instagram />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="divisor-bar infos"></div>
                    <div className="infos-bottom">
                        <h3 className="title-wrapper">Useful Links</h3>
                        <div className="links-wrapper">
                            <a href="">Stocks Tools</a>
                            <a href="">ETFs Tools</a>
                            <a href="">Reits Tools</a>
                            <a href="">Job listings</a>
                            <a href="">Media</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}