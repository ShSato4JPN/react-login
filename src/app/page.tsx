import { Client } from "pg";
import styles from "./page.module.scss";

type M_USERTable = {
  user_code: string;
  user_name: string;
  user_name_kana: string;
  mail_address: string;
  retirement_flag: string;
  login_password: string;
  user_account_lock_flag: string;
  password_update_datetime: string;
  first_login_flag: string;
  login_failure_count: string;
  last_login_failure_datetime: string;
  user_address: string;
  user_tell: string;
  create_datetime: string;
  create_user_code: string;
  update_datetime: string;
  update_user_code: string;
};

export default async function Home() {
  const client = new Client();

  try {
    await client.connect();
    const result = await client.query<M_USERTable>("SELECT * FROM m_user");

    return <h1>{JSON.stringify(result.rows[0].user_name)}</h1>;
  } catch (e) {
    return <h1>{JSON.stringify(e)}</h1>;
  } finally {
    if (client) {
      client.end();
    }
  }
}
