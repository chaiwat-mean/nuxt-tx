<template>
    <div>
        <TableTx></TableTx>
    </div>
</template>

<script setup>
import Swal from 'sweetalert2';

onBeforeMount(async () => {

    try {
        
        const account_data = await UseGetAccountBySession()

    } catch (error) {
        return navigateTo("/");
    }


});




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