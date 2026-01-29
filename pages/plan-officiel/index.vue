
<template>
  <div style="display: flex; justify-content: center;">
    <img
        src="https://www.tourisme-rennes.com/voy_content/uploads/2025/02/Carte-reseau-express-velo.jpg"
        :alt="`plan officiel du ${getProjectName()}`"
        style="width: 800px;"
    >
  </div>
</template>

<script setup lang="ts">
const { getProjectName } = useConfig();

const description = `Découvrez le plan officiel du ${getProjectName()}`;
const COVER_IMAGE_URL = 'https://www.mce-info.org/wp-content/uploads/2024/02/25-Rayons-d-action.webp';
useHead({
  title: `Plan du ${getProjectName()}`,
  meta: [
    // description
    { hid: 'description', name: 'description', content: description },
    { hid: 'og:description', property: 'og:description', content: description },
    { hid: 'twitter:description', name: 'twitter:description', content: description },
    // cover image
    { hid: 'og:image', property: 'og:image', content: COVER_IMAGE_URL },
    { hid: 'twitter:image', name: 'twitter:image', content: COVER_IMAGE_URL }
  ]
});
</script>
