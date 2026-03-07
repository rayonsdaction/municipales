<template>
  <div class="max-w-2xl mx-auto bg-gray-200 rounded-full flex overflow-hidden mt-8 mb-3"
       v-if="stats.engagePlus.number && stats.engage.number && stats.pasEngage.number">
    <div class="flex h-6 w-full text-xs">
      <div
          v-if="stats.engagePlus.number"
          class="bg-ra-green-600 text-white text-center py-1 leading-none"
          :style="`width: ${stats.engagePlus.percent}%`"
      >
        {{ displayPercent(stats.engagePlus.percent) }}
      </div>

      <div
          v-if="stats.engage.number"
          class="bg-ra-green-400 text-white text-center py-1 leading-none"
          :style="`width: ${stats.engage.percent}%`"
      >
        {{ displayPercent(stats.engage.percent) }}
      </div>

      <div
          class="bg-ra-orange text-white text-center py-1 leading-none"
          :style="`width: ${stats.pasEngage.percent}%`"
      >
        {{ displayPercent(stats.pasEngage.percent) }}
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
