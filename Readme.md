# React Project

This project demonstrates **core React concepts**, starting from creating elements using `React.createElement`, moving to **JSX**, and finally **functional components** and **component composition**.

---

## 📌 Topics Covered

- React without JSX (`React.createElement`)
- JSX syntax and Babel transpilation
- Functional Components
- Component Composition
- Differences between JSX and HTML

---

## 🧱 React Without JSX

Example of creating nested React elements using `React.createElement`:

```js
const heading = React.createElement(
  "div",
  { id: "parent", key: "parent-1" },
  [
    React.createElement(
      "div",
      { id: "child", key: "child-1" },
      [
        React.createElement("h1", { id: "h1", key: "h1" }, "I am h1 Tag"),
        React.createElement("h2", { id: "h2", key: "h2" }, "I am h2 Tag"),
      ]
    ),
    React.createElement(
      "div",
      { id: "child2", key: "child-2" },
      [
        React.createElement("h3", { id: "heading3", key: "heading3" }, "I am h3 Tag"),
        React.createElement("h4", { id: "heading4", key: "heading4" }, "I am h4 Tag"),
      ]
    ),
  ]
);

console.log("Heading", heading);
