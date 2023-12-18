# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
Open [http://localhost:3001](http://localhost:3001) to view the API in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Instructions

This page contains the instructions for both tasks, please refer back to it when completing the tasks. These instructions can also be found in the README.md file in the root of the project.

## Task One

This task is to assess your knowledge in retrieving and manipulating data. To assist in this task an example REST API has been setup and is running on port 3001 (assuming you are using \`npm start\` to start the app). This REST API will return images and posts from the available endpoints, see [http://localhost:3001](http://localhost:3001). Each post will have an array images and an array of authors. For each post it is expected to join populate these arrays with the actual data from the objects that are represented by the ID. It is expected for this task that you make the appropriate calls to the API to retrieve the data to format. Then manipulate the data that you receive to match the expected JSON object defined in the failing test.

The test is running from `src/Tasks/One/taskOne.test.tsx` and expects that the properly formatted data is rendered to the page as a string.

When reviewing your solution to this problem, please ensure that you make notes on any assumptions made, and any points you would improve given more time.

## Task Two

This task is to assess your React / HTML / CSS / Testing skills. There is no design provided here so pixel perfect isn't a requirement. However it is expected that you use semantic HTML and common best practices to provide a responsive UI rendered to the page.

### Requirements

- Using data from the API provided in Task One, render a list of posts to the page.
- Each post should display the title, content, author, published date, and the image. These should be displayed as a card.
- Each post should have a element that links to the post e.g http://localhost:3000/posts/POST_ID.
- Each post should have a element that links to the author e.g http://localhost:3000/authors/AUTHOR_ID.
- The posts should be displayed in a grid.
- The grid should be responsive.
- Each post should take up a single row and column.
- The first post in the grid should take up two rows and a single column.
- The date displayed on the post card should be formatted as "Sunday 3rd, Jun, 2022" etc.
- The image displayed for the post should be the first image in the array of images
- The post should display all authors linked to the post

### Testing

It is expected that you write tests for this task. Importantly we expect that the correct things are tested, use this as an opportunity to show your understanding of the correct ways to write unit tests that are flexible but will catch errors if they exist
