import { Link } from "react-router-dom";

export default function SchoolInterview() {
  return (
    <section className="cont-boxed flex-col-center gap-5 page-section interview-page">
      <div className="flex-col flex-center">
        <h1>Professor interview</h1>
      </div>

      <div className="flex-col content gap-3">
        <iframe 
          src="https://www.youtube.com/embed/H8eY7qhzthk" 
          title="Testimony of Jules Sabater, teacher." 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <p className=""><b>Testimony of Jules Sabater, teacher</b></p>
        
        <p className="p2"><i>Author Framea, Testimony of Jules Sabater, teacher. 2026. <a className="video-link" href="https://youtu.be/H8eY7qhzthk">Available at this address</a>.</i></p>
        <p>The interviewee shares their experience as a professor, talking about student motivation, classroom engagement, and how students evolve throughout the program. An honest look at teaching, motivation challenges, and student development in the BUT MMI program.</p>
      </div>

      <Link to="/game/school/exam" className="btn-large">Go next</Link>
    </section>
  )
}