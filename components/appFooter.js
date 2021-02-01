import { faHandPointRight,faEnvelope, faMapMarked } from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare, faYoutubeSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState , useEffect} from 'react';

export default function AppFooter(){
    return (
        <div className="footer-ct">
            <div className="footer">
                <div>
                    <div>Quick Links</div>
                    <div className="ft-links margin-bottom10">
                        <div> <FontAwesomeIcon icon={faHandPointRight}/><Link href="/"> Home</Link></div>
                        <div><FontAwesomeIcon icon={faHandPointRight}/><Link href="/about"> About Us</Link></div>
                        <div><FontAwesomeIcon icon={faHandPointRight}/> Photo Gallery</div>
                        <div><FontAwesomeIcon icon={faHandPointRight}/><Link href="/contact"> Contact Us</Link></div>
                    </div>
                </div>
                <div style={{minWidth: "200px"}}>
                    <div className="margin-bottom10">Locate Us</div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.366766585212!2d79.38743241512064!3d25.956009183548996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399d7e184285dd45%3A0xae5b6c927ad91352!2sBaragaon%2C%20Uttar%20Pradesh%20285001!5e0!3m2!1sen!2sin!4v1612168886076!5m2!1sen!2sin" width="250" height="150" frameBorder="0" style={{frameBorder:0}} allowFullScreen="" aria-hidden="false" tabIndex="0" className="margin-bottom10"></iframe>
                </div>
                <div>
                    <div className="margin-bottom10">Contact Us</div>
                    <div className="addr margin-bottom10">
                        ABC Organization
                        <br/>Shop-123, Great Market, 
                        <br/>Popular Place, Pin-123456
                        <br/>Ph: +91-9999999999
                    </div>
                </div>
            </div>
            <style jsx>{`
                    .footer-ct{
                        width: 100%;
                    }
                    .margin-bottom10{
                        margin-bottom: 10px;
                    }
                    .footer {
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        padding: 20px 7%;
                        background-color: #1b1f23;
                        color: #f4f4f4;
                    }
                    .ft-links{
                        font-size: 0.7rem;
                    }
                    .ft-links>div{
                        padding-top: 10px;
                    }
                    .addr{
                        font-size: 0.8rem;
                    }
                    @media (max-width: 700px) {
                        .footer {
                          width: 100%;
                          flex-direction: column;
                        }
                        .ft-links{
                            display: flex;
                            justify-content: space-between;
                        }
                      }
                `}</style>
        </div>
    )
}