import { clientAuthRoutes } from "./auth/client.routes";
import { restaurantAuthRoutes } from "./auth/restaurant.routes";
import { landingPageRoutes } from "./landingPage/landing.routes";

export const routes = [...restaurantAuthRoutes, ...clientAuthRoutes, ...landingPageRoutes];
