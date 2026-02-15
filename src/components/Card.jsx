function Card({ title, subtitle, text, image }) {
  return (
    <article className="card fade-in-up">
      {image ? (
        <img className="card-image" src={image} alt={title} loading="lazy" />
      ) : null}
      <div className="card-content">
        <h3>{title}</h3>
        {subtitle ? <p className="card-subtitle">{subtitle}</p> : null}
        {text ? <p>{text}</p> : null}
      </div>
    </article>
  );
}

export default Card;
