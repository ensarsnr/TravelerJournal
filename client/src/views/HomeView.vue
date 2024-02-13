<template>
  <div class="min-h-screen bg-gray-100">
    <NavbarComp />

    <div class="container mx-auto mt-4">
      <div class="grid grid-cols-10 gap-4">
        <div class="col-span-3 p-4">
          <SideCard />
        </div>
        <div class="col-span-7 p-4 gap-4">
          <div v-for="post in posts" :key="post" class="mt-5 flex flex-col w-4/5 rounded-lg border-gray-300 border-[1px]">
            <div class="flex p-3 justify-between">
              <div class="flex">
                <div class="m-1">
                  <div class="w-16 h-16 bg-black rounded-full"></div>
                </div>
                <div class="m-1 flex flex-col">
                  <span class="font-bold">{{ post.user.username }}</span>
                  <span class="text-sm text-gray-400">{{ post.user.followers.length }} takipçi</span>
                  <span class="text-sm text-gray-400">{{
                    formatDateTime(post.createdAt)
                  }}</span>
                </div>
              </div>
              <div>
                <button
                  class="mt-2 rounded-md px-4 py-2 bg-blue-400 text-white font-bold duration-100 hover:duration-10 hover:bg-blue-500">
                  Takip et
                </button>
              </div>
            </div>
            <div class="flex max-w-full h-96 m-auto rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img class="object-cover"
                :src="require(`../../../server/src/uploads/${post.image}`)" />
            </div>
            <div class="flex flex-col p-3">
              <div class="flex justify-between mt-3">
                <div>{{ post.likes.length }}</div>
                <div>Kaydetme sayısı</div>
              </div>
              <div class="border-gray-400 border-t-[1px] mt-3"></div>
              <div class="grid grid-cols-2 mt-3">
                <div
                  class="rounded-md text-center duration-500 hover:duration-500 hover:bg-gray-200 hover:cursor-pointer p-2">
                  Beğen
                </div>
                <div
                  class="rounded-md text-center duration-500 hover:duration-500 hover:bg-gray-200 hover:cursor-pointer p-2">
                  Kaydet
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showModal">
    <AddPostComp :exitModal="exitModal" />
  </div>
  <div @click="showModal = true" class="fixed bottom-0 w-full">
    <button
      class="bottom-0 my-8 float-right mr-5 h-16 w-16 bg-blue-400 text-white text-4xl tracking-wide rounded-full focus:outline-none">
      +
    </button>
  </div>
</template>

<script>
import NavbarComp from "../components/home/NavbarComp.vue";
import SideCard from "../components/home/SideCardComp.vue";
import AddPostComp from "@/components/home/AddPostComp.vue";
import services from "@/services";

export default {
  components: { NavbarComp, SideCard, AddPostComp },

  mounted() {
    this.getImages();
    if (localStorage.getItem("reloaded")) {
      localStorage.removeItem("reloaded");
    } else {
      localStorage.setItem("reloaded", "1");
      location.reload();
    }
  },

  data() {
    return {
      count: true,
      showModal: false,
      posts: [],
    };
  },

  methods: {
    exitModal() {
      this.showModal = !this.showModal;
    },
    async getImages() {
      try {
        const response = await services.getImages();
        this.posts = response.data.posts;
        console.log(response.data.posts);
      } catch (error) {
        console.log(`getImages error client: ${error}`);
      }
    },
    formatDateTime(dateTimeString) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      const formattedDateTime = new Date(dateTimeString).toLocaleDateString(
        "tr",
        options
      );
      return formattedDateTime;
    },
  },

  beforeRouteEnter(to, from, next) {
    const userToken = localStorage.getItem("userToken");

    if (!userToken) {
      next("/");
    } else {
      next();
    }
  },
};
</script>

<style>
body {
  background-color: rgb(243, 243, 243);
}
</style>
