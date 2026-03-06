<template>
  <div class="grid grid-cols-3 rounded-lg overflow-hidden shadow-sm bg-gray-50 gap-px md:grid-cols-3">
    <div v-for="item in stats" :key="item.name" class="px-4 py-3 sm:p-4 bg-white">
      <div class="text-xs font-medium text-gray-500">
        {{ item.name }}
      </div>
      <div class="mt-1 flex justify-between items-baseline md:block lg:flex">
        <div class="flex items-baseline text-lg font-semibold" :class="item.class">
          {{ item.number }}
        </div>
      </div>
      <div class="text-xs font-medium" :class="item.class">
        {{ displayPercent(item.percent) }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Collections } from '@nuxt/content';
const { getStats, displayPercent } = useStats();

const { voies, liste } = defineProps<{
  voies: Collections['voiesCyclablesGeojson'][];
  liste: number;
}>();

const stats = getStats(voies, liste);
</script>
