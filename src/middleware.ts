// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ADMIN_COOKIE = "admin_session";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (!pathname.startsWith("/admin")) return NextResponse.next();

  // ✅ กัน loop: อนุญาตทุกอย่างใต้ /admin/login
  if (pathname === "/admin/login" || pathname.startsWith("/admin/login/")) {
    return NextResponse.next();
  }

  const hasSession = !!req.cookies.get(ADMIN_COOKIE)?.value;
  if (!hasSession) {
    const url = req.nextUrl.clone();
    url.pathname = "/admin/login";
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};