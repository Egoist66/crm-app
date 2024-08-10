<script setup lang="ts">


const props = withDefaults(defineProps<{
    status: string,
    refetch: () => void
}>(), {
    status: ''
})

const {
    toggleOpenForm,
    onSubmit,
    isFormDisabled,
    isPending, 
    isOpenForm,
    customerNameField,
    customerEmailField,
    priceField,
    customerNameFieldAttrs,
    customerEmailFieldAttrs,
    nameField,
    nameFieldAttrs,
    priceFieldAttrs 

} = useCreateDeal(
    props.status,
    props.refetch
)




</script>


<template>
    <div class="text-center mb-2">

        <button @click="toggleOpenForm()" class="transition-all opacity-5 hover:opacity-100 hover:text-[#a252c8]">

            <Icon title="Close" v-if="isOpenForm" size="35" class="fade-in-100 fade-out-0" name="radix-icons:arrow-up" />
            <Icon title="Open" v-else size="35" class="fade-in-100 fade-out-0" name="radix-icons:plus" />
        </button>

    </div>

    <form v-if="isOpenForm" class="form" @submit.prevent="onSubmit">
        <UiInput 
            placeholder="Name"
            v-model="nameField"
            v-bind="nameFieldAttrs"
            type="text"
            class="input" 
        />

        <UiInput 
            placeholder="Sum"
            v-model="priceField"
            v-bind="priceFieldAttrs"
            type="number"
            class="input" 
        />

        <UiInput 
            placeholder="Email"
            v-model="customerEmailField"
            v-bind="customerEmailFieldAttrs"
            type="email"
            class="input" 
        />

        <UiInput 
            placeholder="Company name"
            v-model="customerNameField"
            v-bind="customerNameFieldAttrs"
            type="text"
            class="input" 
        />

        <button :title="isFormDisabled() ? 'You can\'t create a deal - fill the form' : 'Create deal'":style="{opacity: isFormDisabled() ? 0.5 : 1, cursor: isFormDisabled() ? 'not-allowed' : 'pointer'}" type="submit" :disabled="isPending || isFormDisabled()" class="btn">
            {{ isPending ? 'Creating...' : 'Create deal' }}
        </button>

    </form>
</template>


<style scoped>
.input {
    @apply border-[#161c26] mb-2 placeholder:text-[#748092] focus:border-border transition-colors;
}

.btn {
    @apply text-xs border py-1 px-2 rounded border-[#161c26] hover:border-[#482c65] transition-colors text-[#aebed5] hover:text-white;
}

.form {
    @apply mb-3 block;
    animation: show 0.3s ease-in-out;
}

@keyframes show {
    from {
        @apply border-[#a252c83d];
        transform: translateY(-35px);
        opacity: 0.4;
    }

    90% {
        @apply border-[#a252c83d];
    }

    to {
        @apply border-transparent;
        transform: translateY(0);
        opacity: 1;
    }
}
</style>