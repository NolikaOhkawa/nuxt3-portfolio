<template>
  <div class="flex flex-wrap -mx-4">
    <div
      v-for="(item, index) in contents"
      :key="index"
      class="max-w-xs rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
    >
      <img :src="item.img" alt="Image" class="rounded-t-lg" />
      <div class="p-6">
        <h5
          class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
        >
          {{ item.title }}
        </h5>
        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          <!-- make it this shorter when the DOM is loaded -->
          {{ item.content }}
        </p>
        <ButtonPrimary>Learn more</ButtonPrimary>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const shortenContent = (text, maxLength) => {
  if (text && text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }
  return text;
};

const contents = ref([
  {
    img: 'https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg',
    title: 'Mastering Responsive Design Techniques',
    content:
      "In this article, we'll delve into the world of responsive web design. Learn how to create fluid layouts, implement media queries, and optimize images for various screen sizes. With the increasing use of mobile devices, mastering responsive design is essential for every frontend developer.",
    date: 'Aug 20, 2023',
    tag: ['Responsive Design', 'Web Development', 'CSS', 'Media Queries'],
  },
  {
    img: 'https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg',
    title: 'Exploring the Power of CSS Grid Layout',
    content:
      "Dive into the wonders of CSS Grid Layout, a revolutionary way to create complex web layouts with ease. We'll cover grid containers, tracks, and areas, and demonstrate how to achieve both simple and intricate layouts. Discover how this powerful tool can streamline your frontend development workflow.",
    date: 'Sep 4, 2023',
    tag: ['CSS Grid', 'Web Layouts', 'Frontend Development', 'CSS'],
  },
  {
    img: 'https://tecdn.b-cdn.net/img/new/standard/nature/188.jpg',
    title: 'Optimizing Performance with Image Compression',
    content:
      "Slow-loading images can impact user experience and SEO. In this article, we'll explore the art of image compression. Learn how to balance image quality and file size, and discover tools and techniques to efficiently compress images while maintaining visual integrity. Boost your website's performance today!",
    date: 'OCt 8, 2023',
    tag: [
      'Performance Optimization',
      'Image Compression',
      'Web Performance',
      'SEO',
    ],
  },
  {
    img: 'https://tecdn.b-cdn.net/img/new/standard/nature/100.jpg',
    title: 'Optimizing Performance with Image Compression',
    content:
      "Slow-loading images can impact user experience and SEO. In this article, we'll explore the art of image compression. Learn how to balance image quality and file size, and discover tools and techniques to efficiently compress images while maintaining visual integrity. Boost your website's performance today!",
    date: 'OCt 8, 2023',
    tag: [
      'Performance Optimization',
      'Image Compression',
      'Web Performance',
      'SEO',
    ],
  },

  // Add more image URLs as needed
]);
// methods to shorter the content into 150 caractor when the DOM is loaded
onMounted(() => {
  for (let i = 0; i < contents.value.length; i++) {
    contents.value[i].content = shortenContent(contents.value[i].content, 110);
    console.log(contents.value[i].content);
  }
});
</script>
