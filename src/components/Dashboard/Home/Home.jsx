import React from 'react';

const Home = () => {
  return (
    <div className="home-content">
      {/* Cards Container */}
      <div className="stats-grid">
        
        {/* Card 1 */}
        <div className="stat-card">
          <span className="card-label">TOTAL USERS</span>
          <h1 className="card-value">1,284</h1>
        </div>

        {/* Card 2 */}
        <div className="stat-card">
          <span className="card-label">ACTIVE ORDERS</span>
          <h1 className="card-value">432</h1>
        </div>

        {/* Card 3 */}
        <div className="stat-card">
          <span className="card-label">STATUS</span>
          <h1 className="card-value status-active">● Active</h1>
        </div>

      </div>
    </div>
  );
};

export default Home;