import logo from "./../assets/logo1.jpg"
import { Link } from "react-router-dom";
const Simulador = () => {
  return (
    <>
    <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/Dashboard">
            <img src={logo} alt="Logo" width="100" height="100" className="d-inline-block align-text-top" />
            </Link>
            <Link to="/Register" className="btn btn-danger">salir</Link>
        </div>
    </nav>
   
   <div className="container-fluid imagen-fondo">
    <div className="row justify-content-center">
        <div className="col-4">
        <section className="simulador">
      <form className="border rounded p-4 bg-secondary">
        <div>
          <label htmlFor="nombre">Nombre Completo:</label>
          <input className="form-control"
            type="text"
            id="nombre"
            placeholder="Ingresa tu nombre completo"
          />
        </div>
        <div>
          <label htmlFor="edad">Edad:</label>
          <input className="form-control" type="number" id="edad" placeholder="Ingresa tu edad" />
        </div>
        <div>
          <label htmlFor="genero">Género:</label>
          <select id="genero" className="form-select">
            <option value="">Selecciona una opción</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div>
          <label htmlFor="ocupacion">Ocupación:</label>
          <input className="form-control"
            type="text"
            id="ocupacion"
            placeholder="Ingresa tu ocupación"
          />
        </div>
        <div>
          <label htmlFor="ingresos">Ingresos Mensuales (USD):</label>
          <input className="form-control"
            type="number"
            id="ingresos"
            placeholder="Ingresa tus ingresos mensuales"
          />
        </div>
        <div>
          <label htmlFor="monto">Monto Asegurado Deseado (USD):</label>
          <input className="form-control"
            type="number"
            id="monto"
            placeholder="Ingresa el monto asegurado deseado"
          />
        </div>
        <div>
          <label htmlFor="fuma">¿Fumas?</label>
          <select className="form-select" id="fuma">
            <option value="">Selecciona una opción</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="enfermedades">
            ¿Tienes enfermedades preexistentes?
          </label>
          <textarea
            id="enfermedades" className="form-control"
            placeholder="Escribe las enfermedades preexistentes, si las tienes"
          ></textarea>
        </div>
        <button className="btn btn-success" type="button">Calcular Cotización</button>
      </form>
    </section>
        </div>
    </div>
   </div>

    </>
  );
};

export default Simulador;