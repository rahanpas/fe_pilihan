<!-- <script setup>
definePageMeta({
  layout: "blank",
  middleware: "guest",
});
</script> -->
<template>
  <section>
    <p>This page will be displayed at the /about route.</p>
    {{ selected }}
  </section>
</template>


<script setup>
definePageMeta({
  layout: "blank",
  // middleware: "guest",
});
// export default {
//   layout: "blank",
// };
</script>

<style>
</style>