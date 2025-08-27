import LoginClient from "../../pages/auth/client/LoginClient";

export const clientAuthRoutes = [
  {
    path: "/auth/cliente/:mesaId",
    element: <LoginClient />,
    key: "login",
  },  
];
