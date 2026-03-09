<template>
  <div>
    <div class="relative bg-gray-50 overflow-hidden">
      <div class="relative pt-12 pb-14 sm:pb-16 lg:pb-16 z-10">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="lg:grid lg:grid-cols-12 lg:gap-8">
            <!-- Texte (7 colonnes sur desktop) -->
            <div class="lg:col-span-7 lg:text-left">
              <h1 class="text-3xl font-extrabold sm:text-4xl xl:text-5xl">
                <span class="block mt-2">
                  Municipales 2026
                </span>
              </h1>
              <span class="block text-gray-600 text-2xl font-semibold sm:text-2xl">
                En piste ! Pour une métropole marchable et cyclable.
              </span>

              <div class="my-4 h-2 bg-[#FAE524] w-60"></div>

              <p class="mt-4 text-base text-gray-600 sm:mt-5 sm:text-lg lg:text-xl">
                Plateforme de suivi des engagements des candidats aux municipales en faveur du vélo et de la marche à Rennes Métropole.
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
    <div class="w-full bg-gray-50 z-10">
      <div class="mx-auto px-4 relative sm:px-6 lg:px-8 py-12 space-y-8 z-10">

        <!-- Carte Plaidoyer -->
        <div class="bg-white/70 backdrop-blur-sm px-10 py-6 rounded-lg shadow-sm hover:shadow-md transition-shadow w-full">
          <div class="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-ra-blue shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <div class="text-center flex-1">
              <h2 class="text-2xl font-extrabold sm:text-3xl">
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
        <div class="bg-white/70 backdrop-blur-sm px-10 py-6 rounded-lg shadow-sm hover:shadow-md transition-shadow w-full">
          <div class="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-ra-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <div class="text-center flex-1">
              <h2 class="text-2xl font-extrabold sm:text-3xl">
                Engagements des candidats
              </h2>
              <p class="text-gray-700">
                <span class="font-medium text-gray-900">
                  <nuxt-link to="/Rennes" class="text-ra-green hover:underline">Rennes</nuxt-link>,
                  <nuxt-link to="/Thorigné-Fouillard" class="text-ra-green hover:underline">Thorigné-Fouillard</nuxt-link>,
                  <nuxt-link to="/Pacé" class="text-ra-green hover:underline">Pacé</nuxt-link>,
                  <nuxt-link to="/Cesson-Sévigné" class="text-ra-green hover:underline">Cesson-Sévigné</nuxt-link>,
                  <nuxt-link to="/Noyal-sur-Vilaine" class="text-ra-green hover:underline">Noyal-sur-Vilaine</nuxt-link>,
                  <nuxt-link to="/Chartres de Bretagne" class="text-ra-green hover:underline">Chartres-de-Bretagne</nuxt-link>,
                  <nuxt-link to="/Vezin" class="text-ra-green hover:underline">Vezin-le-Coquet</nuxt-link>,
                  <nuxt-link to="/Saint-Grégoire" class="text-ra-green hover:underline">Saint-Grégoire</nuxt-link>,
                  <nuxt-link to="/Chantepie" class="text-ra-green hover:underline">Chantepie</nuxt-link>,
                  <nuxt-link to="/Bruz" class="text-ra-green hover:underline">Bruz</nuxt-link> :
                </span>
                <p class="text-ra-green ml-1 inline">▲ Réponses disponibles</p>
              </p>

              <p class="text-gray-600 text-sm mt-1">
                Collecte toujours en cours pour les autres communes.
              </p>
            </div>
          </div>
        </div>

        <!-- Carte Objectifs -->
        <div class="bg-white/70 backdrop-blur-sm px-10 py-6 rounded-lg shadow-sm hover:shadow-md transition-shadow w-full">
          <div class="flex items-start space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-ra-blue shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <div class="flex-1">
              <div class="text-center">
                <h2 class="text-2xl font-extrabold sm:text-3xl">
                  Notre objectif : clarifier les engagements des candidats aux municipales
                </h2>
                <p class="mt-2 text-lg text-gray-600 mx-auto max-w-3xl">
                  À Rennes Métropole, le vélo et la marche sont des leviers essentiels pour une ville agréable et durable. Avec cette plateforme, nous voulons :
                </p>
              </div>
              <ul class="mt-6 text-lg text-gray-600 list-disc list-outside space-y-4 mx-auto max-w-3xl">
                <li>
                  <span class="font-medium">Clarifier le débat.</span>
                  <em class="block mt-1">Les engagements des candidats en faveur du vélo et de la marche sont souvent peu explicites dans les programmes. Ici, nous souhaitons comparer les mesures, thématique par thématique.</em>
                </li>
                <li>
                  <span class="font-medium">Donner des outils aux citoyens.</span>
                  <em class="block mt-1">Des données claires pour connaitre les positions des candidats et exiger des comptes après les élections.</em>
                </li>
                <li>
                  <span class="font-medium">Faire pression pour des résultats.</span>
                  <em class="block mt-1">Nous vérifierons si les promesses se transforment en réalisations concrètes après 2026.</em>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Arc de cercle à gauche -->
    <svg
        class="absolute top-[-140px] left-0 transform -translate-x-[350px] z-0"
        width="700"
        height="600"
        viewBox="0 0 200 500"
        fill="none"
    >
      <path
          d="M100,450 A100,100 0 0,0 0,100"
          stroke="#f9f7bd"
          stroke-width="50"
          stroke-linecap="round"
      />
    </svg>
    <svg
        class="absolute -top-[60px] left-0 transform -translate-x-[200px] z-0"
        width="300"
        height="350"
        viewBox="0 0 200 900"
        fill="none"
    >
      <path
          d="M50,800 A100,100 0 0,0 200,500"
          stroke="#f9f7bd"
          stroke-width="200"
          stroke-linecap="round"
      />
    </svg>

    <!-- Arc de cercle à droite -->
    <svg
        class="absolute top-[560px] right-0 transform translate-x-[420px] z-0"
        width="700"
        height="600"
        viewBox="0 0 10 500"
        fill="none"
    >
      <path
          d="M0,450 A100,100 0 0,1 0,100"
          stroke="#f9f7bd"
          stroke-width="50"
          stroke-linecap="round"
      />
    </svg>

    <svg
        class="absolute top-[800px] right-0 transform translate-x-[180px] z-0"
        width="300"
        height="350"
        viewBox="0 0 10 900"
        fill="none"
    >
      <path
          d="M150,400 A100,100 0 0,1 0,100"
          stroke="#f9f7bd"
          stroke-width="200"
          stroke-linecap="round"
      />
    </svg>
    <LvvCta class="pb-10" z-10/>
  </div>
</template>

<script setup lang="ts">
const { getAssoName } = useConfig();
const assoName = getAssoName();
</script>
