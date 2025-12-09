import {useState,useEffect} from "react";
export default function Experiencia() {
    //Creamos el estado vacio al inicio
    //Se guarda dentro del array
    const [proyecto,setProyecto]= useState([]);
    //se ejecuta una vez al montar
    useEffect( ()=> {
        //Hacemos fetch al archivo data.json
        fetch("/data/proyectos.json")
        .then((res)=>res.json())
        .then((data)=>setProyecto(data.proyectosDevOps));//guardamos en el estado 
    }, [])// El array vacio significa que solo se ejecuta una vez


  return (
    <div className="container my-5" id="proyectos">
      <h3 className="mb-4">Proyectos DevOps</h3>

      {/* Grid de Bootstrap */}
      <div className="row g-4">
        {proyecto.map((item) => (
          <div className="col-md-6 col-lg-4" key={item.id}>
            <div className="card shadow-sm h-100">

              {/* Título */}
              <div className="card-body">
                <h5 className="card-title fw-bold">{item.nombre}</h5>

                {/* Descripción */}
                <p className="card-text text-muted">{item.descripcion}</p>

                {/* Tecnologías */}
                <h6 className="mt-3">Tecnologías:</h6>
                <ul className="text-muted">
                  {item.tecnologias.map((tec, index) => (
                    <li key={index}>{tec}</li>
                  ))}
                </ul>

                {/* Resultados */}
                <h6 className="mt-3">Resultados:</h6>
                <ul className="text-muted">
                  {item.resultados.map((res, index) => (
                    <li key={index}>{res}</li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>

  );
}
