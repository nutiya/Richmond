import Card from "../components/Card";

const bookCourses = [
  {
    title: "ABC Book",
    subtitle: "Morning / Afternoon",
    text: "Starter English course for young learners. Focuses on alphabet, sounds, and basic words.",
  },
  {
    title: "Up and Away I",
    subtitle: "Morning / Afternoon / Evening",
    text: "Foundation-level English course for speaking and reading with everyday classroom topics.",
  },
  {
    title: "Up and Away II",
    subtitle: "Morning / Afternoon / Evening",
    text: "Next-step English course with expanded grammar, vocabulary, and conversation practice.",
  },
  {
    title: "Family and Friends I",
    subtitle: "Morning / Afternoon / Evening",
    text: "Builds listening and reading confidence through structured lessons and interactive tasks.",
  },
  {
    title: "Family and Friends II",
    subtitle: "Morning / Afternoon / Evening",
    text: "Strengthens communication skills with new sentence patterns and integrated workbook practice.",
  },
  {
    title: "Family and Friends III",
    subtitle: "Evening",
    text: "Intermediate development for students ready for stronger writing, speaking, and comprehension.",
  },
  {
    title: "New Headway Beginner",
    subtitle: "Evening",
    text: "Adult and teen-friendly beginner pathway focused on practical daily English use.",
  },
  {
    title: "New Headway Elementary",
    subtitle: "Evening",
    text: "Develops grammar control and communicative confidence with real-world learning contexts.",
  },
  {
    title: "New Headway Pre-Intermediate",
    subtitle: "Evening",
    text: "Prepares learners for higher fluency through integrated speaking, writing, and reading tasks.",
  },
];

function Courses() {
  return (
    <div className="section page-soft-bg">
      <div className="container">
        <h1>Book-Based Courses</h1>
        <p className="section-text">
          Each English book is treated as one complete course. Students are placed by level and study
          session for the best learning path.
        </p>

        <div className="chip-row">
          <span className="chip">Morning: 7:45 AM - 10:20 AM</span>
          <span className="chip">Afternoon: 1:00 PM - 4:00 PM</span>
          <span className="chip">Evening: 5:45 PM - 8:00 PM</span>
          <span className="chip">Study Days: Monday - Friday</span>
        </div>

        <div className="grid grid-3">
          {bookCourses.map((course) => (
            <Card key={course.title} title={course.title} subtitle={course.subtitle} text={course.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
