import React, { Component } from "react";
import "./App.css";
import Tecnicos from "./Componets/Form_Tecnicos";
//import Lugares from "./Componets/Form_lugares";
import { tecnicos } from "./tecnicos.json";
//import Vitacora from "./Componets/From_vitacora";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tecnicos
    };
    this.addtecnicos = this.addtecnicos.bind(this);
  }

  addtecnicos(tecnico) {
    this.setState({
      tecnicos: [...this.state.tecnicos, tecnico]
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href={<Tecnicos />}>
            Tecnicos
          </a>

          <a className="navbar-brand" href="#">
            Lugares
          </a>

          <a className="navbar-brand " href="#">
            Vitacora
          </a>
        </nav>
        <hr />
        <div className="from-group col-md-6">
          <div className="App" />
        </div>
        <div className="form-group col-md-6">
          <Tecnicos />
        
        </div>
      </div>
    );
  }
}

export default App;
