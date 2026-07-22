import { blogs } from "./data";

function BlogDetails() {

    return (
        <div className="column">
            <h1>Blog Details</h1>

            {
                blogs.map(blog => (

                    <div className="item" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <h3>{blog.author}</h3>
                        <p>{blog.description}</p>
                    </div>

                ))
            }
        </div>
    );
}

export default BlogDetails;