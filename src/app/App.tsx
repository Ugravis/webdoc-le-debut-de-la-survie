import '../style/css/app.css'
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./router"
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <BrowserRouter basename='/travaux/sae302'>
    {/* <BrowserRouter>  */}
      <div className="main-and-nav">
        <Navbar />
        <AppRoutes></AppRoutes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App