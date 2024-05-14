import { Account, ID, Client } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.rn.aora",
  projectId: "6643261f002d989b8bc6",
  databaseId: "66432768001e467a3227",
  userCollectionId: "66432768001e467a3227",
  videoCollectionId: "664327c400247b93d880",
  storageId: "66432aea002db346ab8b",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);

export const createUser = () => {};
