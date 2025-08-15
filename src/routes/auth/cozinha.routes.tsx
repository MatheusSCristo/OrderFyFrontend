import LoginRestaurant from "../../pages/auth/restaurant/LoginRestaurant";
import RegisterRestaurant from "../../pages/auth/restaurant/RegisterRestaurant";

export const authRoutes = [
  {
    path: "/auth/cozinha/login",
    element: <LoginRestaurant />,
    key: "login",
  },
  {
    path: "/auth/cozinha/cadastrar",
    element: <RegisterRestaurant />,
    key: "register",
  },
];
