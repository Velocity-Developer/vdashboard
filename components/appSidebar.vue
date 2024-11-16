<template>

  <div class="px-4 pt-4 pb-2">
    <div class="inline min-w-20"><AppLogo /></div>   
  </div>
  
  <div class="overflow-y-auto h-full px-2">

    <PanelMenu
          :model="items"
          class="w-full border-none rounded-none !gap-0"
          :pt="{
              panel: (options) => ({
                  class: [
                      '!border-none',
                      '!bg-transparent'
                  ]
              }),
              rootList: (options) => ({
                  class: [
                      '!ps-0',
                  ]
              })
          }"
      >
        <template #item="{ item }">
            <button v-if="item.items" v-ripple :class="[classLink,{'bg-emerald-600 text-white' : isActive(item.href)}]">
                <span class="flex justify-start items-center">
                    <Icon v-if="item.icon" :name="item.icon" :ssr="true" class="mr-2"/>
                    <span>{{ item.label }}</span>
                </span>
                <Icon v-if="item.items" name="lucide:chevron-down" />
            </button>
            <NuxtLink v-else :to="item.href" :class="[classLink,{'bg-emerald-600 text-white' : isActive(item.href)}]">
                <span class="flex justify-start items-center">
                    <Icon v-if="item.icon" :name="item.icon" :ssr="true" class="mr-2"/>
                    <span :class="{'ml-5':isChild(item.key)}">{{ item.label }}</span>
                </span>
            </NuxtLink>
        </template>
    </PanelMenu>

  </div>
</template>

<script setup lang="ts">
//route, cek halaman aktif
const route = useRoute()
const isActive = (path : string) => {
  return route.path === path
}

const isChild = (key : any) => {
  return key.includes('_')? true : false
}

//daftar menu
const items = ref([
  {
      key: 'dashboard',
      label: 'Dashboard',
      icon: 'lucide:layout-grid',
      href:'/dashboard',
  },
  {
      key: 'license',
      label: 'License',
      icon: 'lucide:key',
      href:'/license',
  },
]);

//class untuk tombol menu
const classLink = 'w-full flex items-center justify-between px-4 py-2 cursor-pointer rounded hover:bg-emerald-600 hover:text-white';

</script>
