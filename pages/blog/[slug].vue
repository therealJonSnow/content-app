<template>
  <div>
    <h2>{{ data.title }}</h2>
    <ContentRenderer :value="data" />
  </div>
</template>

<script setup>
const { path } = useRoute()

const { data } = await useAsyncData(`blog/${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})
</script>