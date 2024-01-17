<template>
  <div class="max-w-xs">
    <div class="bg-white shadow-xl rounded-lg py-3">
      <div class="photo-wrapper p-2">
        <img class="w-32 h-32 bg-black rounded-full mx-auto" />
      </div>
      <div class="p-2">
        <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
          Joh Doe
        </h3>
        <table class="text-xs my-3">
          <tbody>
            <tr>
              <td class="px-2 py-2 text-gray-500 font-semibold">
                Paylaşımlar:
              </td>
              <td class="px-2 py-2">10</td>
            </tr>
            <tr>
              <td class="px-2 py-2 text-gray-500 font-semibold">Email:</td>
              <td class="px-2 py-2">email@email.com</td>
            </tr>
            <tr>
              <td class="px-2 py-2 text-gray-500">Çıkış yap</td>
              <td class="px-2 py-2 text-end text-gray-500">Ayarlar</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            userName: ""
        }
    },
};
</script>
