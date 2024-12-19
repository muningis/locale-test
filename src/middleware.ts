import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // hardcode path for simplicity
  if (request.nextUrl.pathname.includes("mano-puslapis")) {
    const url = request.nextUrl.clone();
    
     // static is hardcoded for simplicity - in real scenario, it comes from another middleware using full pathname
    url.pathname = `/static${request.nextUrl.pathname}`;
    
    console.log("rewrite to", url.pathname, url, request.nextUrl.locale)
    return NextResponse.rewrite(url)
  }

  return NextResponse.next();
}