import { Link } from "react-router-dom";

export default function Home() {

  return (
    <div className="flex-col-center gap-7 flex-grow cont-boxed" id="home-page">
      <h1 className="hHuge">Where Survival Begins</h1>

      <div className="flex-col-center gap-3">
        <p className="text-center intro-txt">Embody the student of your choice and chart your own course. From choosing your curriculum to your host city, every decision matters.</p>
        <p className="text-center intro-txt">From the start, manage your scholarship and decide: are you going to take a student job, at the risk of sacrificing your free time and mental health? Your choices will directly impact your morale and your wallet.</p>
        <p className="text-center intro-txt">Will you manage to balance studies, budget and well-being? It’s up to you: make the right choices to reach the diploma without finishing in the red!</p>
      </div>

      <div className="flex-col-center gap-3">
        <Link to="/game/choice/character" className="btn-large">Start the experience</Link>
        <Link to="/documentation" className="blue-link">Or access the documentation only</Link>
      </div>
    </div>
  )
}