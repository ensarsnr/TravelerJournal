<template>
  <div class="min-h-screen bg-gray-100">
    <NavbarComp />

    <div class="container mx-auto mt-4">
      <div class="grid grid-cols-10 gap-4">
        <div class="col-span-3 p-4">
          <SideCard />
        </div>
        <div class="col-span-7 p-4">
          <div class="flex flex-col w-4/5 bg-black">
            <div class="flex">
              <div class="m-1">pp</div>
              <div class="m-1">kullanıcıadı</div>
            </div>
            <div class="h-52 bg-orange-400">IMG</div>
            <div>beğenme, kaydetme</div>
            <div>beğeni saysı</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showModal">
    <AddPostComp :exitModal="exitModal" />
  </div>
  <div @click="showModal = true" class='fixed bottom-0 w-full'>
    <button class='bottom-0 my-8 float-right mr-5 h-16 w-16 bg-blue-400 text-white text-4xl  tracking-wide rounded-full focus:outline-none'>+</button>
</div>
</template>

<script>
import NavbarComp from "../components/home/NavbarComp.vue";
import SideCard from "../components/home/SideCardComp.vue";
import AddPostComp from "@/components/home/AddPostComp.vue";

export default {
  components: { NavbarComp, SideCard, AddPostComp },

  mounted() {
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
    };
  },

  methods: {
    exitModal () {
      this.showModal = !this.showModal;
    }
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
