<template>
  <div>
    <section class="py-8 bg-gray-50">

      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="https://flowbite.com" class="flex items-center">
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Dashboard</span>
          </a>
          <div class="flex md:order-2">
            <button type="button" data-collapse-toggle="mobile-menu-3" aria-controls="mobile-menu-3"
              aria-expanded="false"
              class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
            <div class="relative hidden md:block">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <input v-model="tx" type="text" id="search-navbar"
                class="block w-full p-2 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search transaction id">
            </div>
            <button data-collapse-toggle="mobile-menu-3" type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-3" aria-expanded="false">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"></path>
              </svg>
              <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-3">
            <div class="relative mt-3 md:hidden">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <input v-model="tx" type="text" id="search-navbar"
                class="block w-full p-2 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search transaction id">
            </div>
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a @click="signout"
                  class="block py-2 pl-3 pr-4 text-white bg-red-500 rounded md:bg-transparent md:text-red-500 md:p-0 dark:text-white"
                  aria-current="page"><i class="fa-solid fa-arrow-right-from-bracket"></i> ออกจากระบบ</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="grid grid-cols-6 gap-4 m-5">
        <div class="col-span-4 col-start-2">
          <select v-model="status_tx" @change="change_status"
            class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer text-center">
            <option selected>Status</option>
            <option value="OK">Status : OK</option>
            <option value="paysuccess">Status : paysuccess</option>
            <option value="fail">Status : fail</option>
            <option value="cancel">Status : cancel</option>
          </select>
        </div>
        <div class="col-span-4 col-start-2">
          <select
            class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer text-center">
            <option selected>Day</option>
          </select>
        </div>
      </div>
      <div class="container px-4 mx-auto">
        <div class="pt-12 pb-12 bg-white p-7 rounded-5xl">
          <h2 class="pl-10 text-3xl font-medium xl:pl-24 font-heading">
            Transactions
          </h2>
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
                        class="block text-sm font-semibold uppercase text-body text-opacity-40 font-heading min-w-max">Last
                        update</span>
                    </th>
                    <th class="h-20 p-5 bg-white">
                      <span
                        class="block text-sm font-semibold uppercase text-body text-opacity-40 font-heading min-w-max">Amount</span>
                    </th>
                    <th class="h-20 p-5 bg-white">
                      <span
                        class="block text-sm font-semibold uppercase text-body text-opacity-40 font-heading min-w-max">Count</span>
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
                        <span class="text-lg font-medium font-heading">{{
                            item.transactionID
                        }}</span>
                      </div>
                    </td>
                    <td class="p-0">
                      <div
                        class="flex items-center justify-center h-20 p-5 text-center border-t border-b border-gray-100 bg-blueGray-50">
                        <span class="text-lg text-darkBlueGray-400 font-heading">{{item.datetime_update
                        }}</span>
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
                        <span class="text-lg text-darkBlueGray-400 font-heading"><a class="link"
                            href="">Detail</a></span>
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
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>


const list_data_tx = ref(null);

const tx = ref(null);

const status_tx = ref("OK");


const router = useRouter();

onBeforeMount(async () => {

  const respone_data = await UseCreateListDocument();

  list_data_tx.value = respone_data

});

watch(tx, async (newtx, oldtx) => {


  if (!newtx) {
    const respone_data = await UseCreateListDocument();
    list_data_tx.value = respone_data
  } else {
    const respone_data = await UseGetDocumentByTx(newtx);
    list_data_tx.value = respone_data
  }

})


watchEffect(async () => {


  if (process.client) {

    const { sdk } = await UseAppwriteSDK();
    const runtimeConfig = useRuntimeConfig();


    sdk.subscribe([`collections.${runtimeConfig.public.DOC_TX_ID}.documents`, ''], response => {

      const respone_data = UseCreateListDocument();


      respone_data.then(function (response) {
        list_data_tx.value = response
      }, function (error) {
        console.log(error); // Failure
      });


    });



  }


})


const change_status = async (event) => {

  const respone_data = await UseCreateListDocumentByStatus(event.target.value);
  list_data_tx.value = respone_data

  if (event.target.value === "Status") {
    const respone_data = await UseCreateListDocument();
    list_data_tx.value = respone_data
  }


}


const signout = async (data) => {
  const deleteAccout = await UseDeleteAccountBySession()
  router.go(0)

}

</script>

<style scoped>
</style>
