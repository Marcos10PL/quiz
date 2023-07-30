import "./App.css";
import { useState } from "react";
import StartPage from "./components/StartPage";
import QuizPage from "./components/QuizPage";

const App = () => 
{
  const [start, setStart] = useState(false);
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [category, setCategory] = useState(10);
  const [difficulty, setDifficulty] = useState("easy");

  const handleSetName = (e) => 
  {
    setName(e.target.value);
    if (e.target.value === "") setError(true);
    else setError(false);
  };

  return start ? (
    <QuizPage
      category={category}
      difficulty={difficulty}
      name={name}
    />
  ) : (
    <StartPage 
      setStart={setStart}
      category={category}
      setCategory={setCategory}
      difficulty={difficulty}
      setDifficulty={setDifficulty}
      error={error}
      name={name}
      handleSetName={handleSetName}
    />
  );
};

export default App;
