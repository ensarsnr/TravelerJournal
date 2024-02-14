<template>
  <!-- component -->
  <div class="fixed z-10 top-0 w-full h-full flex bg-black bg-opacity-60">
    <div class="extraOutline p-4 bg-white w-max bg-whtie m-auto rounded-lg">
      <div
        class="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg"
        style="width: 450px"
      >
        <svg
          class="text-indigo-500 w-24 mx-auto mb-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
        <div class="input_field flex flex-col w-max mx-auto text-center">
          <label v-if="!image">
            <input
              class="text-sm cursor-pointer w-36 hidden"
              @change="onChangeImage"
              type="file"
              multiple
            />
            <div
              class="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500"
            >
              Fotoğraf Seç
            </div>
          </label>
          <label v-else>
            <img :src="image" class="max-w-full max-h-36 mx-auto mb-2" />
          </label>
        </div>
      </div>
      <div class="mt-5 flex justify-end gap-4">
        <button @click="exitModal" class="bg-red-500 rounded-lg px-4 text-white font-bold py-2">
          İptal
        </button>
        <button @click="uploadImage" class="bg-green-500 rounded-lg px-4 text-white font-bold py-2">
          Paylaş
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import services from "../../services";

export default {
  props: ["exitModal"],
  data() {
    return {
      preview: true,
      image: "",
      file: "",
      caption: "",
    };
  },
  methods: {
  onChangeImage(e) {
    const image = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (e) => {
      this.image = e.target.result;
      this.file = image; 
      console.log(this.image);
    };
  },
  async uploadImage() {
    window.location.reload();
    if (!this.file) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("image", this.file);

    try {
      const result = await services.uploadImage(formData);
      console.log("Image upload successful:", result);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  },
},

};
</script>
