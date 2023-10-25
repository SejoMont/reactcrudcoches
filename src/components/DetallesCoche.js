import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class DetallesCoche extends Component {
    state = {
        coche: {}
    }

    findCoche = () => {
        var request = "api/coches/findcoche/" + this.props.idcoche;
        var url = Global.apiCoches + request

        axios.get(url).then(response => {
            this.setState({
                coche: response.data
            })
        })

    }

    componentDidMount = () => {
        this.findCoche();
    }

  render() {
    return (
      <div>
        {/* <h1>Detalles: {this.props.idcoche}</h1> */}
        <h1>Coche: {this.state.coche.marca} - {this.state.coche.modelo} </h1>
        <h2>Conductor: {this.state.coche.conductor}</h2>
        <img src={this.state.coche.imagen} width={"60%"}></img>
      </div>
    )
  }
}
