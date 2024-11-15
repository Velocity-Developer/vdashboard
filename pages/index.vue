<template>

  <h1 class="text-2xl text-center">
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

    <Button label="Login" class="w-full" type="submit" />

  </form>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: 'welcome',
  })

  const form = ref({
    email: '',
    password: '',
    remember: '',
  })

  const submitLogin = () => {
    
  }

</script>

