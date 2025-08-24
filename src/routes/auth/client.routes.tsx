import LoginClient from "../../pages/auth/client/LoginClient";

export const clientAuthRoutes = [
  {
    path: "/auth/cliente/login/:mesaId",
    element: <LoginClient />,
    key: "login",
  },  
];
