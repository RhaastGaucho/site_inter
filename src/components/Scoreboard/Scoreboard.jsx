import { useState } from 'react';
import interLogo from '../../assets/escudos/inter.png';
import fortalezaLogo from '../../assets/escudos/fortaleza.png';
import './Scoreboard.css';

function Scoreboard({ isAdmin = false }) {
  const [homeGoals, setHomeGoals] = useState(0);
  const [awayGoals, setAwayGoals] = useState(0);

  return (
    <div className="scoreboard">
      <div className="match">
        <div className="team">
          <img src={interLogo} alt="Internacional" className="logo" />
          <span>Internacional</span>
        </div>

        <span className="score">{homeGoals} x {awayGoals}</span>

        <div className="team">
          <img src={fortalezaLogo} alt="Fortaleza" className="logo" />
          <span>Fortaleza</span>
        </div>
      </div>

      {isAdmin && (
        <div className="controls">
          <div>
            <label>Gols Internacional: </label>
            <input
              type="number"
              value={homeGoals}
              onChange={(e) => setHomeGoals(Number(e.target.value))}
            />
          </div>
          <div>
            <label>Gols Fortaleza: </label>
            <input
              type="number"
              value={awayGoals}
              onChange={(e) => setAwayGoals(Number(e.target.value))}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Scoreboard;
