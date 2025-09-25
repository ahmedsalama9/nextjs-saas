import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import type { KindeAccessToken } from "@kinde-oss/kinde-auth-nextjs/types";

export default withAuth(
  async function middleware(req: { kindeAuth: any; }) {
  },
  {
    isReturnToCurrentPage: true,
    loginPage: "/login",
    publicPaths: ["/public", "/more"],
    isAuthorized: ({ token }: { token: KindeAccessToken }) => {
      return token?.permissions?.includes("eat:chips") ?? false;
    },
  }
);

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  ],
};
