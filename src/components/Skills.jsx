export default function Skills() {
  return (
    <div className="container my-5" id="habilidades">
      <h3 className="mb-4">Skills</h3>
      <p className="mb-1">HTML <i className="fa-brands fa-html5"></i></p>
      <div className="progress mb-3" style={{ height: "20px" }}>
        <div className="progress-bar" style={{ width: "90%" }}>90%</div>
      </div>
      <p className="mb-1">CSS <i className="fa-brands fa-css3"></i></p>
      <div className="progress mb-3" style={{ height: "20px" }}>
        <div className="progress-bar" style={{ width: "80%" }}>80%</div>
      </div>
      {/* Repite para JS, Java, PHP, Laravel */}
    </div>
  );
}
