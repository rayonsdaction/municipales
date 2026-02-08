<template>
  <div v-if="voie">
    <ContentFrame
      :description="voie.description"
      :image-url="voie.cover"
    >
      <template #header>
        <h1 class="text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {{ voie.shortName }}
        </h1>
      </template>
      <h2>Les listes candidates aux municipales</h2>
      <Overview :voie="voie" />
      <div v-if="voie.lien">
        <h2>Le baromètre vélo pour cette commune</h2>
        Consultez la fiche du baromètre vélo pour la commune de
        <a
            :href="voie.lien"
            target="_blank"
            class="text-ra-blue hover:underline"
        >
          {{ voie.name }}
        </a>
      </div>
    </ContentFrame>

    <LvvCta class="pb-10" />
  </div>
</template>

<script setup lang="ts">
const { path } = useRoute();
const { getVoieCyclableRegex } = useUrl();

const regex = getVoieCyclableRegex();
const line = path.match(regex)?.[1] ?? '';

const { data: voie } = await useAsyncData(path, () => {
  return queryCollection('voiesCyclablesPage')
    .where('line', '=', Number(line))
    .first();
});

</script>
