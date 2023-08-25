<template>
  <header
    id="header"
    class="header w-full h-16 items-center styicky top-0 drop-shadow-2xl z-998"
  >
    <div class="h-full w-5/6 mx-auto flex justify-between items-center">
      <!-- <NuxtLink to="/"
        ><h1 class="text-3xl font-bold">NORIKA OKAWA</h1>
      </NuxtLink> -->

      <nav class="global_nav __pc h-60px">
        <ul class="global_nav_box h-full flex items-center">
          <li class="global_nav_item mx-4">
            <NuxtLink to="/"
              ><p class="global_nav_item_text">HOME</p>
            </NuxtLink>
          </li>
          <li class="global_nav_item mx-4">
            <NuxtLink to="/#about"
              ><p class="global_nav_item_text">ABOUT</p>
            </NuxtLink>
          </li>
          <li class="global_nav_item mx-4">
            <NuxtLink to="/#cases"
              ><p class="global_nav_item_text">WORKS</p>
            </NuxtLink>
          </li>
          <li class="global_nav_itemm mx-4">
            <NuxtLink to="/#company"
              ><p class="global_nav_item_text">CONTACT</p>
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <TheBurger :active="active" @toggle-menu="toggleActive"></TheBurger>
    </div>

    <!-- <TheBurger :active="active" @toggle-menu="$listeners['click']"></TheBurger> -->
  </header>
</template>
<script>
export default {
  props: {
    active: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  methods: {
    toggleActive() {
      this.$emit('toggle-menu');
    },
  },
};
</script>

<style scoped lang="scss">
//   .global_nav {
//     height: 60px;
//     @include md() {
//       &.__pc {
//         display: none;
//       }
//     }
//     .global_nav_box {
//       .global_nav_item {
//         margin: 0 20px;
//         display: flex;
//         align-items: center;
//         text-align: center;
//         .sr-only {
//           display: none;
//         }
//         .global_nav_item_text {
//           font-size: 1.3rem;
//           font-weight: bold;
//           letter-spacing: 0.08em;
//           line-height: 1;
//         }
//         .global_nav_item_text_en {
//           font-size: 1rem;
//           font-weight: bold;
//           color: $primary-100;
//         }
//         &.__contact {
//           background: $primary-100;
//           margin: 0;
//           padding: 0 20px;
//           .global_nav_item_text,
//           .global_nav_item_text_en {
//             color: #fff;
//           }
//         }
//       }
//     }
//   }
// }
</style>
