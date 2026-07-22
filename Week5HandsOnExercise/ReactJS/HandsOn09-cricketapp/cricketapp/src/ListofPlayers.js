function ListofPlayers({ players }) {
  const playersBelow70 = players.filter((player) => player.score < 70);

  return (
    <div>
      <h1>List of Players</h1>

      <ul>
        {players.map((player) => (
          <li key={player.name}>
            Mr. {player.name} <span>{player.score}</span>
          </li>
        ))}
      </ul>

      <hr />

      <h1>List of Players having Scores Less than 70</h1>

      <ul>
        {playersBelow70.map((player) => (
          <li key={player.name}>
            Mr. {player.name} <span>{player.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
