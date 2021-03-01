const DOMElement = document.getElementById("root");

const reactElement = React.createElement(
  "header",
  {},
  React.createElement("h1", {}, "Hello from React!"),
  React.createElement("h2", {}, "The best framework ever!"),
);

const reactJsxELement = (
  <header>
    <h1>Hello from JSX react element</h1>
    <h2>The best framework ever!</h2>
  </header>
);

//ReactDOM.render(reactElement, DOMElement);
ReactDOM.render(reactJsxELement, DOMElement);
