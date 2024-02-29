import { getServerSession } from "next-auth/next";
import { options } from "@/options";

export async function GET() {
  console.log("get");

  const session = await getServerSession(options);

  if (session) {
    return Response.json({
      content:
        "This is protected content. You can access this content because you are signed in.",
    });
  } else {
    return Response.json({
      error:
        "You must be signed in to view the protected content on this page.",
    });
  }
}
