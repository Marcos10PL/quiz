const QuizApp = ({currentIndex, points, data, answers, handleNextQuestion}) =>
{
    return(
        <>
            <div className="stats">
                <div>Question {currentIndex + 1} of {data.length}</div>
                <div>Score: {points}</div>
            </div>

            <h3 dangerouslySetInnerHTML=
                {{ __html: data[currentIndex].question }}>
            </h3>

            {answers.map((answer, index) => 
                <button 
                    key={index} 
                    dangerouslySetInnerHTML={{ __html: answer }}
                    onClick={() => handleNextQuestion(answer)}>
                </button> 
            )}
        </>
    )
}

export default QuizApp;