const EndPage = ({name, data, points, difficulty}) =>
{
    return(
      <div className="end-page">
        <h2>Quiz Completed</h2>
          <ul>
            <li>Your name: {name}</li>
            <li>Score:{` ${points}/${data.length}`}</li>
            <li>Category: {data[0].category.slice(14)}</li>
            <li>Difficulty: {difficulty}</li>
            <li><a href="./">Want to play again?</a></li>
          </ul>
      </div>
    )
}

export default EndPage;