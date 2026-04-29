import { NextResponse } from "next/server";

export function proxy(request) {
    console.log("message from proxyx")
  return NextResponse.redirect(new URL("/home", request.url));
}
export const config = {
  matcher: ['/profile'],
};
