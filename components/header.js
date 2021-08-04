import { faPhoneSquare,faEnvelope, faMapMarked } from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare, faYoutubeSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function AppHeader(){
    return (
        <div className="header-ct">
            <div className="header">
                <div><FontAwesomeIcon className="fa-lg" icon={faPhoneSquare} />&nbsp; +91-9999999999 </div>
                <div> <FontAwesomeIcon className="fa-lg" icon={faEnvelope} />&nbsp; info@abc.com</div>
                <div> <FontAwesomeIcon icon={faMapMarked} className="fa-lg"/>&nbsp; Shop-123, Great Market, Popular Place, Pin-123456 </div>
                <div className="social">
                    <div><FontAwesomeIcon className="fa-lg" icon={faFacebookSquare}/></div>
                    <div><FontAwesomeIcon className="fa-lg" icon={faTwitterSquare}/></div>
                    <div><FontAwesomeIcon className="fa-lg" icon={faYoutubeSquare}/></div>
                </div>
            </div>
            <div className="header-mask"></div>
            <div className="sub-header">
                <div style={{fontWeight: "500"}}>
                    <div style={{fontSize: "1.5rem"}}>ABC Org</div>
                    <div style={{fontSize: "0.7rem"}}>Work A, B & C</div>
                </div>
                <div><Link className="card" href="/"> Home </Link></div>
                <div><Link className="card" href="/about"> About Us </Link></div>
                <div><Link className="card" href="/contact">Contact Us</Link></div>
            </div>
            <style jsx>{`
                    .header-ct{
                        width: 100%;
                        position: sticky;
                        top: -45px;
                    }
                    .header {
                        padding: 10px 7%;
                        display: flex;
                        justify-content: space-between;
                        color: #f4f4f4;
                        background-color: #1b1f23;
                    }
                    .header-mask {
                        // height: 50px;
                    }
                    .social{
                        display: flex;
                        width: 70px;
                        justify-content: space-between;
                    }
                    .sub-header{
                        background-color: #fff;
                        padding: 10px 7%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        font-size: 1.2rem;
                    }
                    @media (max-width: 700px) {
                        .header-ct{
                            top: -85px;
                        }
                        .header {
                          width: 100%;
                          flex-direction: column;
                          font-size: 0.7rem;
                          height: 85px;
                        }
                        .sub-header{
                            font-size: 0.9rem;
                        }
                      }
                `}</style>
        </div>
    )
}