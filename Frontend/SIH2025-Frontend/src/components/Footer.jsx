import { Link } from 'react-router-dom';


function Footer() {
    return (
        <>
            <footer style={{ borderRadius: '9px' }}>
                <div className="footer-content " style={{ borderRadius: '9px' }}>
                    <div>
                        <h1 style={{ color: '#03045e', fontWeight: 700, fontSize: '2.5rem' }}><Link to="/">VidyaSetu</Link></h1>
                        <p>Detect Early. Intervene Timely. Save Futures.</p>
                    </div>
                    <div className="footer-links" style={{ borderRadius: '9px' }}>
                        <h2>Quick Links</h2>
                        <div className="footer-links-div">
                            <ul className="footer-links-list">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">© 2025 VidyaSetu. All rights reserved.</div>
            </footer></>
    )
}

export default Footer;