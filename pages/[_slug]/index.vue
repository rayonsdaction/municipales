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
            <span class="italic text-gray-700 font-semibold text-xl">{{ liste.name }}</span>
          </h3>
          <span class="italic text-gray-700">{{liste.tete}}</span>

          <!-- Aperçu des engagements (progress bar) -->
          <Overview :commune="commune" :liste="liste.id" />

          <!-- Texte et bouton pour accéder au PDF -->
          <span class="mt-4 text-center text-gray-700">
            Pour en savoir plus, consultez les engagements et les réponses détaillées de la liste
            <span class="italic">{{ liste.name }}</span> :
          </span>
          <div class="flex justify-center mt-3">
            <a
                :href="liste.questionnaire"
                target="_blank"
                class="px-6 py-3 bg-ra-blue text-white rounded-lg shadow-md hover:bg-ra-blue-dark transition-colors text-lg font-medium"
            >
              Ouvrir les réponses
            </a>
          </div>
          <div class="my-6 border-t-2 border-gray-500"></div>
        </div>
      </div>

      <div v-if="commune.lien" class="mt-12">
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
