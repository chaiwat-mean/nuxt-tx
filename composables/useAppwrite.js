import { Appwrite } from "appwrite";

export async function UseAppwriteSDK() {
  const sdk = new Appwrite();
  const runtimeConfig = useRuntimeConfig();
  sdk
    .setEndpoint(runtimeConfig.public.END_POINT) // Your API Endpoint
    .setProject(runtimeConfig.public.PROJECT_ID) // Your project ID
  return { sdk };
}

export async function UseGetAccountBySession() {

  const { sdk } = await UseAppwriteSDK();

  let response = await sdk.account.get();

  return response;

}

export async function UseDeleteAccountBySession(){
    
    const { sdk } = await UseAppwriteSDK();

    let response = await sdk.account.deleteSessions();
  
    return response;
}   

export async function UseCreateAccountBySession(email,pass) {
    const { sdk } = await UseAppwriteSDK();
    let response = await sdk.account.createSession(email, pass);

    return response;
}


export async function UseCreateListDocument() {
    const { sdk } = await UseAppwriteSDK();
    const runtimeConfig = useRuntimeConfig();
    let response = await sdk.database.listDocuments(`${runtimeConfig.public.DOC_TX_ID}`);
    return response;
}

export async function UseGetDocumentBylistenDocument(){

    const { sdk } = await UseAppwriteSDK();
    const runtimeConfig = useRuntimeConfig();


    sdk.subscribe([`collections.${runtimeConfig.public.DOC_TX_ID}.documents`, ''], response => {

        return response;


    });

}