<template>
  <div class="max-w-xs">
    <div class="bg-white shadow-xl rounded-lg py-3">
      <div class="photo-wrapper p-2">
        <img
          class="w-32 h-32 bg-black rounded-full mx-auto"
          alt="Profil Fotoğrafı"
        />
      </div>
      <div class="p-2">
        <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
          {{ username }}
        </h3>
        <table class="text-xs my-3">
          <tbody>
            <tr>
              <td class="px-2 py-2 text-gray-500 font-semibold">
                Paylaşımlar:
              </td>
              <td class="px-2 py-2"></td>
            </tr>
            <tr>
              <td class="px-2 py-2 text-gray-500 font-semibold">Email:</td>
              <td class="px-2 py-2">{{ user.email }}</td>
            </tr>
            <tr>
              <td class="px-2 py-2 hover:text-gray-600 text-gray-500">
                <button @click="exitProflie">Çıkış yap</button>
              </td>
              <td class="px-2 py-2 text-end text-gray-500">
                <button @click="showSettings">Ayarlar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="show" class="text-red-500 text-8xl">
      <SettingsComp :exitSettings="exitSettings" :username="username" /> 
      </div>
    </div>
  </div>
</template>

<script>
import services from "@/services";
import SettingsComp from "../home/SettingsComp.vue";
export default {
  components:{SettingsComp},
  data() {
    return {
      show: false,
      user: {
        // profilePhoto: "", // Profil fotoğrafı
        postCount: 0, // Paylaşımlar sayısı
        email: "", // Email adresi
      },
      username: "",
    };
  },
  created() {
    this.profile().then((data) => {
      this.username = data.username;
      this.user = {
        email: data.email,
        // profilePhoto: data.profilePhoto,
      };
    });
  },

  methods: {
    async profile() {
      try {
        const response = await services.profile();
        return response.data.user;
      } catch (error) {
        console.log(`Get profile: ${error}`);
        throw error;
      }
    },
    showSettings() {
      this.show = !this.show;
    },
    exitSettings() {
      this.show = !this.show;
    },
    exitProflie() {
      localStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>
