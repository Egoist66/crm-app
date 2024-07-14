<script setup lang="ts">


</script>

<template>
  <section :style="{minHeight: '100vh'}" class="app-grid">
    <LayoutSidebar/>
    <main>
      <slot />
    </main>
  </section>
</template>

<style scoped lang="scss">
  .app-grid {
    display: grid;
    grid-template-columns: 1fr 6fr;
  }
</style>
