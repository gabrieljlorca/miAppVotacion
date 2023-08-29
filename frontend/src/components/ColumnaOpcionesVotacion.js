import React, { useState } from 'react';
import VentanaEmergenteConfirmacion from './VentanaEmergenteConfirmacion';
import '../assets/styles/ColumnaOpcionesVotacion.css';

const ColumnaOpcionesVotacion = ({ logoUrl, titulo, integrantes }) => {
  const [ventanaEmergenteVisible, setVentanaEmergenteVisible] = useState(false);

  const abrirVentanaEmergente = () => {
    setVentanaEmergenteVisible(true);
  };

  const cerrarVentanaEmergente = () => {
    setVentanaEmergenteVisible(false);
  };

  return (
    <div className="columna-opciones">
      <img src={logoUrl} alt={titulo} className="logo-lista" />
      <h2>{titulo}</h2>
      <button onClick={abrirVentanaEmergente}>VOTAR</button>
      {integrantes.map((integrante, index) => (
        <div key={index} className="integrante">
          <img src={integrante.imageUrl} alt={integrante.name} />
          <p>{integrante.name}</p>
          <p>{integrante.role}</p>
        </div>
      ))}
      {ventanaEmergenteVisible && (
        <VentanaEmergenteConfirmacion
          titulo={titulo}
          onClose={cerrarVentanaEmergente}
        />
      )}
    </div>
  );
};

export default ColumnaOpcionesVotacion;
