<template>

  <div class="max-w-xl mx-auto">
    
    <h1 class="font-bold text-3xl">
      Selamat datang
    </h1>
    <p>
      Here what happening in your account today
    </p>

    <div class="grid gap-x-4 gap-y-4 grid-cols-2 mt-8 mb-3">

      <div v-for="card in cards" :key="card.title" class="p-4 rounded-lg bg-emerald-100 hover:bg-emerald-200">
        <div class="flex items-center">
          <Icon :name="card.icon" class="mr-2" />
          <div class="flex-1">
            <div class="text-sm text-gray-500">
              {{ card.title }}
            </div>
            <div class="font-bold text-lg">
              {{ card.count }}
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="p-4 rounded-lg bg-slate-100 hover:bg-slate-200 mb-6">
      <Chart type="line" :data="chartData"/>
    </div>

    
  </div>

</template>
<script setup lang="ts">

  const cards = ref([
    {
      title: 'Total Users',
      count: '100',
      icon: 'lucide:user',
    },
    {
      title: 'Total Users',
      count: '100',
      icon: 'lucide:user',  
    },
    {
      title: 'Total Users',
      count: '100',
      icon: 'lucide:user',  
    },
    {
      title: 'Total Users',
      count: '100',
      icon: 'lucide:user',  
    }
  ])

  const chartData = ref();

  onMounted(() => {
      chartData.value = setChartData();
  });

  const setChartData = () => {
    return {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
            {
                label: 'Sales',
                data: [540, 325, 702, 620],
                backgroundColor: ['rgba(249, 115, 22, 0.2)', 'rgba(6, 182, 212, 0.2)', 'rgb(107, 114, 128, 0.2)', 'rgba(139, 92, 246 0.2)'],
                borderColor: ['rgb(249, 115, 22)', 'rgb(6, 182, 212)', 'rgb(107, 114, 128)', 'rgb(139, 92, 246)'],
                borderWidth: 1
            }
        ]
    };
};

  
</script>
