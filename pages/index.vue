import { useAuthStore } from '../store/auth.store';
<script setup lang="ts">

 useHead({
  titleTemplate: "%s - Dashboard",
  title: 'RazorCRM',
 })

 const {isAuth} = useAuthStore()




</script>

<template>
  <div :class="$route.name">

 

    <h1 v-if="isAuth()" class="font-bold text-2xl mb-10">Dashboard</h1>


    <div class="flex flex-wrap items-center justify-between">
      <UiCard draggable="true" class="shadow:sm mb-3 w-1/2">
        <UiCardHeader role="button">name card</UiCardHeader>
        <UiCardContent>Company</UiCardContent>
        <UiCardFooter>Date</UiCardFooter>
      </UiCard>

      
    </div>

  </div>


</template>

<style scoped></style>
