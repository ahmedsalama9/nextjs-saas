import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

export const GET = async (req: Request, context: any) => {
  if (!process.env.KINDE_ISSUER_URL) {
    throw new Error("Missing KINDE_ISSUER_URL in environment variables");
  }

  const handler = handleAuth();
  return handler(req, context);
};

export const POST = async (req: Request, context: any) => {
  if (!process.env.KINDE_ISSUER_URL) {
    throw new Error("Missing KINDE_ISSUER_URL in environment variables");
  }

  const handler = handleAuth();
  return handler(req, context);
};
