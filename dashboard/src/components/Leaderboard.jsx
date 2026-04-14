import "./Leaderboard.css";

function Leaderboard() {
  const colleges = [
    { rank: 1, name: "ABC College", score: 95 },
    { rank: 2, name: "XYZ College", score: 90 },
    { rank: 3, name: "DEF College", score: 85 },
    { rank: 4, name: "GHI College", score: 80 },
  ];

  return (
    <div className="leaderboard-container">
      <h2>🏆 College Leaderboard</h2>

      <div className="leaderboard-card">
        {colleges.map((college) => (
          <div
            key={college.rank}
            className={`leaderboard-item ${
              college.rank === 1
                ? "gold"
                : college.rank === 2
                ? "silver"
                : college.rank === 3
                ? "bronze"
                : ""
            }`}
          >
            <span>
              {college.rank}. {college.name}
            </span>
            <span className="score">{college.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;