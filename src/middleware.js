import { NextResponse } from "next/server";

export function middleware(request) {
    // console.log(request.cookies.get('token'));return
    if (request.nextUrl.pathname === '/') {
        let token = request.cookies.get('token');
        let user_data = request.cookies.get('user_data');
        if (token && user_data)
            return NextResponse.redirect(new URL("/dashboard", request.url));
    }
}