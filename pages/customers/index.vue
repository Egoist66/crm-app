<script setup lang="ts">
import type { ICustomer } from '~/types/deals.types';



useHead({
  titleTemplate: "%s - Customers",
  title: 'RazorCRM',
})


const { isLoading, data, refetch, isRefetching } = useCustomersTable()



</script>

<template>
  <div  :class="{'refetching': isRefetching}">

    <h1 class="font-bold text-2xl mb-10">Customers</h1>
    <button @click="refetch()" class="btn block mb-10 transition-colors hover:text-primary">
      <Icon :class="{ 'rotate-loader': isRefetching }" title="Refresh" size="25" name="mdi:refresh" />
    </button>
    <h2 class="text-center text-2xl" v-if="isLoading">Loading...</h2>


    <UiTable :class="isRefetching ? 'opacity-50 blur-sm transition-all' : 'transition-all'" v-else>
      <UiTableHeader>
        <UiTableRow>
          <UiTableHead class="w-[200px] text-primary">Avatar</UiTableHead>
          <UiTableHead class="w-[300px] text-primary">Name</UiTableHead>
          <UiTableHead class="w-[300px] text-primary">Email</UiTableHead>
          <UiTableHead :style="{color: '#4ADE80'}">Source</UiTableHead>
        </UiTableRow>
      </UiTableHeader>

      <UiTableBody>
        <UiTableRow class="cursor-pointer hover:bg-black/10" v-for="customer in (data?.documents as unknown as ICustomer[])" :key="customer.$id">

          <UiTableCell>
            <NuxtLink :to="`/customers/edit/${customer.$id}`">
              <NuxtImg :quality="20" :loading="'lazy'" :fit="'cover'" class="rounded-full" :alt="customer.name"
                width="100" :src="customer.avatar_url" />
            </NuxtLink>
          </UiTableCell>


          <UiTableCell class="font-medium">
            {{ customer.name }}
          </UiTableCell>


          <UiTableCell>
            {{ customer.email }}
          </UiTableCell>


          <UiTableCell>
            {{ customer.from_source }}
          </UiTableCell>

        </UiTableRow>
      </UiTableBody>


    </UiTable>


  </div>
</template>

<style scoped>
 

</style>
