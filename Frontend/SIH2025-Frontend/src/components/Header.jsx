import Logo from '../assets/logo.jpg';

import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <header>
                <div className="header-logo"><Link to="/">
                    <img src={Logo} alt="Logo" height={40} />
                </Link></div>
                <div className="header-nav">
                    <div className="header-btn"><Link to="/drop-sheet">
                        Take trial
                    </Link>
                    </div>
                    <div className="header-btn"><Link to="/login">
                        Login
                    </Link></div>
                </div>
            </header >
        </>
    );
}

export default Header;