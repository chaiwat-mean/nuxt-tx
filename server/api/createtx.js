import { Appwrite } from "appwrite";
import sdk from "node-appwrite";

export default defineEventHandler(async (event) => {
  // Init SDK
  let client = new sdk.Client();

  let database = new sdk.Database(client);

  const body = await useBody(event);

  const config = useRuntimeConfig();


  client
    .setEndpoint(`${config.END_POINT}`) // Your API Endpoint
    .setProject(`${config.PROJECT_ID}`) // Your project ID
    .setKey(
      `${config.API_KEY}`
    ); // Your secret API key

  let create = await database.createDocument(
    `${config.DOC_TX_ID}`,
    "unique()",

    {
      tx: body.tx,
      datetime: new Date(),
      amount: body.amount,
      status: body.status,
    }
  );

  return{
      success: true,
      data: create
  }

});
