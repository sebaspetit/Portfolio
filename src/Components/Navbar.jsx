import { useState } from "react"

export function Navbar() {
    const [active, setActive] = useState(false)

    const handleClick = event => {
        setActive(current => !current)
    }
    return (
        <nav id="navbar" className={active ? 'open' : ''}>
            <div>
                <a href="/">
                    <img className="circle" alt="small logo" src="src\assets\Logos\small.png" />
                    <span>Sebastian Petit  </span> <small>  Front-End Developer</small>
                </a>
                <button onClick={handleClick} id="hamburger"> ☰</button>
            </div>
            <ul>
                <li><a href="#portfolio">PortFolio</a></li>
                <li><a href="#skillset">Skills</a></li>
                <li><a href="#experience">Aspirations</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}