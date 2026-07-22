import { courses } from "./data";

function CourseDetails() {

    return (
        <div className="column">
            <h1>Course Details</h1>

            {
                courses.map(course => (

                    <div className="item" key={course.id}>
                        <h2>{course.cname}</h2>
                        <h4>{course.date}</h4>
                    </div>

                ))
            }
        </div>
    );
}

export default CourseDetails;