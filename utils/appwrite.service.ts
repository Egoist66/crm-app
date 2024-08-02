import { Client, Account, Databases, Storage, ID as AppwriteID } from 'appwrite';


export const client = new Client();
export const ID = AppwriteID;

export function setClientProjectEndpoint(appID: string) {
    client
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject(appID);
}




/**
 * This is a singleton instance of the Appwrite client. It is safe to use
 * this client across your application. It is also a good practice to
 * reuse this instance instead of creating a new one every time you need it.
 *
 * This client is already initialized with the Appwrite endpoint and your
 * project ID.
 *
 * You can use this client to interact with Appwrite services like Account,
 * Databases, and Storage.
 */

export const account = new Account(client);
export const DB = new Databases(client);
export const storage = new Storage(client);

