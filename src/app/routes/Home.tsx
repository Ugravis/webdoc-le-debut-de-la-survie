import { Link } from "react-router-dom";

export default function Home() {

  return (
    <div className="flex-col-center gap-7 flex-grow cont-boxed" id="home-page">
      <h1 className="hHuge">Where Survival Begins</h1>

      <div className="flex-col-center gap-3">
        <p className="text-center intro-txt">In this interactive web documentary, you take on the role of a student discovering post-secondary life. Through a series of choices, you will manage your budget, well-being, and academic performance.</p>
        <p className="text-center intro-txt">The experience combines storytelling, interactive elements, and informative content to offer a realistic insight into student life.</p>
      </div>

      <div className="flex-col-center gap-3">
        <Link to="/game/choice/character" className="btn-large">Start the experience</Link>
        <Link to="/#" className="blue-link">Or access the documentation only</Link>
      </div>
    </div>
  )
}