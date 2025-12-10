export default function Estudios() {
  return (
    <div className="container my-5" id="estudios">
      <h3 className="mb-4">Estudios</h3>
      <div className="border-start border-3 ps-3">
        <div className="mb-4">
          <div className="d-flex align-items-center mb-2">
            <i className="bi bi-mortarboard-fill text-light me-3" style={{ fontSize: "1.5rem" }}></i>
            <button className="btn btn-link text-decoration-none fw-bold" data-bs-toggle="collapse" data-bs-target="#est1">
              DAW - Instituto X (2022)
            </button>
          </div>
          <div id="est1" className="collapse">
            <ul className="text-muted">
              <li>Desarrollo de aplicaciones web</li>
              <li>HTML, CSS, JavaScript, PHP</li>
              <li>Proyecto final con Laravel</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
