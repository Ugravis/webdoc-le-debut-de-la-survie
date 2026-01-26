import { Link } from "react-router-dom";

export default function SchoolInterview() {
  return (
    <section className="cont-boxed" id="interview-page">
      <Link to="/game/school/exam" className="btn-small">Next, to school / exam</Link>
    </section>
  )
}