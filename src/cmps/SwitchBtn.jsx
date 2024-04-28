import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { useEffect, useState } from "react"

export function SwitchBtn() {
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div className="switch-btn flex align-center">
            <FontAwesomeIcon icon={faSun} onClick={toggleTheme} />
            <label className="switch">
                <input
                    type="checkbox"
                    onChange={toggleTheme}
                    checked={theme === 'dark'}
                >
                </input>
                <span className="slider round"></span>
            </label>
            <FontAwesomeIcon icon={faMoon} onClick={toggleTheme} />
        </div>
    )
}
