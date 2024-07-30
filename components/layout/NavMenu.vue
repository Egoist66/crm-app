<script setup lang="ts">
import { menuData } from '~/router/router.map';


</script>

<template>
  <div>
    <NuxtLink
        :key="menuItem.name"
        :active-class="$route.path === menuItem.url ? 'text-white bg-gray-700' : 'text-white'"
        v-for="menuItem in menuData"
        :to="menuItem.url"
        class="flex items-center py-1 px-3 rounded-lg w-full hover:bg-gray-700 hover:shadow transition-all mb-2.5"
      >
      <Icon class="mr-3" :name="menuItem.icon" />
      <span>{{ menuItem.name }}</span>
    </NuxtLink>
  </div>
</template>

<style scoped></style>
