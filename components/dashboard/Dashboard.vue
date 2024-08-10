<script setup lang="ts">
import dayjs from 'dayjs';
import type { IColumn } from './dashboard.types';

import CreateDeal from '../createdeal/CreateDeal.vue';


 defineProps<{
    data: IColumn[] | undefined,
    refetch?: () => void
 }>()


 const {handleDragOver, handleDrop, handleDragStart} = useDashboard()

</script>

<template>
  
  <div class="flex flex-wrap gap-5 justify-between items-baseline">


    <div 
    @dragover="handleDragOver" 
    v-for="(column, index) in data" 
    :key="column.id"
    @drop="handleDrop(column)"
    >

      <div :style="generateGradient(index, data?.length)" class="rounded w-80 flex-grow bg-slate-700 py-1 px-5 mb-2 text-center">
        {{ column.name }}
      </div>


     <div>
       <CreateDeal :status="column.id" :refetch="refetch ? refetch: () => {}" />
        <UiCard 
          v-for="card in column.items" 
          :key="card.id" draggable="true" 
          class="shadow:sm mb-3 w-full"
          @dragstart="handleDragStart(card, column)"
        >
          <UiCardHeader role="button">

            <UiCardTitle><span class="text-cyan-400 capitalize text-2xl font-semibold">{{ card.title}}</span></UiCardTitle>

            <UiCardDescription class="text-gray-400">
              {{ convertCurrency('en-US', card.price) }}
            </UiCardDescription>
          </UiCardHeader>
          <UiCardContent class="pb-0 text-sm">
            <div class="text-sm">Company</div> <span class="inline-block ml-1">-</span><span class="pl-2 text-sm text-primary">{{ card.companyName}}</span>
          </UiCardContent>
          <UiCardFooter>
            <span class="text-cyan-400 text-sm">

              {{dayjs(card.$created_at).format('DD MMMM YYYY')}}

            </span>

          </UiCardFooter>



        </UiCard>
     </div>


    </div>






  </div>

</template>

<style scoped>

.updating {
  opacity: 0.3 !important;
  transition: 0.3s all ease;
  filter: blur(2px) !important;
}

.dashboard {
  transition: 0.3s all ease;
}

</style>
