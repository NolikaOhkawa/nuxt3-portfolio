<template>
  <div
    id="burger"
    :class="{
      active: active,
    }"
    @click="toggleActive"
  >
    <button type="button" class="burger_button" title="Menu">
      <span class="burger_bar burger_bar__1"></span>
      <span class="burger_bar burger_bar__2"></span>
    </button>
    <div v-show="active" class="navbarNav">
      <div class="wrapper">
        <NuxtLink to="/"><h1>NORIKA OKAWA</h1></NuxtLink>
        <ul class="navbar_nav">
          <li class="nav_item active">
            <NuxtLink to="/"
              >ホーム<span class="nav_en">Home</span>
              <!-- <span class="sr-only">(current)</span> -->
            </NuxtLink>
          </li>
          <li class="nav_item">
            <NuxtLink to="/services"
              >サービス<span class="nav_en">Services</span></NuxtLink
            >
          </li>
          <li class="nav_item">
            <NuxtLink to="/cases"
              >事例<span class="nav_en">Cases</span></NuxtLink
            >
          </li>
          <li class="nav_item">
            <NuxtLink to="/company"
              >会社概要<span class="nav_en">Company</span></NuxtLink
            >
          </li>
          <li class="nav_item">
            <NuxtLink to="/seminars"
              >セミナー<span class="nav_en">Seminars</span></NuxtLink
            >
          </li>
          <li class="nav_item">
            <NuxtLink to="/recruits"
              >採用情報<span class="nav_en">Recruit</span></NuxtLink
            >
          </li>
          <li class="nav_item">
            <NuxtLink to="/information"
              >お知らせ<span class="nav_en">News</span></NuxtLink
            >
          </li>
          <li class="nav_item">
            <NuxtLink to="/contact"
              >お問い合わせ<span class="nav_en">Contact</span></NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheBurger',
  props: {
    active: {
      type: Boolean,
      required: true,
      default: false,
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
@import '../assets/scss/_vars.scss';

.hidden {
  visibility: hidden;
}
button {
  cursor: pointer;
}
button:focus {
  outline: 0;
}
.burger_button {
  position: relative;
  height: 30px;
  width: 40px;
  display: block;
  z-index: 999;
  margin-right: 1.4rem;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  pointer-events: all;
  transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  .burger_bar {
    background-color: $primary-100;
    position: absolute;
    top: 50%;
    height: 2px;
    margin-top: -1px;
    transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .burger_bar__1 {
    right: 0;
    left: 0;
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
    top: 40%;
  }
  .burger_bar__2 {
    right: 10px;
    left: 0;
    transform-origin: 50% 50%;
    transform: scaleX(1);
  }
  .burger_button:hover {
    .burger_bar__1 {
      transform: scaleX(1);
    }
    .burger_bar__2 {
      transform: scaleY(6px);
      top: 60%;
    }
    // .no-touchevents .burger_bar__2:hover {
    //   transform: scaleX(1);
    // }
  }
}
#burger {
  .navbarNav {
    // transition: background 250ms ease-in-out, transform 150ms ease !important;
    // -webkit-appearance: none;
    // -moz-appearance: none;
  }
  &.active {
    .burger_button {
      margin-top: 14px;
      transform: rotate(-180deg);
      .burger_bar {
        background-color: lighten(#fff, 10);
        z-index: 999;
      }
      .burger_bar__1 {
        transform: rotate(45deg);
        top: 50%;
      }
      // .burger_bar__2 {
      //   opacity: 0;
      // }
      .burger_bar__2 {
        transform: rotate(-45deg);
        right: 0;
        top: 50%;
      }
    }
    .navbarNav {
      background: $primary-100;
      color: #fff;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 998;
      height: 100vh;
      .logo_pi__white {
        margin: 18px 0 1.4rem 0;
        height: 15px;
      }

      a {
        color: #fff;
      }
      .navbar_nav {
        margin: 41px 0 0;

        .nav_item {
          margin-bottom: 1.6rem;
          .nav_en {
            font-size: 1.2rem;
            display: block;
            margin-left: 2px;
            margin-top: 2px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1101px) {
  #burger {
    display: block;
  }
}

@media screen and (min-width: 1100px) {
  #burger {
    display: none;
  }
}
</style>
