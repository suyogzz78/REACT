import config from "../config/config";
import { Client, Databases, Storage } from "appwrite";

export class AppwriteService {
  client;
  databases;
  bucket;

  constructor() {
    this.client = new Client()
      .setEndpoint(config.appwriteurl)
      .setProject(config.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // ✅ Create a post document
  async createPost({ title, content, slug, featuredImage, status, userId }) {
    try {
      const response = await this.databases.documents.create(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug, // document ID
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
      return response;
    } catch (error) {
      console.error("Error creating post:", error);
      throw error;
    }
  }

  // ✅ Update a post document
  async updatePost({ title, content, slug, featuredImage, status }) {
    try {
      const response = await this.databases.documents.update(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug, // document ID
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
      return response;
    } catch (error) {
      console.error("Error updating post:", error);
      throw error;
    }
  }

  // ✅ Delete a post document
  async deletePost({ slug }) {
    try {
      await this.databases.documents.delete(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.error("Error deleting post:", error);
      return false;
    }
  }
}

const service = new AppwriteService();
export default service;
