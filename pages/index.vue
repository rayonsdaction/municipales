<template>
  <div>
    <div class="relative bg-gray-50 overflow-hidden">
      <div class="relative pt-12 pb-14 sm:pb-16 lg:pb-16">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="lg:grid lg:grid-cols-12 lg:gap-8">
            <!-- Texte (7 colonnes sur desktop) -->
            <div class="lg:col-span-7 lg:text-left">
              <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl xl:text-5xl">
            <span class="block text-gray-600 text-2xl font-semibold sm:text-3xl">
              Municipales 2026
            </span>
                <span class="block mt-2">
              En piste ! Pour une métropole marchable et cyclable.
            </span>
              </h1>
              <p class="mt-4 text-base text-gray-600 sm:mt-5 sm:text-lg lg:text-xl">
                Plateforme de suivi des engagements des candidats en faveur du vélo et de la marche à Rennes Métropole.
              </p>
              <p class="mt-2 text-base text-gray-600 sm:text-lg" v-if="assoName">
                Par {{ assoName }}.
              </p>
            </div>
            <!-- Image (5 colonnes sur desktop) -->
            <div class="lg:col-span-5 mt-6 lg:mt-0 flex justify-center lg:justify-end">
              <img
                  src="/images/plaidoyer2026.png"
                  alt="Couverture du plaidoyer En piste !"
                  class="w-full max-w-lg rounded-lg shadow-lg object-cover transition-transform duration-300 hover:scale-105"
                  style="max-height: 500px;"
              >
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- Contenu principal -->
    <!-- Conteneur parent plein largeur -->
    <div class="w-full bg-gray-50"> <!-- Fond gris clair pour toute la section -->
      <!-- Padding latéral cohérent -->
      <div class="mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8"> <!-- Plus de max-w-7xl ici -->

        <!-- Carte Plaidoyer -->
        <div class="bg-white px-10 py-6 rounded-lg shadow-sm hover:shadow-md transition-shadow w-full">
          <div class="flex items-start space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-ra-blue shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <div>
              <h2 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Notre plaidoyer pour une métropole marchable et cyclable
              </h2>
              <p class="mt-2">
                <a class="text-ra-blue hover:text-ra-dark-blue font-medium underline transition-colors" href="/doc/Plaidoyer2026.pdf" target="_blank" rel="noopener noreferrer">
                  Télécharger le plaidoyer (PDF)
                </a>
              </p>
            </div>
          </div>
        </div>

        <!-- Carte Engagements -->
        <div class="bg-white px-10 py-6 rounded-lg shadow-sm hover:shadow-md transition-shadow w-full">
          <div class="flex items-start space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div>
              <h2 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Engagements des candidats
              </h2>
              <p class="mt-2 text-lg text-gray-500">
                <em>En cours de collecte...</em>
              </p>
            </div>
          </div>
        </div>

        <!-- Carte Objectifs -->
        <div class="bg-white px-10 py-6 rounded-lg shadow-sm hover:shadow-md transition-shadow w-full border-t border-gray-200 pt-6">
          <div class="flex items-start space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-ra-blue shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <div>
              <h2 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Notre objectif : clarifier les engagements des candidats aux municipales
              </h2>
              <p class="mt-2 text-lg text-gray-600">
                À Rennes Métropole, le vélo et la marche sont des leviers essentiels pour une ville agréable et soutenable. Avec cette plateforme, nous voulons :
              </p>
              <ul class="mt-4 text-lg text-gray-600 list-disc pl-6 space-y-2">
                <li><span class="font-medium">Clarifier le débat.</span> <em class="block mt-1">Les engagements des candidats en faveur du vélo et de la marche sont souvent peu explicites dans les programmes. Ici, nous souhaitons comparer les mesures, thématique par thématique.</em></li>
                <li><span class="font-medium">Donner des outils aux citoyens.</span> <em class="block mt-1">Des données claires pour interroger les candidats et exiger des comptes après les élections.</em></li>
                <li><span class="font-medium">Faire pression pour des résultats.</span> <em class="block mt-1">Nous vérifierons si les promesses se transforment en réalisations concrètes après 2026.</em></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
const { getAssoName } = useConfig();
const assoName = getAssoName();
</script>
