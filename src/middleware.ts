import { isValidPassword } from "@/lib/isValidPassword";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  if ((await isAuthenticated(req)) == false) {
    return new NextResponse("Unauthorized", {
      status: 401,
      headers: {
        "WWW-Authenticate": "Basic",
      },
    });
  }
}

async function isAuthenticated(req: NextRequest) {
  const authHeader =
    req.headers.get("authorization") || req.headers.get("Authorization");
  if (authHeader == null) return null;
  const [username, password] = Buffer.from(authHeader.split(" ")[1], "base64")
    .toString()
    .split(":");

  return (
    username === process.env.ADMIN_USERNAME &&
    isValidPassword(password, process.env.HASHED_ADMIN_PASSWORD as string)
  );
}
export const config = {
  matcher: "/admin/:path*",
};
