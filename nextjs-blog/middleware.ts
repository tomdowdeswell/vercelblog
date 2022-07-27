// middleware.ts
export default function middleware(request) {
  return Response.redirect(new URL('/about-2', request.url));
}
// config with custom matcher
export const config = {
  matcher: '/:path*',
};
