const milestones = [
  { year: "1998", detail: "Richmond International Center founded with 180 students." },
  { year: "2008", detail: "Introduced advanced science laboratories and digital classrooms." },
  { year: "2016", detail: "Launched international curriculum bridge programs." },
  { year: "2024", detail: "Recognized as Regional School of Excellence in Innovation." },
];

const values = [
  "Academic integrity and discipline",
  "Respect, diversity, and inclusion",
  "Innovation through collaboration",
  "Community engagement and service",
];

function About() {
  return (
    <div className="section page-soft-bg">
      <div className="container stack-lg">
        <h1>About Richmond International Center</h1>
        <p className="section-text">
          Richmond International Center is a modern K-12 institution dedicated to shaping confident
          learners through research-based pedagogy, global outlook, and strong ethical foundations.
        </p>

        <div className="grid grid-2">
          <section className="content-block fade-in-up">
            <h2>Vision</h2>
            <p>
              To become a benchmark institution that nurtures globally responsible citizens,
              innovators, and compassionate leaders.
            </p>
          </section>

          <section className="content-block fade-in-up">
            <h2>Mission</h2>
            <p>
              To provide transformative education through academic rigor, values-driven programs,
              personalized mentoring, and future-ready skill development.
            </p>
          </section>
        </div>

        <section className="content-block fade-in-up">
          <h2>Principal's Message</h2>
          <p>
            "At Richmond International Center, each learner is seen, supported, and challenged.
            Our team is committed to building excellence in learning while cultivating empathy,
            leadership, and resilience for a rapidly evolving world."
          </p>
        </section>

        <section className="content-block fade-in-up">
          <h2>Our Journey</h2>
          <div className="timeline-grid">
            {milestones.map((item) => (
              <article key={item.year} className="timeline-card">
                <p className="timeline-year">{item.year}</p>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-block fade-in-up">
          <h2>Core Values</h2>
          <ul className="values-list modern-list">
            {values.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;
