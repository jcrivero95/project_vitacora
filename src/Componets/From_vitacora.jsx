import React, { Component } from "react";
import { post } from "./post";
import alertify from "alertifyjs";

class Vitacora extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lugar: "",
      tipoActividad: "",
      fecha: "",
      hora: "",
      contenido: ""
    };
    this.change = this.change.bind(this);
    this.guardarVitacora = this.guardarVitacora.bind(this);
  }

  guardar(e) {
    e.preventDefault();
    const {
      state: { lugar, tipoActividad, fecha, hora, contenido }
    } = this;
    post("server_vitacora", [lugar, tipoActividad, fecha, hora, contenido])
      .then(message => {
        alertify.success(message);
      })
      .catch(err => {
        console.log(err);
        alertify.error("No se guardo la vitacora!");
      });
  }

  change(e) {
    const { value, name } = e.target;
    console.log(this.state);
    const state = {};
    state[name] = value;
    this.setState({
      ...this.state,
      ...state
    });
  }

  guardarVitacora(e) {
    e.preventDefault();
    this.props.guardar(this.state);
    this.setState({
      lugar: "",
      tipoActividad: "",
      fecha: "",
      hora: "",
      contenido: ""
    });
  }

  render() {
    const {
      state: { fecha, hora, contenido, lugar, tipoActividad }
    } = this;
    return (
      <div className="card">
        <h5 className="card-header "> Vitacora </h5>
        <form className="card-header">

          <div className="form-group ">
            <label> Lugar </label>
            <input
              type="text"
              className="form-control"
              id="lugar"
              name="lugar"
              value={lugar}
              placeholder="Lugar"
              onChange={this.change}
            />
          </div>

          <div className="form-group ">
            <label> Tipo de Actividad </label>
            <select
              className="form-control "
              id="tipoActividad"
              name="tipoActividad"
              value={tipoActividad}
              onChange={this.change}
            >
              <option />
              <option> 1 </option> <option> 2 </option> <option> 3 </option>
              <option> 4 </option> <option> 5 </option>
            </select>
          </div>

          <label> Fecha </label>
          <div className="input-group ">
            <input
              className="form-control"
              type="date"
              value={fecha}
              id="fecha"
              name="fecha"
              onChange={this.change}
            />
            <span className="input-group-text">
              <i class="fas fa-calendar-alt" />
            </span>
          </div>
          <label> Hora </label>

          <div className="input-group ">
            <input
              className="form-control"
              type="time"
              value={hora}
              id="hora"
              name="hora"
              onChange={this.change}
            />
            <span className="input-group-text">
              <i class="far fa-clock" />
            </span>
          </div>

          <div className="form-group ">
            <label> Contenido </label>
            <textarea
              className="form-control"
              id="contenido"
              onChange={this.change}
              rows="3"
              name="contenido"
              value={contenido}
            />
          </div>

          <div className="form-group ">
            <button onClick={this.guardar} className="btn btn-primary">
              Guardar Vitacora
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Vitacora;
