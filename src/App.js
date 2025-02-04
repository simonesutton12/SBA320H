import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import MealPlans from './components/MealPlans';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/meals" element={<MealPlans />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;



