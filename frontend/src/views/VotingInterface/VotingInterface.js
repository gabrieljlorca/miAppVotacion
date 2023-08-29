import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import VotingGroup1 from './VotingGroup1'; // Importa el componente del primer grupo
import VotingGroup2 from './VotingGroup2'; // Importa el componente del segundo grupo
// import AdminInterface from './AdminInterface'; // Importa el componente de la interfaz de administrador
import './VotingInterface.css';

const VotingInterface = () => {
  return (
    <div>
      <h1>Interfaz de Votación</h1>
      <nav>
        <ul>
          <li><NavLink to="/group1">Grupo 1</NavLink></li>
          <li><NavLink to="/group2">Grupo 2</NavLink></li>
          <li><NavLink to="/admin">Administrador</NavLink></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/group1" component={VotingGroup1} />
        <Route path="/group2" component={VotingGroup2} />
        <Route path="/admin" component={AdminInterface} />
      </Switch>
    </div>
  );
};

export default VotingInterface;
