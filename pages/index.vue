import { useAuthStore } from '../store/auth.store';
<script setup lang="ts">

useHead({
  titleTemplate: "%s - Dashboard",
  title: 'RazorCRM',
})

const { isAuth } = useAuthStore()


const { data, isLoading, isRefetching, refetch } = useDashboard()

onMounted(() => {
  console.log(data)
})
</script>

<template>
  <div :class="$route.name">

    <h1 v-if="isAuth()" class="font-bold text-2xl mb-5">Dashboard</h1>


    <button @click="refetch()" class="btn block mb-10 transition-colors hover:text-primary">
      <Icon :class="{ 'rotate-loader': isRefetching }" title="Refresh" size="25" name="mdi:refresh" />
    </button>

    <div class="text-center text-2xl" v-if="isLoading">Loading...</div>
    <Dashboard v-else :class="{updating: isRefetching, dashboard: true}"  :refetch="refetch"   :data="data" />
  </div>


</template>

<style scoped>

.btn {
  @apply text-lg;
}

.rotate-loader {
  animation: rotate 1s infinite linear;
  transition: 0.3s all ease;

}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

</style>
