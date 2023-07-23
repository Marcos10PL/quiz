import { useEffect, useState } from "react";
import EndPage from "./EndPage";
import QuizApp from "./QuizApp";

const QuizPage = ({category, difficulty, setLoading, loading, name}) =>
{
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [points, setPoints] = useState(0);
    const [end, setEnd] = useState(false);

    const handleNextQuestion = answer => 
    {
        if(currentIndex === (data.length-1)) setEnd(true);
        else
        {
            if(answer == data[currentIndex].correct_answer) 
            setPoints(point => point + 1)

            setCurrentIndex(index => index + 1);
        }
    }
    
    useEffect(() =>
    {
        async function importData(category, difficulty)
        {
            setLoading(true);
            try
            {
                const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`
                const response = await fetch(url);
                const data = await response.json();
                setData(data.results); 
            }
            catch(e)
            {
                setError(true);
                // console.log(e);
            }
            setLoading(false);
        }
        if(data.length === 0) importData(category, difficulty);
    }, [])

    useEffect(() =>
    {
        if (data.length > 0) 
        {
            const answers = 
            [
                ...data[currentIndex].incorrect_answers, 
                data[currentIndex].correct_answer
            ];
            setAnswers(answers.sort(() => Math.random() - 0.5));
        }
    }, [data, currentIndex])

    return(
        end ? 
            <EndPage
                name={name}
                data={data}
                points={points}
                difficulty={difficulty}
            /> 
        :
            <div className='quizPage'> 
                {error ? <Error /> : 
                loading ? <LoadingSpinner /> : 
                data.length > 0 && 
                    <QuizApp 
                        currentIndex={currentIndex}
                        points={points}
                        data={data}
                        answers={answers}
                        handleNextQuestion={handleNextQuestion}
                    />
                }
            </div>
    )
}

const Error = () => <div className="error">Sorry, connection failure</div>;
const LoadingSpinner = () => <div className="loading-spinner"></div>;

export default QuizPage;