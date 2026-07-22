import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "40px",
      }}
    >

      <div className="column">
      <CourseDetails />
      </div>

      <div className="column separator">
      <BookDetails />
      </div>

      <div className="column separator">
      <BlogDetails />
      </div>

    </div>
  );
}

export default App;
