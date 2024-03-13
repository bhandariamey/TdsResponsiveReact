import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import styles from "./Navbar.module.css"

export default function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg border px-md-5 py-3">
                <div className="container-fluid">
                    
                    <a className={styles.navbarBrand} href="/">The Design Spell</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                 
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-4 px-2">
                                <a className={styles.navLink} href="/">Home</a>
                            </li>
                            <li className="nav-item mx-4 px-2">
                                <a className={styles.navLink} href="/about">About</a>
                            </li>
                            <li className="nav-item mx-4 px-2">
                                <a className={styles.navLink} href="/services">Services</a>
                            </li>
                            <li className="nav-item mx-4 px-2">
                                <a className={styles.navLink} href="/Sites">Sites</a>
                            </li>
                            <li className="nav-item mx-4 px-2">
                                <a className={styles.navLink} href="/Contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
