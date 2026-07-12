import office1 from "./office1.jpg";
import office2 from "./office2.jpg";
import office3 from "./office3.jpg";
import "./App.css";

function App() {
  const heading = "Office Space";

  const offices = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
      Image: office1,
    },
    {
      Name: "Regus",
      Rent: 75000,
      Address: "Bangalore",
      Image: office2,
    },
    {
      Name: "WeWork",
      Rent: 45000,
      Address: "Hyderabad",
      Image: office3,
    },
  ];

  return (
    <div className="App">
      <h1>{heading}, at Affordable Range</h1>

      {offices.map((item, index) => (
        <div key={index} className="card">
          <img src={item.Image} alt="Office Space" width="250" height="200" />

          <h2>Name: {item.Name}</h2>

          <h3
            style={{
              color: item.Rent <= 60000 ? "red" : "green",
            }}
          >
            Rent: Rs. {item.Rent}
          </h3>

          <h3>Address: {item.Address}</h3>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
