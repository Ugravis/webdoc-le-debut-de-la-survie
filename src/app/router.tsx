import { Routes, Route } from "react-router-dom"
import Home from "./routes/Home"
import Chat from "./routes/game/social-life/Chat"
import CharacterChoice from "./routes/game/choice/CharacterChoice"
import CityChoice from "./routes/game/choice/CityChoice"
import StudyChoice from "./routes/game/choice/StudyChoice"
import Interviews from "./routes/game/social-life/Interviews"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>

      <Route path="/game" element={<CharacterChoice />}></Route>
      <Route path="/game/choice/character" element={<CharacterChoice />}></Route>
      <Route path="/game/choice/city" element={<CityChoice />}></Route>
      <Route path="/game/choice/study" element={<StudyChoice />}></Route>

      <Route path="/game/social-life/chat" element={<Chat />}></Route>
      <Route path="/game/social-life/interviews" element={<Interviews />}></Route>
    </Routes>
  )
}