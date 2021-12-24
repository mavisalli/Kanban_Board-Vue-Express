import Board from "./pages/Board";
import Home from "./pages/Home";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:id",
    name: "Board",
    component: Board,
  },
];
