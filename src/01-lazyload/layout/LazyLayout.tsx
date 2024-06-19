import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import { LazyPageOne, LazyPageThree, LazyPageTwo } from "../pages";

const LazyLayout = () => {
  return (
    <div>
      <h1>Lazy Layout Page</h1>

      <ul>
        <li>
          <NavLink to="lazyOne">Lazy One</NavLink>
        </li>
        <li>
          <NavLink to="lazyTwo">Lazy Two</NavLink>
        </li>
        <li>
          <NavLink to="lazyThree">Lazy Three</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="lazyOne" element={<LazyPageOne />} />
        <Route path="lazyTwo" element={<LazyPageTwo />} />
        <Route path="lazyThree" element={<LazyPageThree />} />

        <Route path="*" element={<Navigate replace to="lazyOne" />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
