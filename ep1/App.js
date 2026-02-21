import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React!"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, `I'm h1 tag`)
//   )
// );
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, `I'm h1 tag`),
//     React.createElement("h2", {}, `I'm h2 tag`),
//   ])
// );
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

const elem = <h1> el</h1>;
const title = <div>title {elem}</div>;
const Comp2 = () => <h1>Comp2</h1>;
function HeadingComponent() {
  return (
    <div>
      Heading
      {Comp2()}
      {title}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
