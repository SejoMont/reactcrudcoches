import React, { Component } from "react";
import { Routes, Route, BrowserRouter, useParams } from "react-router-dom";
import HomeCoches from "./HomeCoches";
import MenuCoches from "./MenuCoches";
import CrearCoche from "./CrearCoche";
import DetallesCoche from "./DetallesCoche";
import BorrarCoche from "./BorrarCoche";
import EditarCoche from "./EditarCoche";

export default class Router extends Component {
  render() {
    function DetallesCocheElement() {
      var { idcoche } = useParams();

      return <DetallesCoche idcoche={idcoche} />;
    }

    function BorrarCocheElement() {
      var { idcoche } = useParams();

      return <BorrarCoche idcoche={idcoche} />;
    }

    function EditarCocheElement() {
      var { idcoche } = useParams();

      return <EditarCoche idcoche={idcoche} />;
    }

    return (
      <BrowserRouter>
        <MenuCoches />
        <Routes>
          <Route path="/" element={<HomeCoches />}></Route>
          <Route path="/create" element={<CrearCoche />}></Route>
          <Route path="/detalles/:idcoche" element={<DetallesCocheElement />}></Route>
          <Route path="/borrar/:idcoche" element={<BorrarCocheElement />}></Route>
          <Route path="/editar/:idcoche" element={<EditarCocheElement />}></Route>
          {/* <Route path="*" element={</>}></Route> */}
        </Routes>
      </BrowserRouter>
    );
  }
}
