import { useTheme } from "../../../hooks/useTheme"
import { Link } from "react-router-dom";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  console.log("theme:", theme)

  return (
    <nav className="cont-full">
      <div className="flex-between mh-3">
        <Link to="/home" className="h-logo">Framea</Link>

        <div className="flex gap-4">
          <Link to="/home">Home</Link>
          <Link to="/game">Experience</Link>
          <Link to="/documentation">Documentation</Link>
          {/* <Link to="/about">About</Link> */}

          <button className="theme-toggle flex-center" aria-label="Changer le thème" onClick={toggleTheme}>
            <span className="material-icons icon-p1">
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
          </button>
        </div>
      </div>
    </nav>
  )
}