
import config from '../config/config.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteurl)
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
            
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    
    async getCurrentUser() {
  try {
    return await this.account.get();
  } catch (error) {
    if (error.code === 401) {
      // 401 = no valid session, not a real "error"
      console.log("No active session found — user is logged out.");
    } else {
      console.error("Appwrite service :: getCurrentUser :: error", error);
    }
    return null;
  }
}


    async logout() {
//logout user
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();
 
export default authService;

// src/appwrite/auth.js

/*
import config from "../config/config.js";
import { Client, Account, ID } from "appwrite";

class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteurl)
      .setProject(config.appwriteProjectId);

    this.account = new Account(this.client);
  }

  // Create a new account and login
  async createAccount({ email, password, name }) {
    try {
      // 1. Create user
      await this.account.create(ID.unique(), email, password, name);

      // 2. Login after signup
      await this.account.createEmailSession(email, password);

      // 3. Small delay to ensure session is registered
      await new Promise(resolve => setTimeout(resolve, 500));

      // 4. Fetch user info
      const user = await this.getCurrentUser();
      return user;
    } catch (error) {
      throw error;
    }
  }

  // Login
  async login({ email, password }) {
    try {
      await this.account.createEmailSession(email, password);

      // Small delay to ensure session is registered
      await new Promise(resolve => setTimeout(resolve, 500));

      const user = await this.getCurrentUser();
      return user;
    } catch (error) {
      throw error;
    }
  }

  // Get current logged-in user
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      if (error.code === 401) return null; // guest user
      console.error("Appwrite getCurrentUser unexpected error:", error);
      return null;
    }
  }

  // Logout
  async logout() {
    try {
      await this.account.deleteSession("current");
    } catch (error) {
      console.error("Appwrite logout error:", error);
    }
  }
}

const authService = new AuthService();
export default authService;
*/