import "./../assets/home.css";
import gente from "./../assets/img/gente.png";
import insolvencia from "./../assets/img/insolvencia.png";
import empleados from "./../assets/img/empleados.png";
import historia from "./../assets/img/historial-de-transacciones.png";
import estadisticas from "./../assets/img/estadisticas.png";
import logo from "./../assets/logo1.jpg"
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
   <>
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
            <img src={logo} alt="Logo" width="100" height="100" className="d-inline-block align-text-top" />
            </a>
            <button className="btn btn-danger">salir</button>
        </div>
    </nav>
    <div className="contenedorTiger">
       {/* <img  className="tiger" src="../public/img/tiger_tall-removebg-preview.png" alt=""> --> */}
      </div>
    <div className="links imagen-fondo2">
        <ul className="links__list" style={{"--item-total":"3"}}>
          <li className="links__item" style={{"--item-count":"1"}}>
            <Link className="links__link" to="https://www.sebandainsurance.com/es/blog/que-cubre-un-seguro-de-auto-7-tipos-de-coberturas-que-debe-conocer/">
                <img className="links__icon" src={insolvencia} alt=""/>
                <span className="links__text">Seguro Todo Riesgo</span>
            </Link>
          </li>
          <li className="links__item" style={{"--item-count":"2"}}>
            <Link className="links__link" to="/Register">
                <img className="links__icon" src={gente} alt=""/>
                <span className="links__text">Registrar</span></Link>
          </li>
          <li className="links__item" style={{"--item-count":"3"}}>
            <Link className="links__link" to="/Simulador">
                <img className="links__icon" src={empleados} alt=""/>
                <span className="links__text">Simulador</span></Link>
          </li>
        </ul>
      </div>
   </>
  )
}
