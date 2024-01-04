// UserCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserCard.css';

const UserCard = ({ user, onClick, isSelected }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    // Use navigate(-1) to navigate back
    navigate(-1);
  };

  return (
    <div className={`user-card ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      <h2 className="user-name">{user.name}</h2>
      {isSelected && (
        <div className="user-details">
          <p>{`Username: ${user.username}`}</p>
          <p>{`Email: ${user.email}`}</p>
          <p>{`Phone: ${user.phone}`}</p>
          <p>{`Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</p>
          <p>{`Company: ${user.company.name}`}</p>
          <p>{`Catch Phrase: ${user.company.catchPhrase}`}</p>
          <p>{`BS: ${user.company.bs}`}</p>
        </div>
      )}

      {isSelected && (
        <div className="directory-buttons">
          <button className="directory-button" onClick={handleBackClick}>
            Back
          </button>
          <div className="timer">00:31:25</div>
          <button className="directory-button">Pause/Start</button>
          <button className="directory-button">Profile Page</button>
        </div>
      )}
    </div>
  );
};

export default UserCard;
