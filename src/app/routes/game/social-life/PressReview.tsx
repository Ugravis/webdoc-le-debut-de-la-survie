import { Link } from "react-router-dom";

export default function PressReview() {
  return (
    <section className="cont-boxed page-section flex-col gap-5 press-review-page">
      <div className="flex-col-center gap-5 paper">
        <div className="flex-col-center">
          <h1 className="hHuge">Newspaper</h1>
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
      
        <div className="flex-center">
          <Link to="/game/school/interview" className="btn-large">Go next</Link>
        </div>
      </div>
    </section>
  )
}