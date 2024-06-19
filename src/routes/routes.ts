import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const lazyOne = lazy(
  () =>
    import(
      /*webpackChunkName: "LazyPageOne"*/ "../01-lazyload/pages/LazyPageOne"
    )
);
const lazyTwo = lazy(
  () =>
    import(
      /*webpackChunkName: "LazyPageTwo"*/ "../01-lazyload/pages/LazyPageTwo"
    )
);
const lazyThree = lazy(
  () =>
    import(
      /*webpackChunkName: "LazyPageThree"*/ "../01-lazyload/pages/LazyPageThree"
    )
);

export const routes: Route[] = [
  {
    to: "/lazyOne",
    path: "lazyOne",
    Component: lazyOne,
    name: "Lazy One",
  },
  {
    to: "/lazyTwo",
    path: "lazyTwo",
    Component: lazyTwo,
    name: "Lazy Two",
  },
  {
    to: "/lazyThree",
    path: "lazyThree",
    Component: lazyThree,
    name: "Lazy Three",
  },
];
