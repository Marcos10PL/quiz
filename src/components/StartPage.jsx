import { Error } from "./Others";
import {difficultyLevels, categories} from '../data';

const StartPage = ({setStart, category, setCategory, difficulty, setDifficulty, error, name, handleSetName}) =>
{
  return (
    <div
      className="start-page"
      style={error ? { padding: `30px 30px 0 30px` } : { padding: `30px` }}
    >
      <input
        type="text"
        id="name"
        placeholder="Enter your name..."
        value={name}
        onChange={handleSetName}
      />

      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        {difficultyLevels.map((difficulty, index) => 
          <option key={index} value={difficulty}>{difficulty}</option>
        )}
      </select>

      <select 
        value={category} 
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map(({ category, value }, index) => 
          <option key={index} value={value}>{category}</option>
        )} 
      </select>

      <button onClick={name === "" ? handleSetName : () => setStart(true)}>
        START QUIZ
      </button>  

      {error && <Error msg={"You must enter a name"} />}
    </div>
  );
}

export default StartPage;