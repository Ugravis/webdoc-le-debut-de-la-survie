import { Routes, Route } from "react-router-dom"
import Home from "./routes/Home"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  )
}