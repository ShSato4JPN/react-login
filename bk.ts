import { Client } from "pg";

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

export async function POST() {
  const connectToDb = async () => {
    const client = new Client();

    try {
      await client.connect();
      return client;
    } catch (error) {
      throw new Error(`Failed to connect to database: ${error}`);
    }
  };

  const queryUserName = async (client: Client) => {
    try {
      const result = await client.query<M_USERTable>("SELECT * FROM m_user");
      return result.rows[0]?.user_name;
    } catch (error) {
      throw new Error(`Failed to query user name: ${error}`);
    }
  };

  const closeConnection = async (client: Client) => {
    try {
      await client.end();
    } catch (error) {
      console.error(`Error closing database connection: ${error}`);
    }
  };

  const getUserData = async () => {
    let client;
    try {
      client = await connectToDb();
      const userName = await queryUserName(client);
      return userName;
    } catch (error) {
      console.error(error);
      return null;
    } finally {
      if (client) {
        await closeConnection(client);
      }
    }
  };

  //const user = await getUserData();

  return Response.json({ test: "hello" });
}
