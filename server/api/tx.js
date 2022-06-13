import { Appwrite,Query } from "appwrite";

export default defineEventHandler(async (event) => {

    const sdk = new Appwrite();
    const config = useRuntimeConfig();

    sdk
    .setEndpoint(`${config.END_POINT}`) // Your API Endpoint
    .setProject(`${config.PROJECT_ID}`) // Your project ID
  
    let promise = await sdk.database.listDocuments(`${config.DOC_TX_ID}`);

        return {
            success: true,
            data: promise,
        };



});