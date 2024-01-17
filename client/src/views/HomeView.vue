<template>
  <div class="min-h-screen bg-gray-100">
    <NavbarComp />

    <div class="container mx-auto mt-4">
      <div class="grid grid-cols-10 gap-4">
        <div class="col-span-2 p-4">
          <SideCard />
        </div>
        <div class="col-span-8 p-4">
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
</template>

<script>
import NavbarComp from "../components/home/NavbarComp.vue";
import SideCard from "../components/home/SideCardComp.vue";

export default {
  components: { NavbarComp, SideCard },

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
