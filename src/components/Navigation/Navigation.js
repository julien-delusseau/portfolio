import './Navigation.css';
import {Link, useLocation} from 'react-router-dom';

export const Navigation = () => {
    const {pathname} = useLocation();

    return (
        <section id="navigation">
            <Link to="/" className={pathname === '/' ? 'nav-icon active' : 'nav-icon'}>
                <i className="fa-solid fa-house-user"></i>
                <div className="nav-label">
                    <h4>acceuil</h4>
                </div>
            </Link>
            <Link to="/about" className={pathname === '/about' ? 'nav-icon active' : 'nav-icon'}>
                <i className="fa-solid fa-user"></i>
                <div className="nav-label">
                    <h4>à propos</h4>
                </div>
            </Link>
            <Link to="/portfolio" className={pathname === '/portfolio' ? 'nav-icon active' : 'nav-icon'}>
                <i className="fa-solid fa-suitcase"></i>
                <div className="nav-label">
                    <h4>portfolio</h4>
                </div>
            </Link>
            <Link to="/contact" className={pathname === '/contact' ? 'nav-icon active' : 'nav-icon'}>
                <i className="fa-solid fa-envelope-open"></i>
                <div className="nav-label">
                    <h4>contact</h4>
                </div>
            </Link>
        </section>
    );
};