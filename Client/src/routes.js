import Dashboard from "views/Dashboard.jsx";
import MyResume from "views/MyResume.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/main",
  },
  {
    path: "/user",
    name: "My Resume",
    icon: "pe-7s-user",
    component: MyResume,
    layout: "/main",
  },
];

export default dashboardRoutes;
