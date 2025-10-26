import config from "../config/config";
import { Client, Account, Databases, Storage ,Query } from "appwrite";

export class AppwriteService {
    client = new Client();
    account;
    databases;
}
const service = new AppwriteService();
 export default service;