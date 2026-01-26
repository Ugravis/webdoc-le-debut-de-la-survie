import { Link } from "react-router-dom"

export default function BudgetDoc() {
  return (
    <section className="cont-boxed" id="budget-doc-page">
      <Link to="/game/mental-health/interviews" className="btn-small">Next, to mental-health / interview</Link>
    </section>
  )
}