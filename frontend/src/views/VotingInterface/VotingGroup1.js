import React, { useState } from 'react';
import CandidateCard from '../components/CandidateCard';
import ColumnaOpcionesVotacion from '../components/ColumnaOpcionesVotacion'; // este es el componente que contiene las LISTAS, logo, miembros, etc...
import { directorioCandidates } from '../services/candidateData';
import './VotingGroup1.css'; // Conexión con los estilos CSS

const VotingGroup1 = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const handleVoteClick = (candidateId) => {
    setSelectedCandidate(candidateId);
  };

  const handleConfirm = () => {
    console.log(`Voto confirmado para el candidato ${selectedCandidate}`);
    // Aquí puedes navegar a la vista del segundo grupo de candidatos
  };

  const handleChangeDecision = () => {
    setSelectedCandidate(null);
  };

  const firstGroupCandidates = directorioCandidates.filter(candidate => candidate.id === 1)[0];

  return (
    <div>
      <h1>Interfaz de Votación - Primer Grupo</h1>
      <div className="candidate-list">
        {firstGroupCandidates.members.map((candidate) => (
          <div key={candidate.id} onClick={() => handleVoteClick(candidate.id)}>
            <CandidateCard {...candidate} />
          </div>
        ))}
      </div>
      {selectedCandidate && (
        <div className="confirmation-popup">
          <p>Su elección de Directorio ha sido LISTA {selectedCandidate}. Certifica que es la lista de tu elección y si es así, selecciona el botón 'CONFIRMAR'. Si no es así, selecciona 'CAMBIAR DECISIÓN'.</p>
          <button onClick={handleConfirm}>CONFIRMAR</button>
          <button onClick={handleChangeDecision}>CAMBIAR DECISIÓN</button>
        </div>
      )}
    </div>
  );
};

export default VotingGroup1;
