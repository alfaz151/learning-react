console.log("app.js loaded");

const header = React.createElement("h1", {
    className: "header"
}, "Welcome to My App");

const paragraph = React.createElement("p", {
    className: "description"
}, "This is a simple React application.");

const mainContainer = React.createElement("div", {
    id: "main-container",
    className: "container"
}, [header, paragraph]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(mainContainer);


