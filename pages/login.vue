<script setup lang="ts">



useHead({
  titleTemplate: "%s - Login",
  title: "RazorCRM",
});

definePageMeta({
  middleware: "auth",
})

const {
  email, 
  password, 
  login,

} = useLogin();




</script>

<template>
  <div class="flex items-center justify-center min-h-screen w-full">
    <div class="rounded shadow-lg bg-sidebar w-1/2 p-5">
      <h1 class="text-2xl font-bold text-center mb-5">Login</h1>

      <form @submit.enter.prevent="login()">
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
       
        </div>

        <div class="flex auth-blocks flex-wrap gap-5 items-center justify-center">
          <UiButton
            @click="login()"
            :disabled="!email || !password"
            type='submit' 
            variant='default' 
            class="w-1/3 mt-5">Enter an account
          </UiButton>
          <UiButton 
            @click="$router.push('/register')"
            type="button" 
            variant='default' 
            class="w-1/3 mt-5">
            Register
          </UiButton>
        </div>

      </form>
    </div>
  </div>
</template>

<style scoped></style>
