import Card from "../components/Card";

const featuredPrograms = [
  {
    title: "Global STEM Accelerator",
    text: "Project-based robotics, AI labs, and coding competitions led by industry mentors.",
  },
  {
    title: "Language & Culture Hub",
    text: "Bilingual pathways, debate forums, and international exchange collaboration.",
  },
  {
    title: "Creative Leadership Lab",
    text: "Arts, entrepreneurship, and student-led initiatives that build confidence and vision.",
  },
];


const updates = [
  "New Innovation Wing opens for 2026 Spring semester.",
  "Admissions for Grade 1-11 now open with scholarship opportunities.",
  "Inter-school Science Summit hosted on March 12, 2026.",
];

const studyTimes = [
  {
    title: "Morning Session",
    time: "7:45 AM - 10:20 AM",
    age: "Starting age: 5 years old",
    subjects: "Khmer, English, Chinese",
  },
  {
    title: "Afternoon Session",
    time: "1:00 PM - 4:00 PM",
    age: "Starting age: 5 years old",
    subjects: "Khmer, English, Chinese",
  },
  {
    title: "Evening Session",
    time: "5:45 PM - 8:00 PM",
    age: "Open for all eligible students",
    subjects: "Computer, English, Chinese",
  },
];

function Home() {
  return (
    <div>
      <section className="hero">
        <div className="container hero-content">
          <p className="badge fade-in-up">Welcome to Richmond International Center</p>
          <h1 className="fade-in-up">Shaping Future Leaders Through Modern Learning</h1>
          <p className="fade-in-up">
            Richmond International Center blends academic excellence, character development, and global
            competencies to prepare students for university and beyond.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Why Families Choose Us</h2>
          <p className="section-text">
            We offer a safe, technology-driven, and values-based environment where every learner is
            supported to excel academically, socially, and personally.
          </p>
          <div className="info-banner">
            <h3>Latest Campus Updates</h3>
            <ul className="modern-list">
              {updates.map((update) => (
                <li key={update}>{update}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section page-soft-bg">
        <div className="container">
          <h2>Study Schedule</h2>
          <p className="section-text">
            Classes run from Monday to Friday with flexible sessions for different learner needs.
          </p>
          <div className="grid grid-3">
            {studyTimes.map((session) => (
              <article key={session.title} className="mini-card fade-in-up">
                <h3>{session.title}</h3>
                <p>
                  <strong>Time:</strong> {session.time}
                </p>
                <p>
                  <strong>{session.age}</strong>
                </p>
                <p>
                  <strong>Subjects:</strong> {session.subjects}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Featured Programs</h2>
          <div className="grid grid-3">
            {featuredPrograms.map((program) => (
              <Card key={program.title} title={program.title} text={program.text} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
