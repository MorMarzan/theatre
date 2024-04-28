import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

import hamburger from '/images/icon-hamburger.svg'
import closeIcon from '/images/icon-close.svg'
import { SwitchBtn } from "./SwitchBtn"

export function AppHeader() {

    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileNavOpen, seIsMobileNavOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 730)
    const navigate = useNavigate()

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    function handleScroll() {
        setIsScrolled(window.scrollY > 0)
    }

    function handleResize() {
        setIsMobile(window.innerWidth < 730)
    }

    function toggleMobileNav() {
        seIsMobileNavOpen(currOpenStatus => !currOpenStatus)
    }

    const headerScrolledClass = isScrolled ? 'scrolled' : ''
    const mobileNavOpenClass = isMobile && isMobileNavOpen ? 'open' : ''

    return (
        <>
            <header className={"main-layout full app-header " + headerScrolledClass}>

                <div className={"backdrop " + mobileNavOpenClass} onClick={toggleMobileNav}></div>
                <div className="section-container flex">
                    <h1 className="logo" onClick={() => navigate('/')}>Theater</h1>
                    <img src={hamburger} alt="hamburger" className="hamburger" onClick={toggleMobileNav}></img>
                    <nav className={"flex app-nav " + mobileNavOpenClass}>
                        <img src={closeIcon} alt="close" className="close" onClick={toggleMobileNav}></img>
                        <NavLink to="/" onClick={toggleMobileNav}>Home</NavLink>
                        <NavLink to="/about" onClick={toggleMobileNav}>About</NavLink>
                        <SwitchBtn />
                    </nav>
                </div>

            </header>
        </>
    )
}
