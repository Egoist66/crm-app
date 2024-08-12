<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>

  <div class="container h-screen flex flex-col justify-center">
    <div class="flex items-center justify-center gap-2">
      <Icon :name="!props.error?.statusCode ? 'line-md:alert-octagon' : 'line-md:alert-octagon-exclamation'"
        class="text-red-500" size="24" />
      <h2 :class="!props.error?.statusCode ? 'text-red-500' : 'text-red-600'" class="text-2xl font-semibold">
        {{ props.error?.statusCode }} {{ props.error?.message }}
      </h2>
    </div>

    <div class="flex items-center mt-5 justify-center gap-2">
      <div>
        <NuxtLink to="/" class="px-6 py-2 block text-white rounded-md bg-primary-500 hover:bg-primary-600">
          Go to homepage
        </NuxtLink>
      </div>

      
      <button @click="handleError" class="px-6 py-2 text-white rounded-md  bg-primary-500 hover:bg-primary-600">
        Clear error
      </button>
      
    </div>

  </div>
</template>

<style lang="scss" scoped>
.icon-container {
  @apply flex items-center justify-center gap-2;
}
</style>
