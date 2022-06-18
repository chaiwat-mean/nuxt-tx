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

  const currentdate = new Date();
  var date = currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear()
  var datetime = currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear() + " " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();

  const create = await database.createDocument(`${config.DOC_TX_ID}`, "unique()", {
    transactionID: tx,
    date: date,
    datetime_create: datetime,
    amount: body.amount,
    status: body.status,
    from: "webhook",
  });

  return {
    success: true,
    data: create,
  };
});
