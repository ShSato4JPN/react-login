import { Client } from "pg";
import styles from "./page.module.scss";

export default async function Home() {
  const client = new Client();

  try {
    await client.connect();
    const result = await client.query("SELECT * FROM m_user");

    return <h1>{JSON.stringify(result)}</h1>;
  } catch (e) {
    return <h1>{JSON.stringify(e)}</h1>;
  } finally {
    if (client) {
      client.end();
    }
  }
}
