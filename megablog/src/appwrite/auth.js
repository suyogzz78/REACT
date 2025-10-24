import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class Authservice {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteurl) // Appwrite Endpoint
      .setProject(config.appwriteProjectId); // Project ID

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const useraccount = await this.account.createEmailPasswordUser(
        ID.unique(),
        email,
        password,
        name
      );

      if (useraccount) {
        return this.login({ email, password });
      } else {
        return useraccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }
}

const authservice = new Authservice();
export default authservice;
