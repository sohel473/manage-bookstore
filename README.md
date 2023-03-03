# Project Readme

This project is a web application that allows users to add books to a list and manage them. The application is built using JSON Server for the local server.

## Requirements

The following are the requirements for this project:

- In the form given on the right side, if you submit all the information input, it will be stored asynchronously on the local server.
- "Book List" section should show the list of books from the server.
- There are two tags named "All, Featured" on the right of "Book List". If you select Featured, only the 'Featured' books will be filtered. If you select All, all will be shown.
- There is a "Search Bar" in the navigation menu. If you search there, it will search only by the book name, and the search result will be filtered in the "Book List" section. If the search bar is empty, all books will appear as normal.
- Clicking on the Edit icon of the card item, all the information of the card will go to the "Add New Book" form on the right side. The button name will then convert from "Add Book" to "Update Book".
- If you click on "Update Book", the book will be updated, the form will be reset, and the title before the button will be "Add Book".
- Finally, if you click the delete button, the book will be deleted from the database.

HTML template will be provided, as well as JSON Server will be configured for the local server. The server must be used in that configuration, and the server must be running on port "9000".

## Setup

Clone the repository to your local machine.

First of all, run the server. to do that, follow the instructions below:

0. Open new terminal.
1. Change Directory using the command `cd server`
2. Install the dependencies using the command `npm install`.
3. Start the application using the command `npm start`.

Then to run this project, follow the instructions below:

0. Open another terminal.
1. Install the dependencies using the command `npm install`.
2. Start the application using the command `npm start`.
3. Access the application by opening `http://localhost:3000` in your browser.

## Technologies

This project was built using the following technologies:

- React.js
- Redux
- JSON Server
- JavaScript
- HTML
- CSS
