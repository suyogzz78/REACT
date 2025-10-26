import config from "../config/config";
import { Client, Account, Databases, Storage ,Query } from "appwrite";

export class AppwriteService {
    client = new Client();
    bucket;
    databases;
    constructor() {
        this.client
            .setEndpoint(config.appwriteurl)
            .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    async createPost({title,content,slug,featuredImage,status,userId }) {
        try{
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {title,
                content,
                featuredImage,
                status,
                userId}
            );
        } catch (error) {
            throw error;
        }

    }
}
const service = new AppwriteService();
 export default service;