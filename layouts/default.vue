<template>  
  <div class="flex justify-end min-h-svh w-full bg-gray-100">

    <div>
      <aside class="flex z-20 fixed top-0 md:top-4 left-[-100%] md:left-4 h-full md:h-[calc(-2.1rem+100vh)] w-[calc(100%-5rem)] md:w-[13.5rem]" :class="{'!left-0 md:!left-4':isOpen}">
        <div class="flex flex-col w-full h-full space-y-6 transition-all bg-white rounded-lg shadow-sm">
          <appSidebar />
        </div>
      </aside>
      <div v-if="isOpen" @click="toggleSidebar" class="md:hidden z-10 fixed min-h-screen w-full right-0 top-0 bg-gray-900 opacity-50"></div>
    </div>

    <main class="flex-1 p-2 py-4 md:p-4 md:pl-4 transition-all w-full md:max-w-[calc(100%-14.5rem)]">

      <header class="rounded-lg shadow-sm bg-white flex items-center justify-between p-4 md:px-10 space-x-4">
          <div>
            <div class="block md:hidden min-w-40"><AppLogo /></div>            
          </div>
          <div class="flex justify-end">
            <Button variant="text">
              <Icon name="lucide:bell"/>
            </Button>
            <Button variant="text">
              <Icon name="lucide:user" class="md:mr-2"/> <span class="hidden md:inline">Admin</span>
            </Button>
            <Button variant="text" @click="toggleSidebar" class="md:!hidden">
              <Icon name="lucide:menu"/>
            </Button>
          </div>
      </header>

      <div class="flex-1 mt-4 md:p-10 p-4 py-6 rounded-lg shadow-sm bg-white min-h-[82vh]">
        <slot />
      </div>

    </main>

  </div>
</template>

<script setup lang="ts">
  const isOpen = ref(false)
  const toggleSidebar = () => {
    isOpen.value = !isOpen.value
  }
</script>

