<script setup lang="ts">

useHead({
  titleTemplate: "%s - Registration",
  title: "RazorCRM",
});

const { email, password, name, register } = useLogin();
</script>

<template>
  <div class="flex items-center justify-center min-h-screen w-full">
    <div class="rounded shadow-lg bg-sidebar w-1/2 p-5">
      <h1 class="text-2xl font-bold text-center mb-5">Create an account</h1>

      <form @submit.prevent="console.log(email, password)" action="">
        <div class="mb-5">
          <UiInput 
            :data-value="email" 
            v-model.trim="email" 
            placeholder="Email" 
            type="email" 
          />
        </div>
        <div>
          <UiInput 
            class="mb-5"
            :data-value="password" 
            v-model.trim="password"
            placeholder="Password" 
            type="password" 
          />
          <UiInput 
            class="mb-5"
            :data-value="name" 
            v-model.trim="name"
            placeholder="Name" 
            type="text" 
          />
        </div>

        <div class="flex flex-wrap auth-blocks gap-5 items-center justify-center">
          <UiButton @click="register()" type='button' variant='default' class="w-1/3 mt-5">Register</UiButton>
          <UiButton  @click="$router.push('/login')" type='button' variant='default' class="w-1/3 mt-5">Login</UiButton>
        </div>

      </form>
    </div>
  </div>
</template>

<style scoped></style>
