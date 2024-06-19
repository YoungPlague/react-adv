import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";

import logo from "../logo.svg";
import { LazyPageOne, LazyPageThree, LazyPageTwo } from "../01-lazyload/pages";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to="/lazyOne"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Lazy One
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazyTwo"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Lazy Two
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/LazyThree"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Lazy Three
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="lazyOne" element={<LazyPageOne />} />
          <Route path="lazyTwo" element={<LazyPageTwo />} />
          <Route path="lazyThree" element={<LazyPageThree />} />

          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
