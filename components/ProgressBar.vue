<template>
  <div class="max-w-2xl mx-auto bg-gray-200 rounded-full flex overflow-hidden my-8">
    <div class="flex h-6 w-full text-xs">
      <!-- 3. Engagements avancés (anciennement 1ère partie) -->
      <div
          v-if="stats.engagePlus.number"
          class="bg-ra-green-600 text-white text-center p-1 leading-none"
          :style="`width: ${stats.engagePlus.percent}%`"
      >
        <span v-if="stats.engagePlus.percent > 5">{{ displayPercent(stats.engagePlus.percent) }}</span>
      </div>

      <!-- 2. Engagements standard (anciennement partie centrale) -->
      <div
          v-if="stats.engage.number"
          class="bg-ra-green-400 text-white text-center p-1 leading-none"
          :style="`width: ${stats.engage.percent}%`"
      >
        {{ displayPercent(stats.engage.percent) }} <!-- Affichage du % -->
      </div>

      <!-- 1. Pas d'engagements (anciennement 3ème partie) -->
      <div
          class="bg-ra-orange text-white text-center p-1 leading-none"
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

const { voies } = defineProps<{
  voies: Collections['voiesCyclablesGeojson'][];
}>();

const stats = getStats(voies);
</script>
