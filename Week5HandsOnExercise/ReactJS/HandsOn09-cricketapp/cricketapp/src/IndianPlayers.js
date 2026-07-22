export function OddPlayers({ team }) {
  const [first, , third, , fifth] = team;

  return (
    <div>
      <h1>Odd Players</h1>

      <ul>
        <li>First : {first}</li>
        <li>Third : {third}</li>
        <li>Fifth : {fifth}</li>
      </ul>
    </div>
  );
}

export function EvenPlayers({ team }) {
  const [, second, , fourth, , sixth] = team;

  return (
    <div>
      <h1>Even Players</h1>

      <ul>
        <li>Second : {second}</li>
        <li>Fourth : {fourth}</li>
        <li>Sixth : {sixth}</li>
      </ul>
    </div>
  );
}

const T20Players = ["First Player", "Second Player", "Third Player"];

const RanjiTrophyPlayers = ["Fourth Player", "Fifth Player", "Sixth Player"];

export const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

export function ListofIndianPlayers({ IndianPlayers }) {
  return (
    <ul>
      {IndianPlayers.map((player) => (
        <li key={player}>Mr. {player}</li>
      ))}
    </ul>
  );
}
