import React from 'react';

function BlogDetails({ blogs }) {
  return (
    <div className="v1">
      <h1>Blog Details</h1>
      {blogs && blogs.length > 0 &&
        blogs.map((blog) => (
          <div key={blog.id} className="entry">
            <h3>{blog.title}</h3>
            <strong>{blog.author}</strong>
            <p>{blog.summary}</p>
          </div>
        ))
      }
    </div>
  );
}

export default BlogDetails;
