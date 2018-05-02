import React, { Component } from "react";
import { post } from "./post";
import alertify from "alertifyjs";

class Lugares extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: ""
    };
    this.guardarPersona = this.guardarPersona.bind(this);
    this.change = this.change.bind(this);
    this.guardar = this.guardar.bind(this);
  }

  guardar(e) {
    e.preventDefault();
    const {
      state: { nombre }
    } = this;
    post("server_lugar", [nombre])
      .then(message => {
        alertify.success(message);
      })
      .catch(err => {
        console.log(err);
        alertify.error("No se guardo el lugar!");
      });
  }

  guardarPersona(e) {
    e.preventDefault();
    this.props.guardar(this.state);
    this.setState({
      nombre: ""
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
  render() {
    const {
      state: { nombre }
    } = this;
    return (
      <div className="card">
        <h5 className="card-header "> Lugares </h5>
        <form className="card-header">
          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              className="form-control input-sm"
              id="nombre"
              placeholder="Nombre del lugar"
              name="nombre"
              onChange={this.change}
              value={nombre}
            />
          </div>

          <div className="form-group col-md-2">
            <button onClick={this.guardar} className="btn btn-primary">
              Guardar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Lugares;
