import React from 'react';

const CandidateCard = ({ id, name, logo, members }) => {
  return (
    <div className="candidate-card">
      <img src={logo} alt={`${name} logo`} />
      <h2>{name}</h2>
      {/* Aquí irá el botón para votar (a implementar más adelante) */}
      <div className="team-members">
        {members.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.photo} alt={`${member.name}`} />
            <p>{member.name}</p>
            <small>{member.role}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidateCard;
