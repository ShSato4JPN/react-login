import NextAuth, { NextAuthConfig } from "next-auth";
import Github from "next-auth/providers/github";

export const config: NextAuthConfig = {
  providers: [
    Github({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  basePath: "/api/auth",
  callbacks: {
    authorized({ request, auth }) {
      try {
        const { pathname } = request.nextUrl;
        if (pathname === "/protected-page") return !!auth;

        return true;
      } catch (err) {
        console.log(err);
      }
    },
    jwt({ token, trigger, session }) {
      // Token の名称をセッションのユーザー名に更新
      if (trigger === "update") token.name = session.user.name;

      return token;
    },
  },
};

/**
 * handlers: サーバーサイドでセッションデータを扱い際に使用する
 * auth: サーバーサイドでセッションデータを扱い際に使用する
 * signIn: サインイン処理を行う
 * signOut: サインアウト処理を行う
 */
export const { handlers, auth, signIn, signOut } = NextAuth(config);
