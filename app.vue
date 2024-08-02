<script setup lang="ts">

 const config = useRuntimeConfig()
  setClientProjectEndpoint(config.public.APP_WRITE_ID)

</script>

<template>
  <NuxtLoadingIndicator color="var(--primary)" :height="5" :duration="2000" />
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
  
</template>

<style lang="css">
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
