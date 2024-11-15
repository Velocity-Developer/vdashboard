<template>

  <h1 class="text-2xl font-bold text-center">
    Login
  </h1>
  <hr>
  <form @submit.prevent="submitLogin">

    <FloatLabel class="mb-3" variant="in">
        <InputText id="email" v-model="form.email" class="w-full" autocomplete="off" />
        <label for="email">Email</label>
    </FloatLabel>

    <FloatLabel class="mb-3" variant="in">
        <InputText id="password" v-model="form.password" class="w-full" autocomplete="off" />
        <label for="password">Password</label>
    </FloatLabel>

    <div v-if="isLoading">
        <ProgressSpinner v-if="isLoading" class="m-0" style="width: 30px; height: 30px" />
        <span class="opacity-50 text-sm pb-2 inline-block">Memproses login..</span>            
    </div>

    <div v-if="errors" class="my-3">
      <Message severity="warn">Email dan sandi salah, silahkan coba lagi..</Message>
    </div>

    <Button label="Login" class="w-full" type="submit" />

  </form>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: 'welcome',
  })

  const { login } = useSanctumAuth()

  const isLoading = ref(false)
  const errors = ref(false)

const form = ref({
    email: '',
    password: '',
    remember: '',
})

async function submitLogin() {
      isLoading.value = true; 
      errors.value = false; 
      try {
          await login(form.value)
      } catch (e) {
          const error = useApiError(e);
          errors.value = true; 
          console.error('Request failed not because of a validation', error.code);
      } finally {
          isLoading.value = false; 
          return navigateTo('/')
      }
  }

</script>

