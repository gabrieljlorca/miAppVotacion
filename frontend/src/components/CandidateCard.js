import React from 'react';

const CandidateCard = ({ name, logo, members }) => {
  return (
    <div className="candidate-card">
      <img src={logo} alt={`${name} logo`} />
      <h2>{name}</h2>
      <div className="team-members">
        {members.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.imageUrl} alt={member.name} />
            <p>{member.name}</p>
            <small>{member.role}</small>
          </div>
        ))}
      </div>
      {/* Aquí irá el botón para votar (a implementar más adelante) */}
    </div>
  );
};

export default CandidateCard;
