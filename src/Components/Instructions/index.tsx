import React from 'react';
import './instructions.scss';

export default function Instructions() {
  return (
    <div className="instructions__container">
      <h1>Instructions</h1>
      <p>
        This page contains the instructions for both tasks, please refer back to
        it when completing the tasks. These instructions can also be found in
        the README.md file in the root of this project.
      </p>
      <h2>Task One</h2>
      <p>
        This task is to assess your knowledge in retrieving and manipulating
        data. To assist in this task an example REST API has been setup and is
        running on port 3001 (assuming you are using `npm start` to start the
        app). This REST API will return images and posts from the available
        endpoints, see <a href="http://localhost:3001">http://localhost:3001</a>
        . Each post will have an array images and an array of authors. For each post it is expected to join populate these arrays with the actual data from the objects that are represented by the ID. It is
        expected for this task that you make the appropriate calls to the API to
        retrieve the data to format. Then manipulate the data that you receive to match the expected JSON object
        defined in the failing test.
      </p>
      <p>The test is running from `src/Tasks/One/taskOne.test.tsx` and expects that the properly formatted data is rendered to the page as a string.</p>
      <p>When reviewing your solution to this problem, please ensure that you make notes on any assumptions made, and any points you would improve given more time.</p>
      <h2>Task Two</h2>
      <p>This task is to assess your React / HTML / CSS / Testing skills. There is no design provided here so pixel perfect isn't a requirement. However it is expected that you use semantic HTML and common best practices to provide a responsive UI rendered to the page.</p>
      <h3>Requirements</h3>
      <ul>
        <li>Using data from the API provided in Task One, render a list of posts to the page.</li>
        <li>Each post should display the title, content, author, published date, and the image. These should be displayed as a card.</li>
        <li>Each post should have a element that links to the post e.g http://localhost:3000/posts/POST_ID.</li>
        <li>Each post should have a element that links to the author e.g http://localhost:3000/authors/AUTHOR_ID.</li>
        <li>The posts should be displayed in a grid.</li>
        <li>The grid should be responsive.</li>
        <li>Each post should take up a single row and column.</li>
        <li>The first post in the grid should take up two rows and a single column.</li>
        <li>The date displayed on the post card should be formatted as "Sunday 3rd, Jun, 2022" etc.</li>
        <li>The image displayed for the post should be the first image in the array of images</li>
        <li>The post should display all authors linked to the post</li>
      </ul>
      <h3>Testing</h3>
      <p>It is expected that you write tests for this task. Importantly we expect that the correct things are tested, use this as an opportunity to show your understanding of the correct ways to write unit tests that are flexible but will catch errors if they exist</p>
    </div>
  );
}
