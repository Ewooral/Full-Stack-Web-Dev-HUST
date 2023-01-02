// /* global React ReactDOM */
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { StrictMode, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
import Clock from "./Clock";
// const App = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", { id: "brand" }, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Kuka",
//       animal: "Cat",
//       breed: "Barkohese",
//     }),
//     React.createElement(Pet, {
//       name: "Suaso",
//       animal: "Ant",
//       breed: "Soldier Ant",
//     })
//   );
// };

// render(React.createElement(App), document.getElementById("root"));

const App = () => {
  const theme = useState("green");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <header>
            <Link to="/">Adopt Me!</Link>
            <div><Clock /></div>
          </header>

          <Routes>
            <Route path="/" element={<SearchParams />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
      {/* <div>
        <h1 id="brand">Adopt Me!</h1>
        <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Kuka" animal="Cat" breed="Barkohese" />
      <Pet name="Suaso" animal="Ant" breed="Soldier Ant" />
        <SearchParams />
       
      </div> */}
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
