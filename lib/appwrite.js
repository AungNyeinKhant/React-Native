import { Client,Account,ID, Avatars, Databases, Query } from 'react-native-appwrite';

export const config={
    endpoint : 'https://cloud.appwrite.io/v1',
    platform: 'com.anklearn.aora',
    projectId : '6694e1b00011d44b6b6e',
    databaseId : '6694e5e50031ff9644fb',
    userCollectionId : '6694e634002d016ddd8c',
    videoCollectionId : '6694e67e000418066f80',
    storageId: '6694ea7a003c572f3bee'
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
const avatar = new Avatars(client)
const database = new Databases(client)

// Register User
export const createUser = async (email,password,userName)=>{
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            userName,
        )

        if(!newAccount) throw Error

        const avatarUrl = avatar.getInitials(userName)

        await signIn(email,password)

        const newUser = await database.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                
                username : userName,
                email,
                avatar : avatarUrl,
                accountId : newAccount.$id,
            }
        )

        return newUser


    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export async function signIn(email,password){
    try {
        const session = await account.createEmailPasswordSession(email,password)
        return session
    } catch (error) {
        throw new Error(error)
    }
}

export const getCurrentUser = async() =>{
    try {
        const currentAccount = await account.get();

        if(!currentAccount) throw Error

        const currentUser = await database.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal('accountId',currentAccount.$id)]
        )

        if(!currentUser) throw Error;

        return currentUser.documents[0];
        
    } catch (error) {
        console.log(error)
        
    }
}

export const getAllPosts = async () =>{
    try {
        const posts = await database.listDocuments(
            config.databaseId,
            config.videoCollectionId,

        )

        return posts.documents
        
    } catch (error) {
        throw new Error(error)
    }
}

export const getLatestPosts = async () =>{
    try {
        const posts = await database.listDocuments(
            config.databaseId,
            config.videoCollectionId,
            [Query.orderDesc('$createdAt',Query.limit(7))]
        )

        return posts.documents
        
    } catch (error) {
        throw new Error(error)
    }
}

