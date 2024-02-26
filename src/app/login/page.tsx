import { LoginButton, LogoutButton } from "@/components/Buttons";
import { getServerSession } from "next-auth/next";
import Link from "next/link";
import { options } from "@/options";

export default async function Home() {
  const session = await getServerSession(options); // セッション情報を取得

  if (session) {
    return <div>{JSON.stringify(session)}</div>;
  } else {
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <div>
          <LoginButton />
          <LogoutButton />
        </div>
        <Link href={"/test2"}>LINK</Link>
      </main>
    );
  }
}
