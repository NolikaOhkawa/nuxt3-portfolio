<template>
  <header id="header" class="header">
    <NuxtLink to="/"><h1>NORIKA OKAWA</h1> </NuxtLink>

    <nav class="global_nav __pc">
      <ul class="global_nav_box">
        <li class="global_nav_item">
          <NuxtLink to="/"><p class="global_nav_item_text">HOME</p> </NuxtLink>
        </li>
        <li class="global_nav_item">
          <NuxtLink to="/#about"
            ><p class="global_nav_item_text">ABOUT</p>
          </NuxtLink>
        </li>
        <li class="global_nav_item">
          <NuxtLink to="/#cases"
            ><p class="global_nav_item_text">WORKS</p>
          </NuxtLink>
        </li>
        <li class="global_nav_item">
          <NuxtLink to="/#company"
            ><p class="global_nav_item_text">CONTACT</p>
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <TheBurger :active="active" @toggle-menu="toggleActive"></TheBurger>

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
.header {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 998;
  @include md() {
    height: 52px;
  }
  .logo_pi {
    margin-left: 20px;
    height: 20px;
    @include md() {
      margin-left: 1.4;
      height: 15px;
    }
  }

  .global_nav {
    height: 60px;
    @include md() {
      &.__pc {
        display: none;
      }
    }
    .global_nav_box {
      height: 100%;
      display: flex;
      .global_nav_item {
        margin: 0 20px;
        display: flex;
        align-items: center;
        text-align: center;
        .sr-only {
          display: none;
        }
        .global_nav_item_text {
          font-size: 1.3rem;
          font-weight: bold;
          letter-spacing: 0.08em;
          line-height: 1;
        }
        .global_nav_item_text_en {
          font-size: 1rem;
          font-weight: bold;
          color: $primary-100;
        }
        &.__contact {
          background: $primary-100;
          margin: 0;
          padding: 0 20px;
          .global_nav_item_text,
          .global_nav_item_text_en {
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
