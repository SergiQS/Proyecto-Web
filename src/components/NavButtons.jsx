export default function NavButtons() {
  return (
    <div className="container my-5 text-center">
      <div className="row justify-content-center mb-4">
        <div className="col-4 d-flex justify-content-center">
          <a href="#experiencia" className="btn btn-outline rounded-circle d-flex align-items-center justify-content-center" style={{ width: "100px", height: "100px" }}>
            Exp
          </a>
        </div>
        <div className="col-4 d-flex justify-content-center">
          <a href="#estudios" className="btn btn-outline rounded-circle d-flex align-items-center justify-content-center" style={{ width: "100px", height: "100px" }}>
            Studies
          </a>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-4 d-flex justify-content-center">
          <a href="#habilidades" className="btn btn-outline rounded-circle d-flex align-items-center justify-content-center" style={{ width: "100px", height: "100px" }}>
            Skills
          </a>
        </div>
      </div>
    </div>
  );
}
