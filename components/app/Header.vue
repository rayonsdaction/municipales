<template>
  <Popover id="navigation-header" class="relative z-50 bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center py-3 sm:py-6 md:justify-start md:space-x-10">

        <!-- Conteneur pour le bouton menu + logo (mobile uniquement) -->
        <div class="md:hidden flex w-full items-center justify-between">
          <!-- Bouton menu à gauche -->
          <PopoverButton class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ra-green-600">
            <span class="sr-only">Ouvrir le menu</span>
            <Icon name="mdi:menu" class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>

          <!-- Logo à droite -->
          <NuxtLink to="/" class="flex items-center">
            <span class="sr-only">Municipales 2026 - Rennes Métropole</span>
            <img
                class="h-8 w-auto"
                src="https://www.mce-info.org/wp-content/uploads/2024/02/25-Rayons-d-action.webp"
                :alt="`logo ${getAssoName()}`"
            />
          </NuxtLink>
        </div>

        <div class="flex justify-start items-center lg:w-0 lg:flex-1"></div>
        <PopoverGroup as="nav" class="hidden md:flex space-x-10">
          <!-- Menu Communes -->
          <Popover class="relative">
            <PopoverButton
                :class="[
                'text-gray-500',
                'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-ra-green-600 focus:outline-none focus:ring-2 focus:ring-ra-green-600 focus:ring-offset-2',
              ]"
            >
              <span>Communes</span>
              <Icon
                  name="mdi:chevron-down"
                  class="ml-2 h-5 w-5 group-hover:text-gray-500 text-gray-400"
                  aria-hidden="true"
              />
            </PopoverButton>

            <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1"
            >
              <PopoverPanel
                  class="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0"
              >
                <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white">
                  <!-- Champ de recherche -->
                  <div class="border-b border-gray-200">
                    <input
                        v-model="searchQuery"
                        type="text"
                        placeholder="Rechercher une commune..."
                        class="w-full px-4 py-2 border-0 focus:ring-0 text-sm"
                    />
                  </div>

                  <!-- Liste des communes (5 premières par défaut, filtrées si recherche) -->
                  <div class="max-h-60 overflow-y-auto">
                    <NuxtLink
                        v-for="commune in filteredCommunes.slice(0, 5)"
                        :key="commune.id"
                        :to="getVoieCyclablePath(commune.line)"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {{ commune.shortName }}
                    </NuxtLink>

                    <!-- Si plus de 5 résultats -->
                    <div
                        v-if="filteredCommunes.length > 5 && !searchQuery"
                        class="text-center text-xs text-gray-500 py-1 border-t"
                    >
                      ...et {{ filteredCommunes.length - 5 }} autres
                    </div>
                  </div>

                  <!-- Lien vers le tableau de bord -->
                  <div class="bg-ra-green-600 text-white text-center py-1">
                    <NuxtLink
                        to="/tableau-de-bord"
                        class="block px-4 py-2 hover:underline"
                    >
                      Tableau de bord
                    </NuxtLink>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <!-- Menu Outils d'analyse -->
          <Popover v-slot="{ open }" class="relative">
            <PopoverButton
                :class="[
                open ? 'text-gray-900' : 'text-gray-500',
                'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-ra-green-600 focus:outline-none focus:ring-2 focus:ring-ra-green-600 focus:ring-offset-2',
              ]"
            >
              <span>Outils d'analyse</span>
              <Icon
                  name="mdi:chevron-down"
                  :class="[
                  open ? 'text-gray-600' : 'text-gray-400',
                  'ml-2 h-5 w-5 group-hover:text-gray-500',
                ]"
                  aria-hidden="true"
              />
            </PopoverButton>
            <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1"
            >
              <PopoverPanel
                  v-slot="{ close }"
                  class="absolute left-1/2 z-10 mt-3 w-screen md:w-max max-w-md -translate-x-1/2 transform px-2 sm:px-0"
              >
                <div
                    class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white"
                >
                  <div class="p-4 flex flex-col gap-2">
                    <NuxtLink
                        to="https://cyclopolis.rayonsdaction.org"
                        target="_blank"
                        class="flex align-center space-x-2 text-base font-medium text-gray-500 hover:text-ra-green-600"
                        @click="close()"
                    >
                      <span>Suivi du REV par Rayons d'Action</span>
                      <div class="flex items-center">
                        <Icon
                            name="mdi:launch"
                            class="h-4 w-4"
                            aria-hidden="true"
                        />
                      </div>
                    </NuxtLink>
                    <NuxtLink
                        to="https://www.barometre-velo.fr/2025/carte/?c=35238#10.51/48.0972/-1.6761"
                        target="_blank"
                        class="flex align-center space-x-2 text-base font-medium text-gray-500 hover:text-ra-green-600"
                        @click="close()"
                    >
                      <span>Baromètre FUB Rennes</span>
                      <div class="flex items-center">
                        <Icon
                            name="mdi:launch"
                            class="h-4 w-4"
                            aria-hidden="true"
                        />
                      </div>
                    </NuxtLink>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
        </PopoverGroup>

        <div class="hidden md:flex md:flex-1 lg:w-0 justify-end">
          <NuxtLink to="/" class="flex space-x-2 items-center">
            <span class="sr-only">Municipales 2026 - Rennes Métropole</span>
            <img
                class="h-10 w-auto sm:h-12"
                src="https://www.mce-info.org/wp-content/uploads/2024/02/25-Rayons-d-action.webp"
                :alt="`logo ${getAssoName()}`"
            />
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Header mobile -->
    <transition
        enter-active-class="duration-200 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
          v-slot="{ close }"
          focus
          class="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
      >
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <!-- En-tête avec bouton de fermeture -->
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div class="-mr-2">
                <PopoverButton
                    class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ra-green-600"
                >
                  <span class="sr-only">Fermer menu</span>
                  <Icon name="mdi:close" class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
          </div>

          <!-- Section "Communes" -->
          <div class="py-6 px-5">
            <h3 class="text-lg font-medium text-gray-900 mb-4">Communes</h3>

            <!-- Champ de recherche -->
            <div class="mb-4">
              <input
                  v-model="mobileSearchQuery"
                  type="text"
                  placeholder="Rechercher une commune..."
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ra-green-600 focus:border-transparent"
              />
            </div>

            <!-- Liste des communes filtrées -->
            <div class="space-y-2 max-h-60 overflow-y-auto">
              <NuxtLink
                  v-for="commune in mobileFilteredCommunes"
                  :key="commune.id"
                  :to="getVoieCyclablePath(commune.line)"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ra-green-600 hover:bg-gray-50"
                  @click="close()"
              >
                {{ commune.shortName }}
              </NuxtLink>

              <!-- Message si aucune commune ne correspond -->
              <div v-if="mobileFilteredCommunes.length === 0" class="text-center text-gray-500 py-4">
                Aucune commune trouvée.
              </div>
            </div>
          </div>

          <!-- Section "Outils d'analyse" -->
          <div class="py-6 px-5">
            <h3 class="text-lg font-medium text-gray-900 mb-4">Outils d'analyse</h3>
            <div class="space-y-2">
              <NuxtLink
                  to="https://cyclopolis.rayonsdaction.org"
                  target="_blank"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ra-green-600 hover:bg-gray-50"
                  @click="close()"
              >
                Suivi du REV par Rayons d'Action
              </NuxtLink>
              <NuxtLink
                  to="https://www.barometre-velo.fr/2025/carte/?c=35238#10.51/48.0972/-1.6761"
                  target="_blank"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ra-green-600 hover:bg-gray-50"
                  @click="close()"
              >
                Baromètre FUB Rennes
              </NuxtLink>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>


