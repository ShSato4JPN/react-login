export { auth as middleware } from "@/auth";

export const config = {
  // profile 以降の URL にマッチする場合、auth ミドルウェアを適用する
  //matcher: "/profile:",
  // マッチするパスは除外される。
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
