

// eslint-disable-next-line react/prop-types
function Highscore({highscore}) {

    function extractNameFromEmail(email) {
        const atIndex = email.indexOf('@');
        return email.substring(0, atIndex);
    }

    return (
      <div className='highscore-cont'>
        <h1>Highscores (Top 10)</h1>
        <div className='highscore'>
           {/* eslint-disable-next-line react/prop-types */}
          {highscore && Array.isArray(highscore) && highscore.map((user, ind) => (
            <p key={ind}>{extractNameFromEmail(user.email)} - {user.score}</p>
          ))}
        </div>
      </div>
    );
  }

export default Highscore