<script setup lang="ts">
import { ref, computed } from 'vue';
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue';

const { getVoieCyclablePath } = useUrl();
const { getAssoName } = useConfig();

// Récupération des communes
const { data: voies } = await useAsyncData(() => {
  return queryCollection('voiesCyclablesPage').order('line', 'ASC').all();
});

// État local pour la recherche
const searchQuery = ref('');
const showResults = ref(false);

// Filtre les voies en fonction de la recherche
const filteredVoies = computed(() => {
  if (!searchQuery.value) return voies.value || [];
  const query = searchQuery.value.toLowerCase();
  return (voies.value || []).filter((voie) =>
      voie.shortName.toLowerCase().includes(query)
  );
});


const filteredCommunes = computed(() => {
  if (!searchQuery.value) return filteredVoies.value
  return filteredVoies.value.filter(c =>
      c.shortName.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const mobileSearchQuery = ref('');

// Filtre les communes pour le menu mobile
const mobileFilteredCommunes = computed(() => {
  if (!mobileSearchQuery.value) {
    // Affiche les 5 premières communes par défaut
    return (voies.value || []).slice(0, 5);
  }
  const query = mobileSearchQuery.value.toLowerCase();
  return (voies.value || []).filter((voie) =>
      voie.shortName.toLowerCase().includes(query)
  );
});
</script>

<style>
</style>