<template>
  <div class="top">
    <the-header :active="menuActive" @toggle-menu="toggleMenu"></the-header>
    <!-- <p class="k-content">lorem ipsum</p> -->
    <section id="about">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatibus, quibusdam, quia, quos voluptatem voluptatum quod
        voluptates quas doloribus quidem natus. Quisquam voluptatibus,
        quibusdam, quia, quos voluptatem voluptatum quod voluptates quas
        doloribus quidem natus.
      </p>
    </section>
    <section id="contact">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatibus, quibusdam, quia, quos voluptatem voluptatum quod
        voluptates quas doloribus quidem natus. Quisquam voluptatibus,
        quibusdam, quia, quos voluptatem voluptatum quod voluptates quas
        doloribus quidem natus.
      </p>
    </section>
  </div>
</template>

<script setup>
// import { createApp, ref } from 'vue';
import { ref } from 'vue';
const menuActive = ref(false);
const toggleMenu = () => {
  menuActive.value = !menuActive.value;
};
</script>
<style lang="scss" scoped>
.k-content {
  @include k-border-debug;
}
</style>
