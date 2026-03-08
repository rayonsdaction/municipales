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
        <div class="my-6 p-4 bg-blue-50/50 rounded-lg border-l-4 border-ra-blue" v-if="commune.disclaimer">
          <div class="flex items-start space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-ra-blue shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div class="text-sm text-gray-700">
              <p class="font-medium text-gray-800">
                À propos des synthèses d’engagements
              </p>
              <p class="mt-1">
                Les nombres et les niveaux d'engagements présentés ici sont générés automatiquement à partir des réponses des candidats.
                <span class="font-semibold">
                  Ils ne reflètent pas toujours avec précision la nuance ou l’étendue réelle des engagements pris.
                </span>
                Pour une analyse complète, nous vous invitons à consulter les réponses détaillées de chaque liste (PDF).
              </p>
            </div>
          </div>
        </div>

        <h2 class="not-prose">Les listes candidates aux municipales</h2>

        <div
            v-for="liste in commune.listes.filter(l => l.questionnaire)"
            :key="liste.id"
            class="mt-8"
        >
          <h3 class="not-prose">
            <span class="italic text-gray-700 font-semibold text-xl">{{ liste.name }}</span>
          </h3>
          <span class="italic text-gray-700">{{ liste.tete }}</span>

          <Overview :commune="commune" :liste="liste.id" />

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

        <div v-if="listesSansQuestionnaire.length > 0" class="mt-8">
          <p class="not-prose font-medium">Les listes ci-dessous n’ont pas retourné le questionnaire envoyé. Leurs engagements ne sont donc pas présentés ici.</p>
          <div v-for="liste in listesSansQuestionnaire" :key="liste.id" class="mt-2">
            <p class="not-prose">- {{ liste.name }}, {{ liste.tete }}</p>
          </div>
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
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const { path } = useRoute();

const { data: commune } = await useAsyncData(path, () => {
  const communeName = path.replace(/^\//, '');
  const encodedCommuneName = decodeURIComponent(communeName);
  return queryCollection('communesPage')
      .where('shortName', '=', encodedCommuneName)
      .first();
});

const listesSansQuestionnaire = computed(() => {
  return commune.value?.listes.filter(l => !l.questionnaire) || [];
});
</script>
