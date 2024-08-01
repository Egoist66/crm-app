<script setup lang="ts">

const {logout} = useLogin()
</script>

<template>
  <aside class="px-5 shadow-lg py-8 bg-sidebar h-full relative w-full">
    <NuxtLink class="mb-10 block" to="/">
      <NuxtImg class="mx-auto" quality="100" alt="app logo" width="100" src="/logo.svg" />
    </NuxtLink>
    <button title="Logout" @click="logout()" class="absolute top-2 right-3 transition-colors hover:text-primary">
      <Icon :size="22" name="line-md:logout" />
    </button>

    <LayoutNavMenu />
  </aside>
</template>

<style lang="scss">
.bg-sidebar {
  background-color: var(--card);
}
</style>
