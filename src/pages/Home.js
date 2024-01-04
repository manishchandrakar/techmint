// Home.js
import React from 'react';
import UserDirectory from '../components/UserDirectory';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="directory-container">
      <UserDirectory />
      <div className="directory-footer">
        <div className="directory-buttons">
          <button>Back</button>
          <button>Country Dropdown</button>
          <div className="timer">00:31:25</div>
          <button>Pause/Start</button>
          <button>Profile Page</button>
        </div>

        <div className="directory-details">
          <h3>Name Username | Catch phrase</h3>
          <p>Address Email | Phone</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
