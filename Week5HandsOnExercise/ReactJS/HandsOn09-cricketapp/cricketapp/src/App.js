import ListofPlayers from "./ListofPlayers";
import {
  OddPlayers,
  EvenPlayers,
  IndianPlayers,
  ListofIndianPlayers,
} from "./IndianPlayers";

function App() {
  const players = [
    { name: "Jack", score: 50 },
    { name: "Michael", score: 70 },
    { name: "John", score: 40 },
    { name: "Ann", score: 61 },
    { name: "Elisabeth", score: 61 },
    { name: "Sachin", score: 95 },
    { name: "Dhoni", score: 100 },
    { name: "Virat", score: 84 },
    { name: "Jadeja", score: 64 },
    { name: "Raina", score: 75 },
    { name: "Rohit", score: 80 },
  ];

  const IndianTeam = ["Sachin", "Dhoni", "Virat", "Rohit", "Yuvraj", "Raina"];

  const flag = true; // Change this flag to false to render the Indian Players components

  if (flag) {
    return (
      <div>
        <ListofPlayers players={players} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Indian Team</h1>

        <OddPlayers team={IndianTeam} />

        <hr />

        <EvenPlayers team={IndianTeam} />

        <hr />

        <h1>List of Indian Players Merged:</h1>

        <ListofIndianPlayers IndianPlayers={IndianPlayers} />
      </div>
    );
  }
}

export default App;
