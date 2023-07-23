import './App.css';
import { useState } from 'react';
import { categories, difficultyLevels } from './data';
import QuizPage from './components/QuizPage';

const App = () => 
{
  const [start, setStart] = useState(false);
  const [loading, setLoading] = useState(false);
  const [categoryValue, setCategoryValue] = useState('10');
  const [difficulty, setDifficulty] = useState('easy');

  const [error, setError] = useState(false);
  const [name, setName] = useState('');

  const handleChangeInput = e => 
  {
    setName(e.target.value);
    if(e.target.value === '') setError(true);
    else setError(false);
  };

  return (
    start ? 
      (
      <QuizPage 
          category={categoryValue} 
          difficulty={difficulty}
          setLoading={setLoading}
          loading={loading}
          name={name != '' && name}
      />) 
    : 
    (
        <div 
          className='startPage' 
          style={error ? {padding: `30px 30px 0 30px`} : {padding: `30px`}}
        >
          <input 
            type="text" 
            id="name" 
            placeholder="Enter your name..." 
            value={name}
            onChange={handleChangeInput}
          />

          <select value={categoryValue} onChange={e => setCategoryValue(e.target.value)}>
            {categories.map(({ category, value }) => 
              <option key={category} value={value}>{category}</option>
            )}
          </select>

          <select value={difficulty} onChange={e => setDifficulty(e.target.value)}>
            {difficultyLevels.map((difficulty, index) => 
              <option key={index} value={difficulty}>{difficulty}</option>
            )}
          </select> 

          <button 
            onClick={name === '' ? handleChangeInput : () => setStart(true) }>
            START QUIZ
          </button>

          {error && <div className='error'>You must enter a name</div>}
      </div>
    ));
}

export default App;