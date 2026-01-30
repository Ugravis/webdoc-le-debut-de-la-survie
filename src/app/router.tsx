import { Routes, Route } from "react-router-dom"
import Home from "./routes/Home"
import Chat from "./routes/game/social-life/Chat"
import CharacterChoice from "./routes/game/choice/CharacterChoice"
import CityChoice from "./routes/game/choice/CityChoice"
import StudyChoice from "./routes/game/choice/StudyChoice"
import Interviews from "./routes/game/social-life/Interviews"
import Shopping from "./routes/game/budget/Shopping"
import BudgetDocumentation from "./routes/game/budget/Documentation"
import PressReview from "./routes/game/social-life/PressReview"
import Interview from "./routes/game/school/Interview"
import Exam from "./routes/game/school/Exam"
import Conclusion from "./routes/game/conclusion/Conclusion"
import Documentation from "./routes/Documentation"
import Credits from "./routes/Credits"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/documentation" element={<Documentation />}></Route>
      <Route path="/credits" element={<Credits />}></Route>

      {/* Game */}

      <Route path="/game" element={<CharacterChoice />}></Route>

      <Route path="/game/choice/character" element={<CharacterChoice />}></Route>
      <Route path="/game/choice/city" element={<CityChoice />}></Route>
      <Route path="/game/choice/study" element={<StudyChoice />}></Route>

      <Route path="/game/budget/shopping" element={<Shopping />}></Route>
      <Route path="/game/budget/documentation" element={<BudgetDocumentation />}></Route>

      <Route path="/game/mental-health/interviews" element={<Interviews />}></Route>
      <Route path="/game/mental-health/chat" element={<Chat />}></Route>
      <Route path="/game/mental-health/press-review" element={<PressReview />}></Route>

      <Route path="/game/school/interview" element={<Interview />}></Route>
      <Route path="/game/school/exam" element={<Exam />}></Route>

      <Route path="/game/conclusion" element={<Conclusion />}></Route>
    </Routes>
  )
}