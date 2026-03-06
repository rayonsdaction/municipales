<template>
  <div v-if="commune">
    <ContentFrame>
      <template #header>
        <h1 class="text-3xl text-center leading-8 font-extrabold sm:text-4xl">
            {{ commune.name }}
        </h1>
      </template>
      <div v-if="commune.listes.length === 0">
        <h4 class="not-prose">En attente du retour des questionnaires envoyés aux candidats.</h4>
      </div>
      <div v-else>
        <h2 class="not-prose">Les listes candidates aux municipales</h2>
        <div v-for="liste in commune.listes" :key="liste.id" class="mt-8">
          <h3 class="not-prose">
            <span class="italic">{{ liste.name }}</span>
          </h3>
          <Overview :commune="commune" :liste="liste.id" />
          <h4>Réponses au questionnaire</h4>
          Consultez les réponses détaillées de la liste
          <a
              :href="liste.questionnaire"
              target="_blank"
              class="text-ra-blue hover:underline"
          >
            {{ liste.name }}
          </a>
        </div>
      </div>
      <div v-if="commune.lien" class="mt-10">
        <h2 class="not-prose">Le baromètre vélo pour cette commune</h2>
        Consultez la fiche du baromètre vélo pour la commune de
        <a
            :href="commune.lien"
            target="_blank"
            class="text-ra-blue hover:underline"
        >
          {{ commune.name }}
        </a>
      </div>
    </ContentFrame>
  </div>
</template>

<script setup lang="ts">

const { path } = useRoute();

const { data: commune } = await useAsyncData(path, () => {
  const communeName = path.replace(/^\//, '');
  const encodedCommuneName = decodeURIComponent(communeName);
  return queryCollection('communesPage')
    .where('shortName', '=', encodedCommuneName)
    .first();
});

</script>
