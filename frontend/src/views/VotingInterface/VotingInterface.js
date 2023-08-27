import React, { useState } from 'react';
import CandidateCard from '../components/CandidateCard';
import { directorioCandidates } from './services/candidateData';

const VotingInterface = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const handleVoteClick = (candidateId) => {
    setSelectedCandidate(candidateId);
  };

  const handleConfirm = () => {
    console.log(`Voto confirmado para el candidato ${selectedCandidate}`);
    setSelectedCandidate(null);
  };

  const handleChangeDecision = () => {
    setSelectedCandidate(null);
  };

  return (
    <div>
      <h1>Interfaz de Votación</h1>
      <div className="candidate-list">
        {directorioCandidates.map((candidate) => (
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

export default VotingInterface;
