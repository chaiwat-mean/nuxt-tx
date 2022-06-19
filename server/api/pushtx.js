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

  let tx = null;

  if (body.transactionID) {
    tx = body.transactionID;
  } else if (body.transectionID) {
    tx = body.transectionID;
  }

  const currenttime = new Date().toLocaleTimeString('th-TH');
  const currentdate = new Date().toLocaleDateString('th-TH');

  const create = await database.createDocument(`${config.DOC_TX_ID}`, "unique()", {
    transactionID: tx,
    date: currentdate,
    datetime_create: currentdate + " " + currenttime,
    amount: body.amount,
    status: body.status,
    from: "webhook",
  });

  return {
    success: true,
    data: create,
  };
});
