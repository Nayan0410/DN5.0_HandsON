import "../Stylesheets/mystyle.css";

const percentToDecimal = (decimal) => {
    return (decimal).toFixed(2) + "%";
};

const calcScore = (total, goal) => {
    return percentToDecimal(total / goal);
};

export const CalculateScore = ({ Name, School, total, goal }) => (
    <div className="box">
        <h2>Student Details</h2>

        <p><strong>Name:</strong> {Name}</p>

        <p><strong>School:</strong> {School}</p>

        <p><strong>Total:</strong> {total} Marks</p>

        <h3>Score: {calcScore(total, goal)}</h3>
    </div>
);