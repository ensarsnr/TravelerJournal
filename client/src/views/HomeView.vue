<template>
  <div class="min-h-screen bg-gray-100">
    <NavbarComp />

    <div class="container mx-auto mt-4">
      <div class="grid grid-cols-10 gap-4">
        <div class="col-span-2 bg-gray-300 p-4"> <!-- Adjust background color and padding as needed -->
          <!-- Content for the left column -->
          <SideCard />
        </div>

        <div class="col-span-8 bg-gray-500 p-4"> <!-- Adjust background color and padding as needed -->
          <!-- Content for the main column -->
          Main Content
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
};
</script>
