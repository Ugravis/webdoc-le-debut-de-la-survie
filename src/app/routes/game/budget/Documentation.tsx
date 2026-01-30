import { Link } from "react-router-dom"

export default function BudgetDoc() {
  return (
    <section className="cont-boxed page-section flex-col gap-8" id="budget-doc-page">
      <h1 className="text-center">Learn more about student expenses €</h1>

      <div className="flex-col gap-4">
        <div className="flex gap-4 text-group">
          
          <div className="flex-col-between gap-3">
            <div className="flex-col gap-3">
              <h3 className="text-center">The housing</h3>
              <p>Housing has become the biggest obstacle to students' peace of mind. It is no longer just an expense, it is a heavy burden at the end of each month. <b>Between 2018 and 2023, rents rose by 9.6%</b>. Today, students spend an average of <b>46%</b> of their income on rent. This overwhelming share of their budget leaves little room for other essential needs such as healthcare or leisure activities.</p>
            </div>

            <div
              className="img-article"
              style={{backgroundImage: `url(${import.meta.env.BASE_URL}images/illustrations/housing.jpg)`}}
            ></div>

            <div className="width-max links flex gap-2 p2">
              <a target="_blank" href="https://unef.fr/wp-content/uploads/2025/08/Enquete-UNEF-2025.pdf">UNEF 2025</a>
            </div>
          </div>

          <div className="flex-col-between gap-3">
            <div className="flex-col gap-3">
              <h3 className="text-center">Surviving on next to nothing</h3>
              <p>Once the rent has been paid, the situation becomes critical. According to a study by the Student Union, a third of students have to live on less than <b>€50</b> per month. This amount is supposed to cover everything else: food, hygiene, transport and unexpected expenses. For many, the solution is a CROUS grant, but not everyone is eligible. Eligibility depends on three main criteria: parental income, the number of dependent siblings, and the distance between the place of study and the family home.</p>
              <ul className="flex-col">
                <li>- The amounts are paid over <b>10 months</b>.</li>
                <li>- They range from approximately €145 per month (step 0a) to €633 per month (step 7).</li>
                <li>- For many, even the highest step is not enough to cover the cost of living and <b>inflation</b>.</li>
              </ul>
            </div>

            <div className="width-max links flex gap-1 p2">
              <a target="_blank" href="https://www.letudiant.fr/lifestyle/aides-financieres/un-tiers-des-etudiants-vit-avec-moins-de-50-euros-par-mois-selon-une-etude-de-lunion-etudiante.html">L'Etudiant 2026, </a>
              <a target="_blank" href="https://www.letudiant.fr/lifestyle/aides-financieres/a-partir-de-quels-revenus-les-etudiants-peuvent-toucher-une-bourse-crous.html">L'Etudiant 2025</a>
            </div>
          </div>
        </div>

        <div className="flex gap-4 text-group">
          <div className="flex-col-between gap-3">
            <div className="flex-col gap-3">
              <h3 className="text-center">Shopping</h3>
              <p>In supermarket aisles, the notion of pleasure takes a back seat to budgetary constraints. Shopping has become a <b>surgical selection</b> process where every penny counts.</p>
              <ul className="flex-col">
                <li>- <b>73%</b> of students turn to ‘budget’ products to make ends meet.</li>
                <li>- Only <b>27%</b> retain the freedom to choose traditional brands, often perceived as an unaffordable luxury.</li>
              </ul>
            </div>

            <div className="width-max links flex gap-1 p2">
              <a target="_blank" href="https://www.fage.org/news/actualites-fage-federations/2025-02-19,barometre_de_la_precarite_etudiante_fage.htm">Fage 2025</a>
            </div>
          </div>

          <div className="flex-col-between gap-3">
            <div className="flex-col gap-3">
              <h3 className="text-center">The deterioration of nutrition and health</h3>
              <p>The most worrying factor remains the deterioration of nutrition. When the budget no longer covers needs, deprivation becomes an adjustment variable. Around <b>20% of students do not eat enough</b>.</p>
              <ul className="flex-col">
                <li>- <b>More than half</b> of students (51%) say they reduce the quantity or quality of their meals.</li>
                <li>- Even more seriously, <b>36%</b> of them admit to skipping meals out of financial necessity.</li>
                <li>- To compensate, many rely on <b>charities</b>, but these are struggling as some are losing their subsidies, which reduces the number of distributions.</li>
              </ul>
            </div>

            <div className="width-max links flex gap-1 p2">
              <a target="_blank" href="https://www.letudiant.fr/lifestyle/aides-financieres/un-tiers-des-etudiants-vit-avec-moins-de-50-euros-par-mois-selon-une-etude-de-lunion-etudiante.html">L'Etudiant 2026, </a>
              <a target="_blank" href="https://www.letudiant.fr/lifestyle/aides-financieres/on-va-laisser-des-etudiants-sur-le-carreau-des-associations-daide-alimentaire-perdent-leur-subvention.html">L'Etudiant 2026</a>
            </div>
          </div>
        </div>

        <div className="flex gap-4 text-group">
          <div className="flex-col-between gap-3 pink-tax">
            <div className="flex-col-center gap-3">
              <h3 className="text-center">The ‘Pink Tax’</h3>
              <p>For female students, budgeting is even more difficult due to the pink tax. This phenomenon refers to the <b>extra cost applied to everyday consumer products intended for women</b> (razors, shower gels, skincare products), which are often more expensive than their male counterparts. Added to this is the cost of sanitary protection, a mandatory monthly expense that exacerbates financial insecurity and forces difficult choices.</p>
            </div>

            <div className="width-max links flex gap-1 p2">
              <a target="_blank" href="https://www.radiofrance.fr/franceinter/podcasts/esprit-pratique/esprit-pratique-du-vendredi-08-mars-2024-6636427">France Inter 2024</a>
            </div>
          </div>

          <div className="flex-col-center gap-3">
            <h3 className="text-center">So...</h3>

            <p className="text-center">Being a student today often means making <b>daily sacrifices</b>. Between rising rents and declining support for associations, academic success is often hampered by the urgency of survival.</p>

            <div className="flex-center">
              <Link to="/game/mental-health/interviews" className="btn-large">Go next</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}