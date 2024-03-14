import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import {  Link } from "react-router-dom";
import styles from "./Navbar.module.css"

export default function Navbar() {

    return (
        <>
            <div className = {styles.navWrapper}>
                <nav className="navbar navbar-expand-lg border px-md-5 py-3">
                    <div className="container-fluid">
                        
                        <Link className={styles.navbarBrand} to="/">The Design Spell</Link>
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item mx-4 px-2">
                                    <Link className={styles.navLink} to="/">Home</Link>
                                </li>
                                <li className="nav-item mx-4 px-2">
                                    <Link className={styles.navLink} to="/about">About</Link>                            </li>
                                <li className="nav-item mx-4 px-2">
                                    <Link className={styles.navLink} to="/services">Services</Link>
                                </li>
                                <li className="nav-item mx-4 px-2">
                                    <Link className={styles.navLink} to="/Sites">Sites</Link>
                                </li>
                                <li className="nav-item mx-4 px-2">
                                    <Link className={styles.navLink} to="/Contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
           
        </>
    )
}
