<template>
  <div>
    <!-- Section Hero -->
    <div class="relative bg-white overflow-hidden">
      <div class="relative pt-12 pb-16 sm:pb-24 lg:pb-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <div class="lg:grid lg:grid-cols-1 lg:gap-8">
            <div class="lg:col-span-1">
              <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl xl:text-5xl">
                <span class="block text-gray-600 text-2xl font-semibold sm:text-3xl">
                  Municipales 2026
                </span>
                <span class="block mt-2">
                  Engagements en faveur du vélo & de la marche
                </span>
              </h1>
              <p class="mt-4 text-base text-gray-600 sm:mt-5 sm:text-lg lg:text-xl">
                Un outil pour suivre les engagements des candidats en faveur du <strong>vélo</strong> et de la <strong>marche</strong> à Rennes Métropole.
              </p>
              <p class="mt-2 text-base text-gray-600 sm:text-lg" v-if="assoName">
                Par {{ assoName }}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contenu principal -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <!-- Section 1 : Pourquoi ce projet ? -->
      <div class="space-y-4">
        <h2 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          Pourquoi ce projet ?
        </h2>
        <p class="text-lg text-gray-600">
          Les élections municipales de 2026 sont l’occasion de questionner les candidats sur leurs engagements pour les mobilités actives. Cette plateforme permet de les lister, les comparer et les suivre.
        </p>
      </div>

      <!-- Section 2 : Engagements des candidats -->
      <div class="space-y-4">
        <h2 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          Engagements des candidats
        </h2>
        <p class="text-lg text-gray-500">
          <em>En cours de collecte...</em>
        </p>
      </div>

      <!-- Section 3 : Objectifs -->
      <div class="space-y-4">
        <h2 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          Nos objectifs
        </h2>
        <ul class="text-lg text-gray-600 list-disc pl-6 space-y-2">
          <li>Rendre visibles les engagements des candidats en faveur du <strong>vélo et de la marche</strong>.</li>
          <li>Permettre aux citoyens de les comparer facilement.</li>
          <li>Suivre leur mise en œuvre après les élections.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { getAssoName } = useConfig();
const assoName = getAssoName();
</script>
