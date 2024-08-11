<script setup lang="ts">


const {toggleSlideOver} = useSlideOverStore()
const {slideOver} = storeToRefs(useSlideOverStore())
const isOpen = ref<boolean>(false)

watch(slideOver.value, () => {
    isOpen.value = slideOver.value.isOpen
})

</script>


<template>

    <USlideover  v-model="isOpen">
        <div class="p-4 flex-1 overflow-y-auto">
            <div class="border-border h-min  shadow-sm bg-black/20 rounded p-3">
                <div class="uppercase bold text-xl mb-4">About deal</div>

                <div title="company avatar" class="mb-3">
                    <img :src="slideOver.card?.avatar_url" alt="">
                </div>

                <div class="mb-3">
                    <h2 class="text-base">
                        <span :style="{ color: '#22D3EE' }" class="italic">Name</span> <span
                            class="inline-block px-1">-</span> {{ slideOver.card?.title }}
                    </h2>
                </div>

                <div class="mb-3">
                    <h2 class="text-base">
                        <span :style="{ color: '#22D3EE' }" class="italic">Sum</span> <span
                            class="inline-block px-1">-</span> {{ convertCurrency('en-US', slideOver.card?.price!) }}
                    </h2>
                </div>

                <div class="mb-3">
                    <h2 class="text-base">
                        <span :style="{ color: '#22D3EE' }" class="italic">Status</span> <span
                            class="inline-block px-1">-</span>
                            <UBadge>{{ slideOver.card?.status }}</UBadge>
                    </h2>
                </div>

                <div class="mb-3">
                    <h2 class="text-base">
                        <span :style="{ color: '#22D3EE' }" class="italic">Client</span> <span
                            class="inline-block px-1">-</span>
                            <UBadge color="green">{{ slideOver.card?.companyName}}</UBadge>
                    </h2>
          
                </div>

                <div class="mb-3">
                    <h2 class="text-base">
                        <span :style="{ color: '#22D3EE' }" class="italic">Source</span> <span
                            class="inline-block px-1">-</span>
                            <UBadge color="green">{{ slideOver.card?.from_source ?? 'N/A'}}</UBadge>
                    </h2>
          
                </div>

                <div class="mb-3">
                    <h2 class="text-base">
                        <span :style="{ color: '#22D3EE' }" class="italic">Email</span> <span
                            class="inline-block px-1">-</span>
                            <UBadge color="purple">{{ slideOver.card?.email ?? 'N/A'}}</UBadge>
                    </h2>
          
                </div>

                <div class="mb-5">
                    <Comments :card-id="slideOver.card?.id || ''" />
                </div>

            </div>

            <UButton color="gray" variant="ghost" size="sm" icon="i-heroicons-x-mark-20-solid"
            class="flex  absolute end-5 top-5 z-10" square padded @click="toggleSlideOver(false)" />


           
        </div>
    </USlideover>
</template>


<style scoped>
     
img {
    width: 200px;
    display: block;
    object-fit: cover;
    border-radius: 10px;
}

</style>