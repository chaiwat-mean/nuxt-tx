import { Appwrite } from "appwrite";


export async function UseCreateAccount(username, email, pass) {
  const sdk = new Appwrite();
  const runtimeConfig = useRuntimeConfig()
  sdk
  .setEndpoint(runtimeConfig.public.END_POINT) // Your API Endpoint
  .setProject(runtimeConfig.public.PROJECT_ID) // Your project ID
  .setEndpoint('https://api-app.termiknow.com/v1');

  let promise = sdk.account.create(username, email, pass, username);

  promise.then(
    function (response) {
      return response
    },
    function (error) {
      return error
    }
  );

}

export async function UseCreateAccountSession(email, pass) {
  const sdk = new Appwrite();
  const runtimeConfig = useRuntimeConfig()
  sdk
  .setEndpoint(runtimeConfig.public.END_POINT) // Your API Endpoint
  .setProject(runtimeConfig.public.PROJECT_ID) // Your project ID
  .setEndpoint('https://api-app.termiknow.com/v1');
  
  let promise = sdk.account.createSession(email, pass);

  promise.then(
    function (response) {
      return response
    },
    function (error) {
      return error
    }
  );

  return promise
}

export async function UseGetAccount() {
  const sdk = new Appwrite();
  const runtimeConfig = useRuntimeConfig()
  sdk
  .setEndpoint(runtimeConfig.public.END_POINT) // Your API Endpoint
  .setProject(runtimeConfig.public.PROJECT_ID) // Your project ID
  .setEndpoint('https://api-app.termiknow.com/v1');
  return { sdk }

  
}

export async function UseDeleteAccountSession() {
  const sdk = new Appwrite();
  const runtimeConfig = useRuntimeConfig()
  sdk
  .setEndpoint(runtimeConfig.public.END_POINT) // Your API Endpoint
  .setProject(runtimeConfig.public.PROJECT_ID) // Your project ID
  .setEndpoint('https://api-app.termiknow.com/v1');

  let promise = sdk.account.deleteSessions();

  promise.then(
    function (response) {
      return response
    },
    function (error) {
      return error
    }
  );
}

export async function useListentx() {
  const sdk = new Appwrite();
  const runtimeConfig = useRuntimeConfig()
  sdk
  .setEndpoint(runtimeConfig.public.END_POINT) // Your API Endpoint
  .setProject(runtimeConfig.public.PROJECT_ID); // Your project ID

  sdk.subscribe(`collections.${runtimeConfig.public.DOC_TX_ID}.documents`, (response) => {
    
    return response
    console.log(response);

  });
}

export async function useListTx() {

  const { data: response_tx, pending: pending_tx , error: error_tx } = await useLazyFetch(
    "/api/tx",
    {
      initialCache: false,
    }
  );

  return { response_tx, pending_tx, error_tx };

}
