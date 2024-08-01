<script setup lang="ts">

const authStore = useAuthStore();
const loadingStore = useLoadingStore();
const router = useRouter();

onBeforeMount(async () => {
  loadingStore.setLoading(true);
  try {
    const user = await account.get();
    if (user) {
      authStore.setUser(user);
      authStore.setAuth(user.status)
    }
  } catch (error: Error | any) {
    await router.replace("/login");
  } finally {
    loadingStore.setLoading(false);
  }
});
</script>

<template>
  <LayoutLoader v-if="loadingStore.isLoading" />
  <section
    v-else
    :style="{ minHeight: '100vh' }"
    :class="{ 'app-grid': authStore.isAuth() }"
  >
    <LayoutSidebar v-if="authStore.isAuth()" />
    <main>
      <slot />
    </main>
  </section>
</template>

<style scoped lang="scss">
.app-grid {
  display: grid;
  grid-template-columns: 1fr 6fr;
}
</style>
