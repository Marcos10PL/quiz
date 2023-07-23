const EndPage = ({name, data, points, difficulty}) =>
{
    return(
      <div className="endPage">
        <h2>Quiz Completed</h2>
          <p>Your name: {name}</p>
          <p>Score: 
            {` ${points}/${data.length} 
            (${(points / data.length) * 100}%)`}
          </p>
          <p>Category: {data[0].category.slice(14)}</p>
          <p>Difficulty: {difficulty}</p>
          <a href="./">Want to play again?</a>
      </div>
    )
}

export default EndPage;