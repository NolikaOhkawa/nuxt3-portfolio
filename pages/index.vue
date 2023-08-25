<template>
  <div class="top">
    <the-header :active="menuActive" @toggle-menu="toggleMenu"></the-header>
    <!-- <p class="k-content">lorem ipsum</p> -->
    <section id="fv" class="w-full">
      <div class="w-5/6 mx-auto items-center">
        <div class="fv_box">
          <img
            src="@/assets/img/icon.jpg"
            alt=""
            class="w-16 h-16 rounded-full drop-shadow-sm"
          />
          <h2 class="fv_title text-5xl font-bold text-black my-7">
            Frontend dev, UI/UX designer, <br />
            ...and big food lover.
          </h2>
          <p class="fv_text w-1/2 my-7">
            I'm Norika, a front-end developer based in California and Tokyo,
            Japan. I specialize in building Web sites and applications for
            companies and individuals. I love to create functional websites, and
            travel, eat foods around the world.
          </p>
          <ul class="flex w-1/6 justify-between">
            <li class="">
              <NuxtLink to="https://twitter.com/happyylemon" target="_blank">
                <Icon name="twitter" color="#555" />
              </NuxtLink>
            </li>
            <li class="">
              <NuxtLink
                to="https://www.instagram.com/s10124no/"
                target="_blank"
              >
                <Icon name="ig" color="#555" />
              </NuxtLink>
            </li>
            <li class="">
              <NuxtLink to="" target="_blank">
                <Icon name="github" color="#555" />
              </NuxtLink>
            </li>
            <li class="">
              <NuxtLink to="" target="_blank">
                <Icon name="linkedin" color="#555" />
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section id="ig_photos">
      <!-- <div v-if="cats" class="flex flex-wrap -mx-4"> -->
      <TopImageRow />
      <!-- </div> -->
      <!-- <div v-else-if="error" class="w-5/6 mx-auto items-center">
        <p>There was an error fetching the images.</p>
      </div> -->
      <!-- <chat-msg></chat-msg> -->
    </section>
    <section id="contact">
      <p class="w-5/6 mx-auto items-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatibus, quibusdam, quia, quos voluptatem voluptatum quod
        voluptates quas doloribus quidem natus. Quisquam voluptatibus,
        quibusdam, quia, quos voluptatem voluptatum quod voluptates quas
        doloribus quidem natus.
      </p>
    </section>
    <section id="updates">
      <div class="w-5/6 mx-auto items-center">
        <BlogCards />
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

// const params = ref('width=300&height=300');
// Define params wherever, through `defineProps()`, `useRoute()`, etc.
// const { data: post, error, refresh } = await useAsyncData('get', () =>
//   $fetch(`https://cataas.com/cat${params}`)
// );

// const { data: cats, error } = await useAsyncData('cats', () =>
//   // $fetch(`https://cataas.com/cat${params.value}`)
//   $fetch('https://cataas.com/cat?width=300&height=300')
// );

// console.log(cats._value);
</script>

<style lang="scss" scoped>
.k-content {
  @include k-border-debug;
}
</style>

<style scoped lang="scss">
.top {
  #fv {
    .fv_title {
      line-height: 1.25;
    }
  }
}
</style>
