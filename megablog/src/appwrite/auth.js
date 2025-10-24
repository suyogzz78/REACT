 import config from "../config/config";
 import { Client, Account,ID } from "appwrite";

  export class Authservice{
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(config.appwriteurl) //  Appwrite Endpoint from config file
        .setProject(config.appwriteProjectId); // project ID from config file

        this.account = new Account (this.client);
  }
  async createAccount({email, password, name}){
    try{
    const useraccount = await this.account.create(ID.unique(), email, password, name);
        if(useraccount){
          return this.login({email, password});
        }
        else{
              return useraccount;
        }
    }catch(error){
        throw error;
    }
}

  }
  const authservice = new Authservice();//here we are creating an instance of Authservice class
  export default authservice;