<script setup lang="ts">
useHead({
  title: "RazorCRM",
  titleTemplate: "%s - Edit customer",
});
const {
  data,
  isLoading,
  nameField,
  nameFieldAttrs,
  emailField,
  emailFieldAttrs,
  fromSourceField,
  fromSourceFieldAttrs,
  avatarField,
  isSuccess,
  isRefetching,
  avatarFieldAttrs,
  values,
  isPending,
  refetch,
  onUpdate,
} = useCustomerEdit(useRoute().params.id as string);



</script>




<template>
  <div>
    <h2 class="text-center text-2xl" v-if="isLoading || isRefetching">Loading...</h2>
    <div v-else>
      <h1 class="font-bold text-2xl mb-10">Editing {{ data?.name }}</h1>


      <button
        @click="refetch()"
        class="btn background-[#a252c8] block mb-10 hover:text-primary"
      >
        Reload
      </button>

      <form v-if="isSuccess" @submit.prevent="onUpdate">
        <UiInput
          v-model="nameField"
          v-bind="nameFieldAttrs"
          placeholder="Name"
          type="text"
          class="input"
        />

        

        <UiInput
          v-model="emailField"
          v-bind="emailFieldAttrs"
          placeholder="Email"
          type="email"
          class="input"
        />

        <UiInput
          v-model="fromSourceField"
          v-bind="fromSourceFieldAttrs"
          placeholder="Source"
          type="text"
          class="input"
        />

        <UiInput
          v-model="avatarField"
          v-bind="avatarFieldAttrs"
          placeholder="Avatar"
          type="text"
          class="input"
        />

        <UiButton
          type="submit"
          :disabled="isPending || !nameField || !emailField"
          class="btn background-[#a252c8] hover:text-primary"
          >{{ isPending ? "Updating..." : "Update" }}
        </UiButton>
      </form>
    </div>
  </div>
</template>

<style scoped>
.input {
  @apply border-[#161c26] mb-2 placeholder:text-[#748092] focus:border-border transition-colors;
}
</style>
