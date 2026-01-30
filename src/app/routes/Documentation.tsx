import { Link } from "react-router-dom";

export default function Documentation() {
  return(
    <section className="cont-boxed page-section flex-col gap-8" id="budget-doc-page">

      <span className="separator"></span>
      <p className="text-center">This section brings together the documentation seen in the interactive game, so that you can consult it without necessarily going through all the pages of the experience. You will also find some additional videos on this page.</p>
      <span className="separator"></span>

      <h1 className="text-center">Additional videos</h1>

      <div className="flex gap-3">
        <div className="flex-col video-doc gap-1">
          <iframe 
            src="https://www.youtube.com/embed/DiulhY7fhZM" 
            title="Interview with second-year BUT MMI students." 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className=""><b>Interview with second-year BUT MMI students</b></p>
          <p className="p2"><i>Author Framea, Interview with second-year BUT MMI students. 2026. <a className="video-link" href="https://youtu.be/DiulhY7fhZM">Available at this address</a>.</i></p>
        </div>

        <div className="flex-col video-doc gap-1">
          <iframe 
            src="https://www.youtube.com/embed/H8eY7qhzthk" 
            title="Testimony of Jules Sabater, teacher." 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className=""><b>Testimony of Jules Sabater, teacher</b></p>
          <p className="p2"><i>Author Framea, Testimony of Jules Sabater, teacher. 2026. <a className="video-link" href="https://youtu.be/H8eY7qhzthk">Available at this address</a>.</i></p>
        </div>
      </div>

      <div className="flex gap-3">
        <div className="flex-col video-doc gap-1">
          <iframe 
            src="https://www.youtube.com/embed/jHM-vskqN-k" 
            title="Blog about young student’s evening." 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className=""><b>Blog about young student’s evening</b></p>
          <p className="p2"><i>Author Framea, Blog about young student’s evening. 2026. <a className="video-link" href="https://youtu.be/jHM-vskqN-k">Available at this address</a>.</i></p>
        </div>

        <div className="flex-col video-doc gap-1">
          <iframe 
            src="https://www.youtube.com/embed/4Nxj7Yn7PXI" 
            title="Hamza's student testimony." 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className=""><b>Hamza's student testimony</b></p>
          <p className="p2"><i>Author Framea, Hamza's student testimony. 2026. <a className="video-link" href="https://youtu.be/4Nxj7Yn7PXI">Available at this address</a>.</i></p>
        </div>
      </div>

      {/*  */}

      <span className="separator"></span>

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
          </div>
        </div>
      </div>

      <span className="separator"></span>

      <div className="press-review-page flex-col gap-4">
        <h1 className="hHuge flex-center">Newspaper</h1>

        <div className="flex-col-center gap-5 paper">
          <div className="flex-col-center">
            <h1>Why has it become so difficult to be a student?</h1>
          </div>

          <p>Entering higher education has long been seen as a period of emancipation and openness. However, a review of recent surveys in the specialist press reveals that this idealised image is giving way to a much bleaker reality. From Vie-Publique.fr to L’Étudiant, the headlines all point to the same conclusion: <b>students' mental health is deteriorating</b> in a structural way, marking a clear break with the experience of previous generations.</p>

          <div className="flex main gap-5">
            <div className="flex-col gap-2">
              <h3>1. Mental health</h3>
              <p>According to a study by the OVE (Observatoire de la Vie Étudiante) reported by the media outlet L’Étudiant, the situation is considered <b>‘worrying’</b>. Unlike in the 1980s and 1990s, when stress was mainly linked to exam periods, it is now chronic. The figures show an explosion in <b>anxiety and depressive episodes</b>.</p>
            </div>

            <img src={`${import.meta.env.BASE_URL}images/illustrations/students-back.jpg`} alt="" />

            <div className="flex-col gap-2">
              <h3>2. Sleep</h3>
              <p>One of the most concrete signs of this deterioration is <b>physical exhaustion</b>. A report by L'Étudiant gives a voice to young people whose nights are fragmented: some say they wake up ‘five to six times a night’. This lack of rest is not only due to poor lifestyle choices, but also to an excessive mental burden (academic success, financial worries, loneliness). Without restorative sleep, adapting to university life becomes an almost impossible task.</p>
            </div>
          </div>

          <div className="flex gap-5 second">
            <div className="flex-col gap-2">
              <h3>3. Silence and taboos</h3>
              <p>Despite the freedom of expression on social media, psychological distress remains paradoxically <b>‘too taboo’</b> among students. Admitting that one is unable to adapt is often seen as a personal failure. This pressure is exacerbated by a <b>lack of resources</b>: when one is already struggling financially, consulting a specialist becomes a luxury. As a result, many students retreat into dangerous <b>isolation</b>.</p>
              <p>In fact, to illustrate this problem, we tried to interview psychologists for this project: they are so overwhelmed that it was impossible to get an appointment. This clearly shows the extent of the crisis and the real difficulty for students to get help quickly.</p>
            </div>

            <div className="flex-col gap-2">
              <h3>4. The need to learn how to ‘manage’ the crisis</h3>
              <p>Faced with this situation, the press is offering more and more advice on <b>how to ‘tame’ stress</b>. But this raises a fundamental question: is it up to students to adapt to an increasingly demanding system, or is it up to the system to better protect the health of its young people? The transition from secondary school to independence has become so abrupt that it now requires psychological ‘toolkits’ to prevent students from sinking.</p>
            </div>
          </div>

          <div className="width-max links">
            <a target="_blank" href="https://www.letudiant.fr/" className="p2">L'Etudiant</a>
          </div>
        </div>

        <div className="conclu flex-col gap-4">
          <p>In short, today's students are not only struggling to earn their degrees, but also to maintain their mental well-being. The deterioration observed compared to earlier times reflects a society where precariousness and uncertainty have replaced carefreeness. Adapting is no longer simply a rite of passage into adulthood; it has become a daily challenge of resilience.</p>
        </div>

        <div className="flex-center">
          <Link to="/home" className="btn-large">Retour à l'accueil</Link>
        </div>
      </div>

    </section>
  )
}