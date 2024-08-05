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



    <h1 v-if="isAuth()" class="font-bold text-2xl mb-10">Dashboard</h1>

    <div class="text-center text-2xl" v-if="isLoading || isRefetching">Loading...</div>

    <div v-else class="flex flex-wrap gap-5 justify-between items-baseline">

      <div v-for="(column, index) in data" :key="column.id">

        <div class="rounded bg-slate-700 py-1 px-5 mb-2 text-center">
          {{ column.name }}
        </div>

        <div>
          <UiCard v-for="card in column.items" :key="card.id" draggable="true" class="shadow:sm mb-3 w-full">
            <UiCardHeader role="button"><b class="underlin">Deal Name - </b><span class="text-cyan-400">{{ card.title }}</span>
            </UiCardHeader>
            <UiCardContent><b class="underline">Company Name - </b> <span class="pl-2 text-primary">{{ card.companyName }}</span></UiCardContent>
            <UiCardFooter><b class="underline">Created At - </b> <span class="pl-2 text-sky-500">{{ new Date(card.$created_at).toLocaleString()
                }}</span></UiCardFooter>
          </UiCard>
        </div>

      </div>






    </div>

  </div>


</template>

<style scoped></style>
