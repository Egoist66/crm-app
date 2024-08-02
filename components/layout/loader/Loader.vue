<script setup lang="ts">

useHead({
    title: "Intializing...",
})
</script>


<template>
    <div class="wrapper bg-sidebar">
        <NuxtImg 
            width="100" 
            quality="100" 
            height="100" 
            class="mx-auto" 
            alt="loader" 
            src="/loader.svg" 
        />
    </div>
</template>


<style scoped lang="scss">
.wrapper {
    @apply flex items-center justify-center w-screen h-screen;
    overflow: hidden !important;
}

</style>