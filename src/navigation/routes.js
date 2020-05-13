import LoginPage from "../pages/login";

const routes = [
  {
    path: '/',
    exact: true,
    layout: false,
    component: LoginPage
  },
  {
    path: '/login',
    exact: true,
    layout: true,
    component: LoginPage
  },
]

export default routes
