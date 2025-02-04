import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [user, setUser] = useState({});
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    axios.get('/api/user')
      .then(response => setUser(response.data))
      .catch(error => console.error('Error fetching user data', error));

    axios.get('/api/goals')
      .then(response => setGoals(response.data))
      .catch(error => console.error('Error fetching goals', error));
  }, []);

  return (
    <div>
      <h1>User Dashboard</h1>
      <h2>Weight: {user.weight} lbs</h2>
      <h2>Nutrition Goals:</h2>
      <ul>
        {goals.map(goal => (
          <li key={goal._id}>{goal.name}: {goal.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
