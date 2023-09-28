# Phase 2 Project README.md

## Run the application

#### `npm start`
Start the application with this command, provided you have the server properly running.

### How the application works
The `App.js` file has within it the `NavBar.js` component that uses the `NavLink` element to direct the rest of the page. There is also a lot of other work being done on this page that do things like updating the array of books and fetching the initial array of books with a `GET` request.

`Switch` and `Route` then navigate to one of the 3 main components that provide this application functionality: `Home.js`, `Edit.js`, `AddBook.js`.

### create-react-app
This app was created with the create-react-app command.

### Total Components
There are a total of 9 components used inside of the `App.js` component not including `App.js`.

### client-side routes
There are 3 client-side routes in the `NavBar.js` component and another number of these components in the `Edit.js` component, depending on how long the array passed to it is.



### Home
This component simply renders two other components. One renders books that I have read and the other renders books that I look forward to reading. A simple homepage to be the main page of the application.

### AddBook
A component that gives the option of adding books to my list of books that I have not read. This list is evergrowing, as there are many books I am looking forward to reading when time eventually allows for it. Submitting this form updates the server with a `POST` request and then will update the list of books used on the `Home` and `Edit` page.

### Edit
This was the most challenging part to me, partially because it was slightly more intricate than the other two as it maps through all the books on the list and renders `Navlink` components for each one.

Each `NavLink` causes the addtional `Route` and `Switch` components on this page to render the book that is selected to edit. 

This made it ore difficult along with a very simple mistake on my part the sent me on a multi-hour chase to figure out what was wrong, resulting in a crash of the application.

I eventually figured the problem out and was able to get the application to effectively make a `PATCH` request while updating the array being worked with within the entire application.

## Links to projects
[Front-end](https://marvelous-choux-e0ec7e.netlify.app/) link to function of the project.

[Back-end](https://read-vs-unread-books.onrender.com/books) link to the api of information.