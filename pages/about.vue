<template>
  <section>
    <p>This page will be displayed at the /about route. {{ apanih }}</p>
  </section>
</template>


<script setup lang="ts">
const apanih = ref("");
// console.log(import.meta.env.API_URL_ABC);
// const runtimeConfig = useRuntimeConfig()
// console.log(runtimeConfig.apiSecret)
definePageMeta({
  layout: "blank",
  // middleware: "guest",
});

onMounted(() => {
  apanih.value = "apaantih"

  window.Echo.private('testchannel')
    .listen('Test', (e) => {
      apanih.value = e
      console.log('test successful ' + e)
    })
  window.Echo.channel('trades')
    .listen('NewTrade', (e) => {
      console.log(e.trade);
    })
  // window.Echo.private('chat')
  //   .listen('MessageSent', (e) => {
  //     alert(e)
  //   });

});

</script>

<style></style>