<template>
  <div>
    <div class="colsWrapper flex mb-4">
      <div class="dropdownWrapper w-1/2">
        <div class="batchPositionDropdown flex">
          <div class="batchPositionDropdownLeft w-1/4">
            <button
              @click="togglePositionDropdown"
              class="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
            >
              Position
            </button>
            <ul
              v-show="isPositionDropdown"
              class="mt-2 py-2 w-48 bg-white rounded-lg shadow-xl absolute"
            >
              <li v-for="position in batchPosition" :key="position.id">
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                  @click="selectPosition(position)"
                  >{{ position.text }}</a
                >
              </li>
            </ul>
          </div>
          <div class="batchPositionDropdownRight">
            <p>selectedPosition: {{ selectedPosition.text }}</p>
          </div>
        </div>

        <div class="batchSizeDropdown flex">
          <div class="batchSizeDropdownLeft w-1/4">
            <button
              @click="toggleSizeDropdown"
              class="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
            >
              Size
            </button>
            <ul
              v-show="isSizeDropdown"
              class="mt-2 py-2 w-48 bg-white rounded-lg shadow-xl absolute"
            >
              <li v-for="size in batchSize" :key="size.id">
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                  @click="selectSize(size)"
                  >{{ size.text }}</a
                >
              </li>
            </ul>
          </div>
          <div class="batchSizeDropdownRight">
            <p>selectedSize: {{ selectedSize.text }}</p>
          </div>
        </div>

        <!-- <div class="batchSizeDropdown">
          <button
            class="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
          >
            Size
          </button>
          <ul class="mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
            <li v-for="size in batchSize" :key="size.id">
              <a
                href="#"
                class="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                >{{ size.text }}</a
              >
            </li>
          </ul>
        </div> -->
      </div>
      <div class="imgWrapper w-1/2">
        <!-- icon photo -->
        <img
          src="https://source.unsplash.com/白い長袖シャツの女性-arPZr6tqsoA"
          alt=""
          class="avatarPhoto"
        />
        <img src="https://picsum.photos/200/300" alt="" class="avatarBadge" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { TEST_DROPDOWN } from '@/constants/index';
const batchPosition = ref(TEST_DROPDOWN.batchPosition);
const batchSize = ref(TEST_DROPDOWN.batchSize);
const isPositionDropdown = ref(false);
const isSizeDropdown = ref(false);

const selectedPosition = ref({ text: 'Left bottom', id: '1' });
const selectedSize = ref({ text: '20%', id: '20' });
// const selectedPositionText = ref('');

const selectPosition = (newVal) => {
  selectedPosition.value = newVal;
  isPositionDropdown.value = false;
};

const selectSize = (newVal) => {
  selectedSize.value = newVal;
  isSizeDropdown.value = false;
};

const updateAvatarPosition = (newVal) => {
  const badge = document.querySelector('.avatarBadge');

  switch (newVal.id) {
    case '1': // Left Bottom
      badge.style.bottom = '0';
      badge.style.left = '0';
      badge.style.top = 'auto';
      badge.style.right = 'auto';
      break;
    case '2': // Left Top
      badge.style.top = '0';
      badge.style.left = '0';
      badge.style.bottom = 'auto';
      badge.style.right = 'auto';
      break;
    case '3': // Right Top
      badge.style.top = '0';
      badge.style.right = '0';
      badge.style.bottom = 'auto';
      badge.style.left = 'auto';
      break;
    case '4': // Right Bottom
      badge.style.bottom = '0';
      badge.style.right = '0';
      badge.style.top = 'auto';
      badge.style.left = 'auto';
      break;
    default:
      break;
  }
};
const updateAvatarSize = (newVal) => {
  const badge = document.querySelector('.avatarBadge');
  badge.style.width = `${newVal.id}%`;
  badge.style.height = `${newVal.id}%`;
};

watch(
  () => selectedPosition.value,
  (newVal) => {
    updateAvatarPosition(newVal);
  }
);
watch(
  () => selectedSize.value,
  (newVal) => {
    updateAvatarSize(newVal);
  }
);

onMounted(() => {
  const badge = document.querySelector('.avatarBadge');
  badge.style.width = `${selectedSize.value.id}%`;
  badge.style.height = `${selectedSize.value.id}%`;
});

const togglePositionDropdown = () => {
  isPositionDropdown.value = !isPositionDropdown.value;
};
const toggleSizeDropdown = () => {
  isSizeDropdown.value = !isSizeDropdown.value;
};
</script>

<style lang="scss">
.batchPositionDropdown {
  margin-bottom: 50px;
}
.imgWrapper {
  position: relative;
  width: 100px;
  height: 100px;
  .avatarPhoto {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .avatarBadge {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: 0 0 0 2px #000;
    background-color: #fff;
    object-fit: cover;
  }
}
</style>
