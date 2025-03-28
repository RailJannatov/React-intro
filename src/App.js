const Course = (props) => {
  return React.createElement(
    "div",
    {
      className: `${props.class}`,
    },
    [
      React.createElement("p", { key: 91 }, `${props.name}`),
      React.createElement("p", { key: 11111 }, `${props.location}`),
    ]
  );
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { key: 12 }, "Courses"),
    React.createElement("div", { key: 15 }, [
      React.createElement(Course, {
        name: "Turing",
        class: "test",
        key: 1,
        src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.turing.com%2F&psig=AOvVaw3Q6Z9Z9Q6Z9Z9Q6",
        alt: "test",
      }),
      React.createElement(Course, {
        name: "Code",
        class: "something",
        src: "",
        key: 2,
        alt: "",
      }),
      React.createElement(Course, { name: "Div", src: "", alt: "", key: 999 }),
    ]),
  ]);
};

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(React.createElement(App));
