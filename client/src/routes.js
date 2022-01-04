import Board from "./pages/Board";
import Home from "./pages/Home";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:slug",
    name: "Board",
    component: Board,
  },
];
