<template>
  <div v-if="voie">
    <ContentFrame>
      <template #header>
        <h1 class="text-3xl text-center leading-8 font-extrabold sm:text-4xl">
            {{ voie.name }}
        </h1>
      </template>
      <h2 class="not-prose">Les listes candidates aux municipales</h2>
      <Overview :voie="voie" />
      <div v-if="voie.questionnaire" class="mt-4">
        <h2 class="not-prose">Le questionnaire de la liste</h2>
        Consultez les réponses détaillés de la liste candidate
        <a
            :href="voie.questionnaire"
            target="_blank"
            class="text-ra-blue hover:underline"
        >
          {{ voie.name }}
        </a>
      </div>
      <div v-if="voie.lien" class="mt-4">
        <h2 class="not-prose">Le baromètre vélo pour cette commune</h2>
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
  </div>
</template>

<script setup lang="ts">
const { path } = useRoute();

const { data: voie } = await useAsyncData(path, () => {
  const communeName = path.replace(/^\//, '');
  const encodedCommuneName = decodeURIComponent(communeName);
  return queryCollection('communesPage')
    .where('shortName', '=', encodedCommuneName)
    .first();
});

</script>
