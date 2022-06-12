<template>
    <div>

    </div>
</template>

<script setup>


import { Appwrite } from "appwrite";
const sdk_app = new Appwrite();
const runtimeConfig = useRuntimeConfig()


sdk_app
  .setEndpoint(runtimeConfig.public.END_POINT) // Your API Endpoint
  .setProject(runtimeConfig.public.PROJECT_ID) // Your project ID
  .setEndpoint('https://api-app.termiknow.com/v1');


let promise = sdk_app.database.listDocuments(`${runtimeConfig.public.DOC_TX_ID}`)

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});

watchEffect(async () => {

  let update = false;

  if (process.client) {
    sdk_app.subscribe([`collections.${runtimeConfig.public.DOC_TX_ID}.documents`, ''], response => {

      console.log(response)

    });
  }
})


</script>

<style scoped>

</style>