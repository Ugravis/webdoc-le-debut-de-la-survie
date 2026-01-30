import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <div className="flex-col-center gap-2" id="footer">
      <Link to="/home" className="link h-logo">Framea</Link>
      
      <div className="flex gap-1">
        <p>WS302 - Webdocumentaire • </p>
        <Link to="/credits" className="link">Credits and acknowledgements</Link>
      </div>

      <p className="p2">Ulysse Pennetier, Valentin Babic, Hafsa Senini, Sarah Perreaut</p>
    </div>
  )
}