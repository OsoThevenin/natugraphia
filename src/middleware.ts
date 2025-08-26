import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { env } from "./env.mjs";
import { decrypt, updateSession } from "./lib/auth";

const ProtectedPaths = ["/orders"];

export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	const isProtectedPath = ProtectedPaths.some((p) => pathname.startsWith(p));

	// Set default locale cookie if not present
	let response: NextResponse;
	if (!request.cookies.has("locale")) {
		response = isProtectedPath ? NextResponse.next() : NextResponse.next();
		response.cookies.set("locale", env.NEXT_PUBLIC_LANGUAGE, {
			path: "/",
			maxAge: 60 * 60 * 24 * 365,
			sameSite: "lax",
		});
	} else {
		response = NextResponse.next();
	}

	// Handle protected paths
	if (!isProtectedPath) {
		return response;
	}

	const session = request.cookies.get("session")?.value;
	if (!session) {
		return NextResponse.redirect(new URL("/login", request.url));
	}

	const data = await decrypt(session);
	if (!data || data.expires < Date.now()) {
		return NextResponse.redirect(new URL("/login", request.url));
	}

	return updateSession(request);
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		"/((?!api|_next/static|_next/image|favicon.ico).*)",
	],
};
