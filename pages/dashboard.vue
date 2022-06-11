<template>
    <div>
        <TableTx></TableTx>
    </div>
</template>

<script setup>
import Swal from 'sweetalert2';
import { Appwrite } from "appwrite";

const runtimeConfig = useRuntimeConfig()
const sdk_app = new Appwrite();
const router = useRouter();
const route = useRoute();
const cookie_token = useCookie('token')


const { sdk } = await UseGetAccount()

// onBeforeMount(async () => {

//     let promise = sdk.account.get();

//     promise.then(
//         function (response) {
//             useState("globalProfile", () => response);
//         },
//         function (error) {
//             return navigateTo("/");
//         }
//     );

// });




const profile = useState("globalProfile");
const list_tx = useState("list_tx");


</script>
<script>
export default {
    head() {
        return {
            script: [
                {
                    src: '/assets/js/main.js'
                }
            ]
        }
    }
}
</script>
<style scoped>
</style>