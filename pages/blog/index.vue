<template>
  <div class="text-xl text-slate-500">
    BLOG
    <li v-for="post of posts" :key="post.slug">
      <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
    </li>
  </div>
</template>

<script setup>
const posts = await queryContent('/blog')
  .sort({ date: -1 }) // show latest articles first
  .find();
console.log(posts[0])
useHead({
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ],
});
</script>