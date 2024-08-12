
<script setup lang="ts">

useHead({
    title: 'RazorCRM',
    titleTemplate: "%s - Edit customer",

})
const data = useCustomerEdit(useRoute().params.id as string)

</script>

<template>
    <div>

        {{ $route.params }}

    </div>
</template>



<style scoped>

</style>