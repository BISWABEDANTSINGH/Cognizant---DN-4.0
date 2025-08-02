import React from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';
import './App.css';
import { books, blogs, courses } from './data';

function App() {
  return (
    <div className="container">
      <div className="component">
        <BookDetails books={books} />
      </div>
      <div className="component">
        <BlogDetails blogs={blogs} />
      </div>
      <div className="component">
        <CourseDetails courses={courses} />
      </div>
    </div>
  );
}

export default App;
