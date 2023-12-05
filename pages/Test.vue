<template>
  <div class="test">
    <the-header :active="menuActive" @toggle-menu="toggleMenu"></the-header>
    <section>
      <div class="wrapper w-5/6 mx-auto">
        <TheDropdown />
      </div>
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

<style scoped lang="scss">
.test {
}
</style>
