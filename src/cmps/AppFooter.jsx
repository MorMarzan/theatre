import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'



export function AppFooter() {

    const navigate = useNavigate()

    return (
        <footer className="main-layout full app-footer">
            <div className="section-container">
                <div className="nav">
                    <h1 className="logo" onClick={() => navigate('/')}>Theater</h1>
                    <nav className="app-nav">
                        <NavLink to="/" >Home</NavLink>
                        <NavLink to="/about" >About</NavLink>
                    </nav>
                </div>
                <div className="social">
                    <div className="icons-container">
                        <a href="https://github.com/MorMarzan"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://www.linkedin.com/in/mor-marzan-26b48621a/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a href="mailto:mormarzan@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
                    </div>
                    <p className="opacFont">© Mor Marzan</p>
                </div>
            </div>
        </footer>
    )
}
