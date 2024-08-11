<script setup lang="ts">
import dayjs from 'dayjs';
import type { IColumn } from './dashboard.types';

import CreateDeal from '../createdeal/CreateDeal.vue';
import SlideOver from '../slideover/SlideOver.vue';


 defineProps<{
    data: IColumn[] | undefined,
    refetch?: () => void
 }>()


 const {handleDragOver, handleDrop, handleDragStart} = useDashboard()

 const slideStore = useSlideOverStore()

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
        <UCard
         title="Click to read more"
         :ui="{
          divide: 'divide-y',
         }"
          v-for="card in column.items" 
          :key="card.id" draggable="true" 
          class="shadow:sm mb-3 w-full"
          @click="slideStore.setOpenSliderOver({
            card: {
              ...card,
              $created_at: dayjs(card.$created_at).format('DD MMMM YYYY')
            }
          })" 
          @dragstart="handleDragStart(card, column)"
        >
          <UiCardHeader role="button">
             
            <UiCardTitle><span class="text-cyan-400 capitalize text-2xl font-semibold">{{ card.title}}</span></UiCardTitle>

            <UiCardDescription class="text-gray-400">
              {{ convertCurrency('en-US', card.price) }}
            </UiCardDescription>
          </UiCardHeader>
        
          <UiCardFooter>
            <span class="text-cyan-400 text-sm">

              {{dayjs(card.$created_at).format('DD MMMM YYYY')}}
      
            </span>

          </UiCardFooter>

            


        </UCard>

        <SlideOver />
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
