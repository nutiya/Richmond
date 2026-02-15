const teachers = [
  {
    name: "Dr. Emma Thompson",
    subject: "Mathematics",
    exp: "12 years",
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "David Miller",
    subject: "Integrated Sciences",
    exp: "10 years",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Sophia Carter",
    subject: "English",
    exp: "8 years",
    image: "https://images.unsplash.com/photo-1541534401786-2077eed87a72?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Michael Lee",
    subject: "Computer Science",
    exp: "11 years",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Olivia Brown",
    subject: "Social Sciences",
    exp: "9 years",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Daniel Wilson",
    subject: "Creative Arts",
    exp: "7 years",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
  },
];

function Teachers() {
  return (
    <div className="section">
      <div className="container">
        <h1>Faculty Directory</h1>
        <p className="section-text">
          Our educators are experienced mentors with strong academic backgrounds and student-centered
          teaching practice.
        </p>

        <div className="grid grid-3">
          {teachers.map((teacher) => (
            <article key={teacher.name} className="teacher-card fade-in-up">
              <img className="teacher-image" src={teacher.image} alt={teacher.name} loading="lazy" />
              <div className="teacher-content">
                <h3>{teacher.name}</h3>
                <p className="teacher-subject">{teacher.subject}</p>
                <p className="teacher-exp">Experience: {teacher.exp}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Teachers;
