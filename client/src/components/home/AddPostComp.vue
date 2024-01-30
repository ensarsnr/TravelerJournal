<template>
  <div
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    ></div>
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div
        class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
        >
          <div v-if="preview" class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="flex items-center justify-center w-full">
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100"
                >
                  <div
                    class="flex flex-col items-center justify-center pt-5 pb-6"
                  >
                    <svg
                      class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      ></path>
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    v-if="!image"
                    @input="onChangeImage"
                    type="file"
                  accept="image/jpeg"
                  class="hidden"
                    />
                  <!-- Eğer image boş değilse ve geçerli bir resim varsa önizlemeyi göster -->
                  <div v-else alt="Preview" class="text-center">
                    <div class="mb-5">
                      Resim seçildi önizlemek için buttona tıkla.
                    </div>
                    <button
                      @click="clickPreview"
                      class="px-4 py-2 rounded-lg text-white bg-gray-300"
                    >
                      Önizleme
                    </button>
                  </div>
                </label>
              </div>
              <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3
                  class="text-base font-semibold leading-6 text-gray-900"
                  id="modal-title"
                ></h3>
                <div class="mt-2"></div>
              </div>
            </div>
          </div>
          <div class="w-full h-2/4" v-else>
            <img :src="image" class="w-full h-2/4 object-cover" />
          </div>
          <div class="bg-gray-50 px-4 py-3 float-end grid grid-cols-2">
            <div class="flex justify-center bg">
              <input
                :v-model="caption"
                class="m-auto w-full bg-gray-200 rounded-lg p-2"
                placeholder="Hakkında"
              />
            </div>
            <div class="flex justify-around">
              <button
                @click="uploadImage"
                type="button"
                class="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
              >
                Gönder
              </button>
              <button
                @click="exitModal"
                type="button"
                class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                İptal et
              </button>
            </div>
          </div>
        </div>
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
        this.previewImage = e.target.result;
        console.log(this.previewImage);
      };
    },
    clickPreview() {
      this.preview = false;
    },
    handleFileChange(event) {
      this.file = event.target.files[0];
      console.log(this.file);
    },
    async uploadImage() {
      // burada sadece resim atayalım ve sadece comment atamalık yer yapalım update yapsın aslında
      // bunu yaptığında yüklenen resme update yapılacak
      // önce resim yüklenecek yüklendikten sonra update işlemi yapılsın
      if (!this.file) {
        console.error("No file selected");
        return;
      }

      const formData = new FormData();
      formData.append("image", this.file);

      try {
        const result = await services.uploadImage(formData);
        console.log("Image upload successful:", result);
        // Handle success, e.g., show a success message or redirect the user
      } catch (error) {
        console.error("Error uploading image:", error);
        // Handle error, e.g., show an error message to the user
      }
    },
  },
};
</script>
