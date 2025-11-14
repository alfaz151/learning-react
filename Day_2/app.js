import React from 'react';
import ReactDOM from 'react-dom/client';

const header = React.createElement("h1", {
    className: "header",
    // key: "h1"
}, "Welcome to My App");

const paragraph = React.createElement("p", {
    className: "description",
    // key: "p1"
}, "This is a simple React application.");

const mainContainer = React.createElement("div", {
    className: "container"
}, [header, paragraph]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(mainContainer);


