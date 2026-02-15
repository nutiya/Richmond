const contacts = [
  {
    title: "Admissions Office",
    detail: "admissions@richmondic.edu",
    extra: "+1 (555) 101-2233",
  },
  {
    title: "General Inquiries",
    detail: "info@richmondic.edu",
    extra: "+1 (555) 123-4567",
  },
  {
    title: "Student Support",
    detail: "support@richmondic.edu",
    extra: "+1 (555) 418-7700",
  },
];

function Contact() {
  return (
    <div className="section page-soft-bg">
      <div className="container">
        <h1>Contact Richmond International Center</h1>
        <p className="section-text">
          Reach our school departments for admissions, support, and campus visit coordination.
        </p>

        <div className="grid grid-3">
          {contacts.map((item) => (
            <article key={item.title} className="mini-card fade-in-up">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <p>{item.extra}</p>
            </article>
          ))}
        </div>

        <div className="contact-layout single">
          <aside className="contact-info fade-in-up">
            <h2>Campus Address</h2>
            <p>
              <strong>Address:</strong> 125 Learning Avenue, Springfield, USA
            </p>
            <p>
              <strong>Office Hours:</strong> Monday - Friday, 8:00 AM - 4:30 PM
            </p>
            <div className="map-wrap">
              <iframe
                title="School map"
                src="https://maps.google.com/maps?q=New%20York%20Public%20School&t=&z=13&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Contact;
