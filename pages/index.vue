<template>
  <div class="text-asd">
    HOME
    <NuxtLink to="/blog">Go To Blog</NuxtLink>
  </div>
</template>

<script setup>
useHead({
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ],
});
</script>