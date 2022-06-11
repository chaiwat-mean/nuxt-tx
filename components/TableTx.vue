<template>
  <div>
    <section class="py-8 bg-gray-50">
      <div class="container px-4 mx-auto">
        <div class="pt-12 pb-12 bg-white p-7 rounded-5xl">
          <h2 class="pl-10 text-3xl font-medium xl:pl-24 font-heading">Transactions</h2>
          <div class="overflow-x-auto">
            <div class="inline-block min-w-full overflow-hidden">
              <table class="w-full mb-10 table-auto">
                <thead>
                  <tr>
                    <th class="h-20 pl-10 text-left bg-white xl:pl-24">
                      <span
                        class="block text-sm font-semibold uppercase text-body text-opacity-40 font-heading min-w-max">Transaction
                        id</span>
                    </th>
                    <th class="h-20 p-5 bg-white">
                      <span
                        class="block text-sm font-semibold uppercase text-body text-opacity-40 font-heading min-w-max">Datetime</span>
                    </th>
                    <th class="h-20 p-5 bg-white">
                      <span
                        class="block text-sm font-semibold uppercase text-body text-opacity-40 font-heading min-w-max">Amount</span>
                    </th>
                    <th class="h-20 p-5 bg-white">
                      <span
                        class="block text-sm font-semibold uppercase text-body text-opacity-40 font-heading min-w-max">Status</span>
                    </th>
                  </tr>
                </thead>
                <tbody>

                  <tr v-for="item in list_data_tx?.documents" :key="item.$id">
                    <td class="p-0">
                      <div
                        class="flex items-center h-20 pl-10 border-t border-b border-l border-gray-100 xl:pl-24 bg-blueGray-50 rounded-tl-5xl rounded-bl-5xl">
                        <span class="text-lg font-medium font-heading">{{ item.tx }}</span>
                      </div>
                    </td>
                    <td class="p-0">
                      <div
                        class="flex items-center justify-center h-20 p-5 text-center border-t border-b border-gray-100 bg-blueGray-50">
                        <span class="text-lg text-darkBlueGray-400 font-heading">{{ item.datetime }}</span>
                      </div>
                    </td>
                    <td class="p-0">
                      <div
                        class="flex items-center justify-center h-20 p-5 text-center border-t border-b border-gray-100 bg-blueGray-50">
                        <span class="text-lg text-darkBlueGray-400 font-heading">{{ item.amount }}</span>
                      </div>
                    </td>
                    <td class="p-0">
                      <div
                        class="flex items-center justify-center h-20 p-5 text-center border-t border-b border-gray-100 bg-blueGray-50">
                        <span class="text-lg text-darkBlueGray-400 font-heading">{{ item.status }}</span>
                      </div>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
          <div class="pl-10 xl:pl-24 max-w-max"><a
              class="block w-full py-4 font-semibold leading-3 tracking-tighter text-center text-white bg-blue-500 px-7 font-heading hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
              href="#">Show more</a></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Appwrite } from "appwrite";

const runtimeConfig = useRuntimeConfig()
const profile = useState("globalProfile");
const list_tx = useState("list_tx");
const sdk_app = new Appwrite();

const list_data_tx = ref(null)

sdk_app
  .setEndpoint(runtimeConfig.public.END_POINT) // Your API Endpoint
  .setProject(runtimeConfig.public.PROJECT_ID); // Your project ID

onBeforeMount(async () => {

  let promise = await sdk_app.database.listDocuments(`${runtimeConfig.public.DOC_TX_ID}`);

  useState("list_tx", () => promise);

  list_data_tx.value = promise


});





const upd = ref(false)

watchEffect(async () => {

  let update = false;

  if (process.client) {
    sdk_app.subscribe([`collections.${runtimeConfig.public.DOC_TX_ID}.documents`, ''], response => {

      let promise = sdk_app.database.listDocuments(`${runtimeConfig.public.DOC_TX_ID}`);

      promise.then(function (response) {
        list_data_tx.value = response
        useState("list_tx", () => promise);
      }, function (error) {
        console.log(error); // Failure
      });

      

    });
  }
})


</script>

<style scoped>
</style>