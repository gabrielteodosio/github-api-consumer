import LoginPage from "../pages/login";
import ReposPage from "../pages/repos";

const routes = [
  {
    path: '/',
    exact: true,
    layout: false,
    private: false,
    component: LoginPage
  },
  {
    path: '/login',
    exact: true,
    layout: true,
    private: false,
    component: LoginPage
  },
  {
    path: '/app',
    exact: true,
    layout: true,
    private: true,
    component: ReposPage
  },
]

export default routes
