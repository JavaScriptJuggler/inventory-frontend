import { NextResponse } from "next/server";

export function middleware(request) {
    const token = request.cookies.get('token');
    const user_data = request.cookies.get('user_data');
    if (request.nextUrl.pathname == '/') {
        if (typeof token != 'undefined' && typeof user_data != 'undefined')
            return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    /* if not has cookies redirect to login */
    if (!token && !user_data && request.nextUrl.pathname != '/') {
        // return NextResponse.redirect(new URL("/", request.url));
        window.location.href='/';
    }
}