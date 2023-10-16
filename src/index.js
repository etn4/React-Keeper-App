//1. Create a new React app.
//2. Create a App.jsx component.
//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.
//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(
    <App />,
    document.getElementById("root")
);

// Challenge: 
// 1) Implement the add note functionality
//  - 1a) Create a constant that keeps track of the title and content
//  - 1b) Pass the new note back to the App
//  - 1c) Add new note to an array

// 2) Implement the delete note functionality
//  - 2a) Callback from the Note component to triggger a delete function
//  - 2b) Use the filter function to filter out the item that needs deletion
//  - 2c) Pass a id over to the Note component, pass it back to the App when clicked