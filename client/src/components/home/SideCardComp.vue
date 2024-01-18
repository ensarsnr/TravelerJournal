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
              <td class="px-2 py-2 text-end text-gray-500">Ayarlar</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import services from "@/services";

export default {
  data() {
    return {
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
        console.log(response);
        return response.data.user;
      } catch (error) {
        console.log(`Get profile: ${error}`);
        throw error;
      }
    },
    exitProflie () {
      localStorage.clear();
      this.$router.push("/");
    }
  },
};
</script>
