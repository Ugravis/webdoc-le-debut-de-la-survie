import { Link } from "react-router-dom";

export default function Interviews() {
  return (
    <section className="cont-boxed flex-col-center gap-5 page-section interview-page">
      <div className="flex-col flex-center">
        <h1>Student testimonies</h1>
      </div>

      <div className="flex-col content gap-3">
        <iframe 
          src="https://www.youtube.com/embed/DiulhY7fhZM" 
          title="Interview with second-year BUT MMI students." 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <p className=""><b>Interview with second-year BUT MMI students</b></p>
        
        <p className="p2"><i>Author Framea, Interview with second-year BUT MMI students. 2026. <a className="video-link" href="https://youtu.be/DiulhY7fhZM">Available at this address</a>.</i></p>
        <p>The interviewees share their experience as students, talking about their daily life, the challenges they face, and what this program has brought them. An honest look at student life, workload, and personal growth since starting the BUT MMI program.</p>
      </div>

      <Link to="/game/mental-health/chat" className="btn-large">Go next</Link>
    </section>
  )
}