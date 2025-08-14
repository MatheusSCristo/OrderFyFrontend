import { authRoutes } from "./auth/cozinha.routes";
import { landingPageRoutes } from "./landingPage/landing.routes";

export const routes = [...authRoutes, ...landingPageRoutes];
