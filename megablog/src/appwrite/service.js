import config from "../config/config";
import { Client, Databases, Storage, Query, ID } from "appwrite";

class AppwriteService {
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

  // Posts
  async createPost({ title, content, slug, featuredImage, status, userId }) {
    try {
      const response = await this.databases.documents.create(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status, userId }
      );
      return response;
    } catch (error) {
      console.error("Error creating post:", error);
      throw error;
    }
  }

  async updatePost({ title, content, slug, featuredImage, status }) {
    try {
      const response = await this.databases.documents.update(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status }
      );
      return response;
    } catch (error) {
      console.error("Error updating post:", error);
      throw error;
    }
  }

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

  async getPost(slug) {
    try {
      const post = await this.databases.documents.get(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
      return post;
    } catch (error) {
      console.error("Error fetching post:", error);
      return null;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      const response = await this.databases.documents.list(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        queries
      );
      return response.documents;
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  }

  // File services
  async uploadFile(file) {
    try {
      return await this.bucket.files.create(config.appwriteBucketId, ID.unique(), file);
    } catch (error) {
      console.error("Error uploading file:", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.files.delete(config.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.error("Error deleting file:", error);
      return false;
    }
  }

  async getFilePreview(fileId) {
    try {
      return this.bucket.files.getPreview(config.appwriteBucketId, fileId);
    } catch (error) {
      console.error("Error getting file preview:", error);
      return null;
    }
  }
}

// Export a single instance (singleton)
const service = new AppwriteService();
export default service;
