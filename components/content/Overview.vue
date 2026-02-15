<template>
  <div>
    <h4 style="text-align: left">Aperçu des engagements</h4>
    <div v-if="geojson">
      <ProgressBar :voies="[geojson]" :liste=liste />
      <Stats :voies="[geojson]" :liste=liste :precision="1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Collections } from '@nuxt/content';


const { path } = useRoute();

const { commune, liste } = defineProps<{ commune: Collections['communesPage']; liste: number;}>();

const { data: geojson } = await useAsyncData(`geojson-${path}`, () => {
  return queryCollection('voiesCyclablesGeojson')
    .path(commune.path)
    .first();
});
</script>
