<template>
    <div class="antialiased bg-body text-body font-body">
        <section class="pb-24">
            <div class="pt-24 pb-64 text-center bg-gray-100 xl:pt-52 lg:pb-80 rounded-b-10xl">
                <div class="container px-4 mx-auto">

                    <h2 class="mb-12 text-5xl font-medium leading-tight md:text-10xl xl:text-11xl font-heading">
                        เข้าสู่ระบบ</h2>

                </div>
            </div>
            <div class="container px-4 mx-auto">
                <div class="max-w-4xl px-8 py-10 mx-auto bg-white shadow-lg -mt-52 rounded-4xl">
                    <div class="flex flex-wrap justify-center -mx-4 -mb-4">
                        <div class="w-full px-4 mb-4 md:w-auto">

                        </div>
                        <div class="w-full px-4 mb-4 md:w-auto">

                        </div>
                        <div class="w-full px-4 mb-4 md:w-auto">

                        </div>
                    </div>
                    <div class="py-16 mt-10 border-2 border-gray-50 rounded-4xl">
                        <div class="items-center justify-center max-w-md mx-auto align-middle">
                            <FormKit type="form" :actions="false" @submit="signin">
                                <div class="form-control">
                                    <FormKit name="email" label="Email address" validation="required|email"
                                        :validation-messages="{
                                            required: 'Enter your email',
                                            email: 'Email invalid'
                                        }" />
                                </div>
                                <div class="form-control">
                                    <FormKit type="password" name="password" label="Password"
                                        validation="required|length:8" :validation-messages="{
                                            required: 'Enter your password',
                                            password: 'Password invalid',
                                            length: 'Password many short'
                                        }" />
                                </div>
                                <div class="mt-6 form-control">
                                    <FormKit type="submit" label="เข้าสู่ระบบ"
                                        input-class="$reset btn btn-primary w-full" />
                                </div>
                            </FormKit>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>

import Swal from 'sweetalert2';
const router = useRouter();
const route = useRoute();
const cookie_token = useCookie('token')


const { sdk } = await UseGetAccount()



onBeforeMount(() => {
    let promise = sdk.account.get();

    promise.then(
        function (response) {
            
            useState("globalProfile", () => response);

            return navigateTo("/dashboard");
        },
        function (error) {

        }
    );
    
});

const profile = useState("globalProfile");



const signin = async (data) => {


    const account_session = await UseCreateAccountSession(data.email, data.password)


    if (account_session?.$id && account_session?.userId) {
        Swal.fire({
            title: 'เข้าสู่ระบบสำเร็จ',
            text: "ขอบคุณที่เป็นส่วนหนึ่งของเรา",
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'ปิด'
        }).then((result) => {
            router.go(0)
        })
    } else {
        Swal.fire({
            icon: "error",
            title: "เกิดข้อผิดพลาด กรุณาลองใหม่",
        });
    }

}


definePageMeta(
    {
        layout: false,
    }
)
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