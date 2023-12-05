<template>
  <div class="">
    <!-- <div class="flex flex-wrap -mx-4"> -->
    <div class="subgridCard_group">
      <SubgridCard />
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
    tag: [
      {
        name: 'Responsive Design',
        url: '/cats/responsive-design',
      },
      {
        name: 'Web Development',
        url: '/cats/web-development',
      },
      {
        name: 'CSS',
        url: '/cats/css',
      },
      {
        name: 'Media Queries',
        url: '/cats/media-queries',
      },
    ],
  },
  {
    img: 'https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg',
    title: 'Exploring the Power of CSS Grid Layout',
    content:
      "Dive into the wonders of CSS Grid Layout, a revolutionary way to create complex web layouts with ease. We'll cover grid containers, tracks, and areas, and demonstrate how to achieve both simple and intricate layouts. Discover how this powerful tool can streamline your frontend development workflow.",
    date: 'Sep 4, 2023',
    tag: [
      {
        name: 'CSS Grid',
        url: '/cats/css-grid',
      },
      {
        name: 'Web Layouts',
        url: '/cats/web-layouts',
      },
      {
        name: 'Frontend Development',
        url: '/cats/frontend-development',
      },
      {
        name: 'CSS',
        url: '/cats/css',
      },
    ],
  },
  {
    img: 'https://tecdn.b-cdn.net/img/new/standard/nature/188.jpg',
    title: 'Optimizing Performance with Image Compression',
    content:
      "Slow-loading images can impact user experience and SEO. In this article, we'll explore the art of image compression. Learn how to balance image quality and file size, and discover tools and techniques to efficiently compress images while maintaining visual integrity. Boost your website's performance today!",
    date: 'OCt 8, 2023',
    tag: [
      {
        name: 'Performance Optimization',
        url: '/cats/performance-optimization',
      },
      {
        name: 'Image Compression',
        url: '/cats/image-compression',
      },
      {
        name: 'Web Performance',
        url: '/cats/web-performance',
      },
      {
        name: 'SEO',
        url: '/cats/seo',
      },
    ],
  },
  {
    img: 'https://tecdn.b-cdn.net/img/new/standard/nature/100.jpg',
    title: 'Optimizing Performance with Image Compression',
    content:
      "Slow-loading images can impact user experience and SEO. In this article, we'll explore the art of image compression. Learn how to balance image quality and file size, and discover tools and techniques to efficiently compress images while maintaining visual integrity. Boost your website's performance today!",
    date: 'OCt 8, 2023',
    tag: [
      {
        name: 'Performance Optimization',
        url: '/cats/performance-optimization',
      },
      {
        name: 'Image Compression',
        url: '/cats/image-compression',
      },
      {
        name: 'Web Performance',
        url: '/cats/web-performance',
      },
      {
        name: 'SEO',
        url: '/cats/seo',
      },
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

<style lang="scss">
.subgridCard_group {
  display: flex;
  justify-content: space-between;
}
</style>
