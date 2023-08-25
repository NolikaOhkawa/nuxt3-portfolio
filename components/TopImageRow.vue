<template>
  <div class="flex flex-wrap -mx-4">
    <div
      v-for="(img, index) in images"
      :key="index"
      class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
    >
      <img
        :src="img.url"
        alt="Image"
        class="w-full h-auto rounded-lg shadow-md"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const images = ref([
  { url: 'http://placekitten.com/300/300' },
  { url: 'http://placekitten.com/300/300' },
  { url: 'http://placekitten.com/300/300' },
  { url: 'http://placekitten.com/300/300' },
  { url: 'http://placekitten.com/300/300' },

  // Add more image URLs as needed
]);
</script>
