<template>
  <div>
    <div v-if="geojson">
      <ProgressBar :voies="[geojson]" />
      <Stats :voies="[geojson]" :precision="1" />
      <StatsQuality v-if="displayQuality()" :voies="[geojson]" :precision="1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Collections } from '@nuxt/content';


const { path } = useRoute();
const { displayQuality } = useConfig();

const { voie } = defineProps<{ voie: Collections['communesPage']}>();

const { data: geojson } = await useAsyncData(`geojson-${path}`, () => {
  return queryCollection('voiesCyclablesGeojson')
    .path(voie.path)
    .first();
});
</script>
