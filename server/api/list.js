import sdk from "node-appwrite";
import { Query } from "appwrite";

export default defineEventHandler(async (event) => {
  const body = await useBody(event);

  const client = new sdk.Client();
  const database = new sdk.Database(client);
  const config = useRuntimeConfig();
  client
    .setEndpoint(`${config.END_POINT}`)
    .setProject(`${config.PROJECT_ID}`)
    .setKey(`${config.API_KEY}`);

    let document_data = await database.listDocuments(
        `${config.DOC_TX_ID}`,
        [Query.equal("transactionID", body.transactionID)],
        1
    );

    return {
      data: document_data
    }

});
