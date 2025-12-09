import { useState, useEffect } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [noticias, setNoticias] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setEmail("");
  };
  useEffect(() => {
    fetch("/data/noticias.json")
      .then((res) => res.json())
      .then((data) => setNoticias(data.noticias));
  }, []);

  return (
    <div className="newsletter-container">
      <div className="newsletter-card">
        <h2>Suscríbete a mi Newsletter</h2>
        <p>
          Recibe contenido sobre DevOps, CI/CD, Kubernetes y automatización.
        </p>

        {!enviado ? (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit">Suscribirme</button>
          </form>
        ) : (
          <p className="success">¡Gracias por suscribirte!</p>
        )}
        <div className="newsletter-news">
          <h3>Noticias DevOps</h3>

          {noticias.map((n, i) => (
            <div key={i} className="news-item">
              <strong>{n.titulo}</strong>
              <p>{n.descripcion}</p>
               <img src={n.imagen} alt={n.nombre} className="img-fluid" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
