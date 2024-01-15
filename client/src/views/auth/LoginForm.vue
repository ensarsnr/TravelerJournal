<template >
    <!-- Burada ki renk yavaşça değişecek şekilde ayarlamamız lazım... Güzel görüntü verir -->
    <div class="h-screen flex p-5 bg-gradient-to-r from-blue-300 to-purple-400">

        <div class="grid grid-cols-2 justify-between w-5/6 rounded-lg  h-full bg-white m-auto">
            <div class="mt-5 mb-5 ml-5 bg-blue-500 flex rounded-lg ">
                <img src="../../assets/img/plane.png" class="m-auto" alt="">
            </div>
            <div class="flex flex-col justify-between h-full">
                <div class="p-10 text-right">
                    <h1 class="text-blue-500 font-extrabold text-xl ">Travlers Journey!</h1>
                </div>
                <div class="mb-4">
                    <form class="m-auto w-2/4">
                        <div>
                            <h1 for="first_name" class="block mb-5 text-2xl font-extrabold text-gray-900">
                                Giriş Sayfası </h1>

                        </div>
                        <div class="mt-5">
                            <input type="text" :value="username" @input="onChangeUsername"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400 "
                                placeholder="username" required>
                        </div>
                        <div class="mt-5">
                            <input :value="password" @input="onChangePassword" type="text"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400 "
                                placeholder="password" required>
                        </div>
                        <div class="mt-5">
                            <button @click="handleSubmit"
                                class="px-4 py-2 bg-slate-400 hover:bg-slate-500 duration-200 hover:duration-200 rounded-lg w-full text-white text-lg font-extrabold">Giriş
                                Yap
                            </button>
                        </div>
                        <router-link to="/" class="text-right">asdasd</router-link>
                    </form>
                </div>
                <div class="p-10 text-sm text-slate-400 text-right">© 2024 Travler's Journey. All Right Reserved </div>
            </div>
        </div>
    </div>
</template>
<script>
// Services'i import ettik
import services from '@/services'

export default {
    data() {
        return {
            username: "",
            password: "",
        }
    },
    methods: {
        onChangeUsername(e) {
            this.username = e.target.value
        },
        onChangePassword(e) {
            this.password = e.target.value
        },
        handleSubmit(e) {
            e.preventDefault();
            this.authLogin();
        },
        async authLogin() {
            try {
                const response = services.login(
                    this.username,
                    this.password,
                );
                console.log(`Login response: ${response}`);
            } catch (error) {
                console.log(`Login response ${error}`)
            }
        }
    },
}
</script>
