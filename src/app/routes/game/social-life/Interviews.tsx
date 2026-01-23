export default function Interviews() {
  return (
    <section id="student-interview-page" className="cont-boxed flex-col gap-5">
      <div className="flex-col">
        <h1>Student interview</h1>
        <p>(This interview will soon be dubbed in English).</p>
      </div>

      <iframe
        src="https://www.youtube.com/embed/9rlUhebClgg"
        title="Student interview video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </section>
  )
}