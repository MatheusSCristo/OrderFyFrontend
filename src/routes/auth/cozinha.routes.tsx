import LoginKitchen from "../../pages/kitchen/LoginKitchen";
import RegisterKitchen from "../../pages/kitchen/RegisterKitchen";

export const authRoutes = [
  {
    path: "/auth/cozinha/login",
    element: <LoginKitchen />,
    key: "login",
  },
  {
    path: "/auth/cozinha/cadastrar",
    element: <RegisterKitchen />,
    key: "register",
  },
];
