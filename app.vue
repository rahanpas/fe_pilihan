<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    const titleBase = "Admin One Vue 3 Tailwind";

    return titleChunk ? `${titleChunk} - ${titleBase}` : titleBase;
  },
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
