<template>
  <!-- <object
    class="inline-block px-2 py-1 mr-1 text-xs font-medium text-neutral-600 bg-neutral-100 rounded"
  >
    <span>
      <slot />
    </span>
  </object> -->
  <nuxt-link :to="url">
    <!-- <object> -->
    <span
      class="inline-block px-2 py-1 mr-1 text-xs font-medium text-neutral-600 bg-neutral-100 rounded"
    >
      <slot />
    </span>
    <!-- </object> -->
  </nuxt-link>
</template>

<script setup>
// import { defineProps } from 'vue';
// const props = defineProps(['url']);

// const { count } = defineProps<{ count: number }>();
</script>
